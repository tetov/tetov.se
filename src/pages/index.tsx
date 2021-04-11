import { graphql } from "gatsby"
import React from "react"

import ContentPreview from "../components/content-preview"
import HeroProj from "../components/hero-proj"
import Layout from "../components/layout"
import useSiteMetadata from "../helpers/hook-use-site-metadata"

const BlogIndex = ({ data, location }) => {
  const { title } = useSiteMetadata()

  const contentNodes: any[] = data.allMarkdownRemark.nodes

  const [heroProj, ...projNodes] = contentNodes.filter(
    (node) => node.fields.category == "proj"
  )

  return (
    <Layout location={location} title={title}>
      <HeroProj content={heroProj} />

      <ol>
        {projNodes.map((node, idx) => (
          <li key={idx}>
            <ContentPreview content={node} />
          </li>
        ))}
        )
      </ol>
    </Layout>
  )
}

export default BlogIndex

// Query with /(DIR)/
export const pageQuery = graphql`
  query indexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 7
    ) {
      nodes {
        excerpt(pruneLength: 160)
        id
        fields {
          slug
          category
        }
        frontmatter {
          title
          description
          date(formatString: "YYYY-MM")
        }
      }
    }
  }
`
