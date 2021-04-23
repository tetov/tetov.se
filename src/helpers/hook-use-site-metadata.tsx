import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const { site } = useStaticQuery<GatsbyTypes.SiteMetaDataQuery>(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
            lang
            description
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
