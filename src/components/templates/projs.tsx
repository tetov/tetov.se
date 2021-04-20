import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

import { ILayoutProp } from "../layout"
import BaseTemplate from "./_base"

const TemplateProj: GatsbyPage<GatsbyTypes.ProjPropQuery> = ({
  data: {
    markdownRemark: {
      html,
      excerpt,
      fields: {
        heroImg: { heroImgData },
      },
      frontmatter: { title, description, lang, date },
    },
  },
  location,
}) => {
  const baseProp: ILayoutProp = {
    location: location,
    title: title,
    description: description || excerpt,
    lang: lang,
  }

  return (
    <BaseTemplate {...baseProp}>
      <article itemScope itemType="http://schema.org/CreativeWork">
        <header>
          <h3
            itemProp="headline"
            className="mb-4 text-4xl lg:text-6xl leading-tight"
          >
            {title}
          </h3>
          <p className="mb-4 md:mb-0 text-lg">{date}</p>
        </header>
        <div className="mb-8 md:mb-16">
          <GatsbyImage
            alt={`Cover image for ${title}`}
            image={heroImgData}
            loading="eager"
            imgClassName="shadow-sm hover:shadow-md transition-shadow duration-200"
          />
        </div>
        <section dangerouslySetInnerHTML={{ __html: html }} itemProp="about" />
      </article>
    </BaseTemplate>
  )
}

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
      frontmatter {
        lang
      }
    }
  }
`
