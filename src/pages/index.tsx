import { graphql } from "gatsby"
import React from "react"

import ContentPreview from "../components/content-preview"
import HeroProj from "../components/hero-proj"
import Layout from "../components/layout"

const Index: GatsbyPage<GatsbyTypes.IndexQuery, string> = ({
  data,
  location,
}) => {
  const contentNodes = data.allMarkdownRemark.nodes

  const [heroProj, ...projNodes] = contentNodes
  // const [heroProj, ...projNodes] = contentNodes.filter(
  // (node) => node.fields.category == "proj"
  // )

  return (
    <Layout location={location}>
      <HeroProj {...heroProj} />

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-8">
        {projNodes.map((node) => (
          <ContentPreview key={node.id} {...node} />
        ))}
      </div>
    </Layout>
  )
}

export default Index

// Query with /(DIR)/
export const pageQuery = graphql`
  query Index {
    allMarkdownRemark(
      filter: { fields: { category: { eq: "projs" } } }
      sort: { fields: [frontmatter___weight], order: DESC }
      limit: 7
    ) {
      nodes {
        id
        ...ContentPreview
        ...HeroProj
      }
    }
  }
`
