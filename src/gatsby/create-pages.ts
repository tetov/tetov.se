import { GatsbyNode } from "gatsby"
import path from "path"

import { IMarkdownRemarkNode } from "../helpers/types"

interface IQueryResult {
    allMarkdownRemark: {
        nodes: IMarkdownRemarkNode[]
    }
}

const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  // Get all markdown blog posts sorted by date
  const result = await graphql<IQueryResult>(
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
              category
            }
          }
        }
      }
    `
  )

  if (result.errors || !result.data) {
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
    contentNodes.forEach((node) => {
      // const previousPostId = index === 0 ? null : posts[index - 1].id
      // const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
      const Component = path.resolve(
        `./src/components/templates/${node.fields.category || "pages"}.tsx`
      )

      createPage({
        path: node.fields.slug,
        component: Component,
        context: {
          id: node.id,
          //     previousPostId,
          //     nextPostId,
        },
      })
    })
  }
}

export default createPages
