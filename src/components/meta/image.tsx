import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

type MetaImageProp = {
  src?: string;
  alt?: string;
};

type PureMetaImageProp = MetaImageProp & {
  siteURL: string;
};

export const PureMetaImage: React.FC<PureMetaImageProp> = ({
  src,
  alt,
  siteURL,
}) => (
  <Helmet>
    {src && <meta property="og:image" content={siteURL + src} />}
    {src && alt && <meta property="og:image:alt" content={alt} />}
  </Helmet>
);

const MetaImage: React.FC<MetaImageProp> = ({ src, alt }) => {
  const data = useStaticQuery<GatsbyTypes.SiteURLQuery>(graphql`
    query SiteURL {
      site {
        siteMetadata {
          siteURL
        }
      }
    }
  `);
  return (
    <PureMetaImage
      src={src}
      alt={alt}
      siteURL={data.site.siteMetadata.siteURL}
    />
  );
};

export default MetaImage;
