import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

import ContentBody from "../content-body"
import Header from "../header"
import Layout from "../layout"

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
    <article itemScope itemType="http://schema.org/CreativeWork">
      <Header>
        <Link to={`/${slug}`} className="link-style-alt">
          {title}
        </Link>
      </Header>
      <div className="mb-8 md:mb-16">
        <GatsbyImage
          alt={`Cover image for ${title}`}
          image={heroImgData}
          loading="eager"
          imgClassName="shadow-sm hover:shadow-md transition-shadow duration-200"
        />
      </div>
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
        slug
        heroImg {
          ...HeroImg
        }
      }
      frontmatter {
        lang
      }
    }
  }
`
