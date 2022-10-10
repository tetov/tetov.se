import ArticleBody from "./body";
import ArticleHeader from "./header";
import Time from "./time";

import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";

type ArticleMarkup = {
  articleClass: string;
  articleType: string;
  bodyItemProp: string;
};

export type ArticleProp = ArticleMarkup & {
  pathname: string;
  html: string;
  title: string;
  machineReadableDate: string;
  date?: string;
  bannerImageData?: IGatsbyImageData;
  imageAlt?: string;
};

const Article: React.FC<ArticleProp> = ({
  pathname,
  articleClass,
  articleType,
  bodyItemProp,
  html,
  title,
  date,
  machineReadableDate,
  bannerImageData,
  imageAlt,
}) => {
  return (
    <article
      className={articleClass}
      itemScope
      itemType={`http://schema.org/${articleType}`}
    >
      <ArticleHeader itemProp="headline" url={`/${pathname}`}>
        {title}
      </ArticleHeader>
      <Time machineReadableDate={machineReadableDate}>
        {date && (
          <p className="mb-4 text-4xl lg:text-6xl leading-tight">{date}</p>
        )}
      </Time>
      {bannerImageData && (
        <GatsbyImage
          alt={imageAlt || `Cover image for ${title}`}
          image={bannerImageData}
          loading="eager"
          className="mb-8 md:mb-16"
          imgClassName="shadow-sm hover:shadow-md transition-shadow duration-200"
        />
      )}
      <ArticleBody content={html} itemProp={bodyItemProp} />
    </article>
  );
};

export { default as ArticlePreview } from "./preview";
export default Article;
