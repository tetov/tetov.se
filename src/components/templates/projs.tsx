import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

import ContentBody from "../content-body"
import Layout from "../layout"
import PageHeader from "../page-header"

const TemplateProj: GatsbyPage<GatsbyTypes.ProjPropQuery> = ({
  data: {
    markdownRemark: {
      html,
      excerpt,
      fields: {
        heroImg: { heroImgData },
        slug,
      },
      frontmatter: { title, description, lang },
    },
  },
}) => (
  <Layout title={title} description={description || excerpt} lang={lang}>
    <article
      className="h-entry"
      itemScope
      itemType="http://schema.org/CreativeWork"
    >
      <PageHeader url={`/${slug}`}>{title}</PageHeader>
      <GatsbyImage
        alt={`Cover image for ${title}`}
        image={heroImgData}
        loading="eager"
        className="mb-8 md:mb-16"
        imgClassName="shadow-sm hover:shadow-md transition-shadow duration-200"
      />
      <ContentBody content={html} itemProp="about" />
    </article>
  </Layout>
)

export default TemplateProj

export const pageQuery = graphql`
  query ProjProp($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      ...ProjMetaData
      html
      fields {
        heroImg {
          ...HeroImg
        }
      }
    }
  }
`
