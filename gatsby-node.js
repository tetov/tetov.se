/* eslint-disable @typescript-eslint/no-var-requires */
import { parse } from `path`
import { createFilePath } from `gatsby-source-filesystem`
import ContentTemplate from `./src/helpers/content-template`
import { readdir } from `fs`

export async function createPages({ graphql, actions, reporter }) {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const contentNodes = result.data.allMarkdownRemark.nodes

  // Create pages
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (contentNodes.length > 0) {
    contentNodes.forEach((nodes) => {
      // const previousPostId = index === 0 ? null : posts[index - 1].id
      // const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
      createPage({
        path: nodes.fields.slug,
        component: ContentTemplate,
        context: {
          id: nodes.id,
          //     previousPostId,
          //     nextPostId,
        },
      })
    })
  }
}

export function onCreateNode({ node, actions, getNode }) {
  console.log(node.internal.type)
  if (node.internal.type !== `MarkdownRemark`) return

  const { createNodeField, getNodesByType } = actions
  const image_ext_regex = /gif|jpe?g|png|webp|svg/i

  const filepath = createFilePath({ node, getNode })

  const { dir } = parse(filepath)

  const { hero, images } = () => {
    var hero = ""
    const images = []

    // get a list of files in `dir`
    readdir(dir, (err, files) => {
      files.forEach(function (file) {
        const { name, ext } = parse(file)

        if (image_ext_regex.test(ext)) {
          if (name.toLowerCase().includes("hero")) {
            hero = file
          } else {
            images.push(file)
          }
        }
      })
    })

    return { hero: hero, images: images }
  }

  const fileNodes = getNodesByType("File")

  const getNodeByPath = (path_) =>
    fileNodes.find((fileNode) => fileNode.absolutePath === path_)

  const imageNodes = images.map(getNodeByPath)

  const heroNode = getNodeByPath(hero)

  createNodeField({
    node,
    name: `slug`,
    value: `$(node.parent.relativeDirectory)s`,
  })

  createNodeField({
    node,
    name: `category`,
    value: node.parent.sourceInstanceName,
  })

  createNodeField({
    node,
    name: `hero`,
    value: heroNode,
  })

  createNodeField({
    node,
    name: `images`,
    value: imageNodes,
  })
}

export function createSchemaCustomization({ actions }) {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteMetadata {
      title: String!
      description: String
      siteUrl: String!
      lang: String
      social: Social
      logo: String
    }
    type Social {
      twitter: String
      matrix: String
      instagram: String
      mastodon: String
      email: String
    }
    type MarkdownRemark implements Node {
      html: String!
      frontmatter: Frontmatter!
      fields: Field!
    }
    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      lang: String
      heroImg: File
      images: [File]
    }
    type Fields {
      slug: String
      category: String
      heroImage: File
      images: [File]
    }
  `)
}
