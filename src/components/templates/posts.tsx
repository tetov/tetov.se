import { graphql } from "gatsby"
import React from "react"

import { ILayoutProp } from "../layout"
import BaseTemplate from "./_base"

const TemplatePost: GatsbyPage<GatsbyTypes.PostPropQuery> = ({
  data,
  location,
}) => {
  const { html, excerpt } = data.markdownRemark
  const { title, description, lang, date } = data.markdownRemark.frontmatter

  const baseProp: ILayoutProp = {
    location: location,
    title: title,
    description: description || excerpt,
    lang: lang,
  }

  return (
    <BaseTemplate {...baseProp}>
      <article itemScope itemType="http://schema.org/BlogPosting">
        <header>
          <h1 itemProp="headline">{title}</h1>
          <p itemProp="dateCreated">{date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: html }}
          itemProp="articleBody"
        />
      </article>
    </BaseTemplate>
  )
}

export default TemplatePost

export const pageQuery = graphql`
  query PostProp($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
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
