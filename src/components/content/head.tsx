import React from "react";
import { Helmet } from "react-helmet";

type ContentLayoutProp = {
  title: string;
  excerpt?: string;
  imgSrc?: string;
  lang?: string;
  type?: string;
  imgAlt?: string;
  dateCreated?: string;
};

const ContentHead: React.FC<ContentLayoutProp> = ({
  title,
  excerpt,
  type,
  imgSrc,
  imgAlt,
  lang,
  dateCreated,
}) => (
  <Helmet>
    {lang && <html lang={lang} />}

    <title>{title}</title>
    <meta property="og:title" content={title} />

    {excerpt && <meta name="description" content={excerpt} />}
    {excerpt && <meta property="og:description" content={excerpt} />}

    {type && <meta property="og:type" content={type} />}

    {imgSrc && <meta property="og:image:url" content={imgSrc} />}
    {imgSrc && imgAlt && <meta property="og:image:alt" content={imgAlt} />}

    {dateCreated && type === "article" && (
      <meta property="article:published_time" content={dateCreated} />
    )}
  </Helmet>
);

export default ContentHead;
