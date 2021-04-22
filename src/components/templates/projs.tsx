import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

import ContentBody from "../content-body"
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
  location,
}) => (
  <Layout
    location={location}
    title={title}
    description={description || excerpt}
    lang={lang}
  >
    <article itemScope itemType="http://schema.org/CreativeWork">
      <header id="proj">
        <Link to={`/${slug}`} className="link-style-alt">
          <h2
            itemProp="headline"
            className="mb-4 text-4xl lg:text-6xl leading-tight link-style-alt"
          >
            {title}
          </h2>
        </Link>
      </header>
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
