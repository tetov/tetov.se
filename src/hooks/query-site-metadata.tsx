import { graphql, useStaticQuery } from "gatsby";

const querySiteMetadata = (): Queries.SiteMetadata => {
  const data = useStaticQuery<Queries.SiteMetadataQuery>(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            siteURL
            lang
            description
            image
            author
            twitterUsername
            navigation {
              text
              url
            }
          }
        }
      }
    `
  );

  if (!data?.site?.siteMetadata) {
    throw new TypeError("useStaticQuery didn't return siteMetadata");
  }
  return data.site.siteMetadata;
};

export default querySiteMetadata;
