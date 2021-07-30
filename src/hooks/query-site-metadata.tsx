import { graphql, useStaticQuery } from "gatsby";

const querySiteMetadata = () => {
  const { site } = useStaticQuery<GatsbyTypes.SiteMetaDataQuery>(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteURL
            lang
            description
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default querySiteMetadata;
