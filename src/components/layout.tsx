import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../helpers/hook-use-site-metadata";
import Footer from "./footer";
import Header, { HeaderProp } from "./header";

const getTwitterUsername: () => string = () => {
  const { allContactData } =
    useStaticQuery<GatsbyTypes.TwitterUsernameQuery>(graphql`
      query TwitterUsername {
        allContactData(filter: { label: { eq: "twitter" } }, limit: 1) {
          nodes {
            username
          }
        }
      }
    `);
  return allContactData.nodes.length !== 1
    ? ""
    : allContactData.nodes[0].username;
};

type LayoutProp = HeaderProp & {
  children: React.ReactNode;
  pathName: string;
};

const Layout: React.FC<LayoutProp> = ({ children, subHeading, pathName }) => {
  const { description, title, lang, siteURL } = useSiteMetadata();

  const twitterUsername = getTwitterUsername() || "";

  return (
    <>
      <Helmet titleTemplate={`%s | ${title}`} defaultTitle={title}>
        <html lang={lang || "en"} prefix="og: http://ogp.me/ns#" />

        <link rel="micropub" href={`${siteURL}/micropub`} />
        <link rel="authorization_endpoint" href="https://indieauth.com/auth" />
        <link rel="token_endpoint" href="https://tokens.indieauth.com/token" />

        <meta property="og:site_name" content={title} />

        <meta property="og:url" content={`${siteURL}${pathName}`} />

        <meta property="og:type" content="website" />

        <meta property="og:title" content={title} />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={"@" + twitterUsername} />
        <meta name="twitter:creator" content={"@" + twitterUsername} />
      </Helmet>
      <div className="global-wrapper min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
        <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-5 space-y-6">
          <Header subHeading={subHeading} />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
