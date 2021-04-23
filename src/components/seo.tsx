/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

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
  const siteMetadata = useSiteMetadata()

  const metaDescription: string = description || siteMetadata.description
  const metaTitle: string = title || siteMetadata.title
  const lang: string = pageLang || siteMetadata.lang || "en"

  const twitterUsername = siteMetadata.social.find(
    (s) => s.service === "twitter"
  ).username

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      defaultTitle={siteMetadata.title}
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
          content: `tetov.xyz`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          // FIXME
          content: twitterUsername || "",
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
