import {ArticleHeader, ArticleBody, ArticleTime} from "src/components/article";

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

export const Article: React.FC<ArticleProp> = ({
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
      <ArticleTime machineReadableDate={machineReadableDate}>
        {date && (
          <p className="mb-4 text-4xl lg:text-6xl leading-tight">{date}</p>
        )}
      </ArticleTime>
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

