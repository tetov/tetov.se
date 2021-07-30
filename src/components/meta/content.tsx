import React from "react";
import { Helmet } from "react-helmet";

type Prop = {
  title: string;
  excerpt?: string;
  lang?: string;
  type?: string;
  dateCreated?: string;
};

const MetaContent: React.FC<Prop> = ({
  title,
  excerpt,
  type,
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

    {dateCreated && type === "article" && (
      <meta property="article:published_time" content={dateCreated} />
    )}
  </Helmet>
);

export default MetaContent;
