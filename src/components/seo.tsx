import querySiteMetadata from "src/hooks/query-site-metadata";
import queryTwitterUname from "src/hooks/query-twitter-uname";

const SEO: React.FC<{
  pathname?: string;
  pageTitle?: string;
  description?: string;
  image?: string;
}> = ({ pageTitle, description, image, pathname, children}) => {
  const {
    title: siteTitle,
    description: defaultDescription,
    image: defaultImage,
    siteURL,
  } = querySiteMetadata();
  const twitterUsername = queryTwitterUname();

  const seo = {
    pageTitle,
    siteTitle,
    description: description.trim() || defaultDescription.trim(),
    image: `${siteURL}${image || defaultImage}`,
    url: `${siteURL}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <title>
        {seo.pageTitle ? `${seo.pageTitle} - ${seo.siteTitle}` : seo.siteTitle}
      </title>
      <meta property="og:title" content={seo.pageTitle} />

      <meta property="og:site_name" content={seo.siteTitle} />

      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />

      <meta property="og:image" content={seo.image} />

      <meta property="og:url" content={seo.url} />

      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={seo.twitterUsername} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {children}
    </>
  );
};

export default SEO;
