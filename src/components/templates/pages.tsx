import { graphql } from "gatsby"
import React from "react"

import ContentBody from "../content-body"
import Header from "../header"
import Layout from "../layout"

const TemplatePage: GatsbyPage<GatsbyTypes.PagePropQuery> = ({
  data: {
    html,
    excerpt,
    frontmatter: { title, description, lang },
  },
}) => (
  <Layout title={title} description={description || excerpt} lang={lang}>
    <article itemScope itemType="http://schema.org/WebPage">
      <Header>{title}</Header>
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
