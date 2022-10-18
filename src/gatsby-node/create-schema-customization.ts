import { GatsbyNode } from "gatsby";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  async ({ actions: { createTypes } }) => {
    // Explicitly define the siteMetadata {} object
    // This way those will always be defined even if removed from gatsby-config.js

    // Also explicitly define the Markdown frontmatter
    // This way the "MarkdownRemark" queries will return `null` even when no
    // blog posts are stored inside "content/blog" instead of returning an error
    createTypes(`
    type Site {
      siteMetadata: SiteMetadata!
    }
    type SiteMetadata {
      title: String!
      description: String!
      siteURL: String!
      lang: String!
      image: String!
      author: String!
      navigation: [Navigation]!
    }
    type Navigation {
      test: String! 
      url: String!
    }
    type MarkdownRemark {
      frontmatter: MarkdownRemarkFrontmatter!
      fields: MarkdownRemarkFields!
    }
    type MarkdownRemarkFrontmatter {
      title: String!
      description: String
      date: Date! @dateformat
      lang: String
      hero: String
      weight: Int
      image: File @fileByRelativePath
      imageAlt: String
      imageCaption: String
      author: String
    }
    type MarkdownRemarkFields {
      slug: String!
      category: String!
    }
    type ContactData implements Node {
      hcard: String
      icon: String
      label: String!
      text: String!
      url: String
      username: String
      icon: String
      rel: String
      weight: Int
}
  `);
  };
