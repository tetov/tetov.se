import { graphql } from "gatsby"
import React from "react"

import { ILayoutProp } from "../layout"
import BaseTemplate from "./_base"

const TemplatePage: GatsbyPage<GatsbyTypes.PagePropQuery> = ({
  data,
  location,
}) => {
  // TODO: Add heroImage
  // {html, frontmatter: {title, heroImage}}
  const { html, excerpt } = data.markdownRemark
  const { title, description, lang } = data.markdownRemark.frontmatter

  const baseProp: ILayoutProp = {
    location: location,
    title: title,
    description: description || excerpt,
    lang: lang,
  }

  return (
    <BaseTemplate {...baseProp}>
      <article itemScope itemType="http://schema.org/WebPage">
        <header>
          <h1 itemProp="name">{title}</h1>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: html }}
          itemProp="mainContentOfPage"
        />
      </article>
    </BaseTemplate>
  )
}
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
