import { graphql } from "gatsby"
import React from "react"

import ContentBody from "../content-body"
import Layout from "../layout"
import PageHeader from "../page-header"

const TemplatePage: GatsbyPage<GatsbyTypes.PagePropQuery> = ({
  data: {
    html,
    excerpt,
    frontmatter: { title, description, lang },
    fields: { slug },
  },
}) => (
  <Layout title={title} description={description || excerpt} lang={lang}>
    <article itemScope itemType="http://schema.org/WebPage">
      <PageHeader itemProp="headline" url={`/${slug}`}>
        {title}
      </PageHeader>
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
      fields {
        slug
      }
      frontmatter {
        title
        description
        lang
      }
    }
  }
`
