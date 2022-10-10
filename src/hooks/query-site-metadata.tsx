import { graphql, useStaticQuery } from "gatsby";

const querySiteMetadata = () => {
  const { site } = useStaticQuery<Queries.SiteMetaDataQuery>(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteURL
            lang
            description
            image
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default querySiteMetadata;
