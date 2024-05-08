import React from "react";
import querySiteMetadata from "src/hooks/query-site-metadata";

const HeadComponent = ({
  pageTitle,
  description,
  imageUrl,
  pathname,
  children,
}: React.PropsWithChildren<{
  pathname: string;
  pageTitle?: string;
  description?: string;
  imageUrl?: string;
}>) => {
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

      <meta property="og:url" content={`${siteURL}${pathname || ""}`} />

      {/* TODO: Overwrite this in posts and projs etc */}
      <meta property="og:type" content="website" id="og:type" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={`@${twitterUsername}`} />
      <meta name="twitter:creator" content={`@${twitterUsername}`} />
      {children}
    </>
  );
};

export default HeadComponent;
