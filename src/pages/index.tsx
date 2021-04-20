import { graphql } from "gatsby"
import React from "react"

import ContentPreview from "../components/content-preview"
import HeroProj from "../components/hero-proj"
import Layout from "../components/layout"
import useSiteMetadata from "../helpers/hook-use-site-metadata"

const Index: GatsbyPage<GatsbyTypes.IndexQuery, string> = ({ data, location }) => {
  const { title, description } = useSiteMetadata()

  const contentNodes = data.allMarkdownRemark.nodes

  const [heroProj, ...projNodes] = contentNodes
  // const [heroProj, ...projNodes] = contentNodes.filter(
  // (node) => node.fields.category == "proj"
  // )

  return (
    <Layout location={location} title={title}>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          {title}
        </h1>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          {description}
        </h4>
      </section>
      <HeroProj {...heroProj} />

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
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
  query Index{
    allMarkdownRemark(
      filter: { fields: { category: { eq: "projs" } } }
      sort: { fields: [frontmatter___date], order: DESC }
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
