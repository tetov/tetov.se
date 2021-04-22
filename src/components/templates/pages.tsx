import { graphql } from "gatsby"
import React from "react"

import ContentBody from "../content-body"
import Layout from "../layout"

const TemplatePage: GatsbyPage<GatsbyTypes.PagePropQuery> = ({
  data: {
    html,
    excerpt,
    frontmatter: { title, description, lang },
  },
  location,
}) => (
  <Layout
    location={location}
    title={title}
    description={description || excerpt}
    lang={lang}
  >
    <article itemScope itemType="http://schema.org/WebPage">
      <header>
        <h1 itemProp="name">{title}</h1>
      </header>
      <ContentBody content={html} itemProp="mainContentOfPage" />
    </article>
  </Layout>
)

export default TemplatePage

export const pageQuery = graphql`
  query PageProp($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        lang
      }
    }
  }
`
