import * as React from "react";
import querySiteMetadata from "src/hooks/query-site-metadata";

const HeadComponent: React.FC<
  React.PropsWithChildren<{
    pathname: string;
    pageTitle?: string;
    description?: string;
    imageUrl?: string;
  }>
> = ({ pageTitle, description, imageUrl, pathname, children }) => {
  const {
    title: siteTitle,
    description: defaultDescription,
    image: defaultImage,
    siteURL,
    twitterUsername,
  } = querySiteMetadata();

  const metaDescription = description || defaultDescription;
  const metaImage = `${siteURL}${imageUrl || defaultImage}`;

  return (
    <>
      <title>{pageTitle ? `${pageTitle} - ${siteTitle}` : siteTitle}</title>
      <meta property="og:title" content={pageTitle || siteTitle} />

      <meta property="og:site_name" content={siteTitle} />

      <meta
        name="description"
        content={metaDescription.trim()}
        id="description"
      />

      <meta
        property="og:description"
        content={metaDescription}
        id="description"
      />

      <meta property="og:image" content={metaImage} />

      <meta property="og:url" content={`${siteURL}${pathname || ``}`} />

      <meta property="og:type" content="website" id="og:type" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:creator" content={twitterUsername} />
      {children}
    </>
  );
};

export default HeadComponent;
