import { graphql } from "gatsby"
import React from "react"

import ContentBody from "../content-body"
import Layout from "../layout"
import PageHeader from "../page-header"

const TemplatePost: GatsbyPage<GatsbyTypes.PostPropQuery> = ({
  data: {
    html,
    excerpt,
    frontmatter: { title, description, lang, date, machineReadableDate },
    fields: { slug },
  },
}) => (
  <Layout title={title} description={description || excerpt} lang={lang}>
    <article
      className="h-entry"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <PageHeader itemProp="headline" url={`/${slug}`}>
        {title}
      </PageHeader>
      <p className="mb-4 text-4xl lg:text-6xl leading-tight">
        <time itemProp="dateCreated" dateTime={machineReadableDate}>
          {date}
        </time>
      </p>
      <ContentBody content={html} itemProp="articleBody" />
    </article>
  </Layout>
)

export default TemplatePost

export const pageQuery = graphql`
  query PostProp($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160, format: MARKDOWN)
      html
      frontmatter {
        title
        description
        lang
        date(formatString: "YYYY-MM-DD")
        machineReadableDate: date
      }
      fields {
        slug
      }
    }
  }
`
