/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

import useSiteMetadata from "../helpers/hook-use-site-metadata"

export interface ISEOProp {
  description?: string
  lang?: string
  meta?: Array<{ name: string; content: string }>
  title?: string
}

// TODO: Add ogImage

const SEO: React.FC<ISEOProp> = ({
  description = "",
  lang: pageLang,
  meta = [],
  title,
}) => {
  const {
    description: siteDesc,
    title: siteTitle,
    lang: siteLang,
  } = useSiteMetadata()

  const {
    allContactData: { nodes },
  } = useStaticQuery<GatsbyTypes.TwitterUsernameQuery>(graphql`
    query TwitterUsername {
      allContactData(filter: { label: { eq: "twitter" } }, limit: 1) {
        nodes {
          username
        }
      }
    }
  `)

  const twitterUsername = nodes.length > 0 ? nodes[0].username : ""

  const metaDescription: string = description || siteDesc
  const metaTitle: string = title || siteTitle
  const lang: string = pageLang || siteLang || "en"

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      defaultTitle={siteTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `og:site_name`,
          content: siteTitle,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: twitterUsername,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
