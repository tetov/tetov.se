import { GatsbyNode } from "gatsby"

const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = async ({
  actions: { createTypes },
}) => {
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
      social: [ContactDetail]
      logo: String
    }
    type ContactDetail {
      text: String
      url: String
      icon: String
      hcard: String
      service: String
      username: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      lang: String
      hero: String
      weight: Int
    }
    type Fields {
      slug: String
      category: String
      heroImg: ImageSharp
    }
  `)
}

export default createSchemaCustomization
