import querySiteMetadata from "hooks/query-site-metadata";
import queryTwitterUname from "hooks/query-twitter-uname";
import logo from "images/logo.png";
import React from "react";
import { Helmet } from "react-helmet";

export type MetaSiteWide = { pathName: string };

const MetaSiteWide: React.FC<MetaSiteWide> = ({ pathName }) => {
  const { title, lang, siteURL, description } = querySiteMetadata();
  const twitterUsername = queryTwitterUname();
  return (
    <Helmet titleTemplate={`%s | ${title}`} defaultTitle={title}>
      <html lang={lang || "en"} prefix="og: http://ogp.me/ns#" />

      <link rel="micropub" href="https://micropub.tetov.xyz/micropub" />
      <link rel="authorization_endpoint" href="https://indieauth.com/auth" />
      <link rel="token_endpoint" href="https://tokens.indieauth.com/token" />

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

export default MetaSiteWide;
