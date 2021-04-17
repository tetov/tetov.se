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
  title: string
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
  const defaultTitle: string = siteMetadata?.title
  const defaultLang: string = siteMetadata.lang || "en"
  const lang: string = pageLang || defaultLang

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
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
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
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
