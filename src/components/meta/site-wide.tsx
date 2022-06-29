import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import logo from "src/images/logo.png";

export type MetaSiteWide = {
  pathName: string;
  data: GatsbyTypes.MetaSiteWideQuery;
};

export const PureMetaSiteWide: React.FC<{pathName: string, data: GatsbyTypes.MetaSiteWideQuery}> = ({
  pathName,
  data,
}) => {
  const {
    site: {
      siteMetadata: { title, siteURL, lang, description },
    },
    allContactData,
  } = data;
  const twitterUsername = allContactData.nodes[0].username;

  return (
    <Helmet titleTemplate={`%s | ${title}`} defaultTitle={title}>
      <html lang={lang || "en"} prefix="og: http://ogp.me/ns#" />

      <meta property="og:site_name" content={title} />

      <meta property="og:url" content={siteURL + pathName} />

      <meta property="og:type" content="website" />

      <meta property="og:title" content={title} />

      <meta name="description" content={description.trim()} />
      <meta property="og:description" content={description.trim()} />

      <meta property="og:image" content={siteURL + logo} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:creator" content={twitterUsername} />
    </Helmet>
  );
};

const MetaSiteWide: React.FC<{pathName: string}> = ({ pathName }) => {
  const data = useStaticQuery<GatsbyTypes.MetaSiteWideQuery>(
    graphql`
      query MetaSiteWide {
        site {
          siteMetadata {
            title
            siteURL
            lang
            description
          }
        }

        allContactData(filter: { label: { eq: "twitter" } }, limit: 1) {
          nodes {
            username
          }
        }
      }
    `
  );
  return <PureMetaSiteWide pathName={pathName} data={data} />;
};

export default MetaSiteWide;
