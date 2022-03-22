import React from "react";
import { Helmet } from "react-helmet";
import querySiteMetadata from "src/hooks/query-site-metadata";

type Prop = {
  src?: string;
  alt?: string;
};

const MetaImage: React.FC<Prop> = ({ src, alt }) => {
  const { siteURL } = querySiteMetadata();
  return (
    <Helmet>
      {src && <meta property="og:image" content={siteURL + src} />}
      {src && alt && <meta property="og:image:alt" content={alt} />}
    </Helmet>
  );
};

export default MetaImage;
