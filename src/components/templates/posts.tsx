import { graphql } from "gatsby"
import React from "react"

import ContentBody from "../content-body"
import Layout from "../layout"

const TemplatePost: GatsbyPage<GatsbyTypes.PostPropQuery> = ({
  data: {
    html,
    excerpt,
    frontmatter: { title, description, lang, date },
  },
  location,
}) => (
  <Layout
    location={location}
    title={title}
    description={description || excerpt}
    lang={lang}
  >
    <article itemScope itemType="http://schema.org/BlogPosting">
      <header>
        <h2
          itemProp="headline"
          className="mb-4 text-4xl lg:text-6xl leading-tight"
        >
          {title}
        </h2>
        <p
          itemProp="dateCreated"
          className="mb-4 text-4xl lg:text-6xl leading-tight"
        >
          {date}
        </p>
      </header>
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
        date(formatString: "YYYY-MM-DD")
        description
        lang
      }
    }
  }
`
