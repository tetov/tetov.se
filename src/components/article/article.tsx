import PageTitle from "src/components/page-title";
import Logo from "src/logo.inline.svg";

import { Link } from "gatsby";
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
  imageCaption?: string;
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
  imageCaption,
}) => {
  return (
    <article
      className={articleClass}
      itemScope
      itemType={`http://schema.org/${articleType}`}
    >
      <header className="mb-2">
        <PageTitle itemProp="headline" mfClass="p-name">
          <Link to={pathname} className="link-style-alt u-url">
            {title}
          </Link>
        </PageTitle>
      </header>
      {bannerImageData && (
        <figure>
          <GatsbyImage
            alt={imageAlt || `Cover image for ${title}`}
            image={bannerImageData}
            loading="eager"
            className="mt-4 mb-2 shadow-sm hover:shadow-md transition-shadow duration-200"
          />
          {imageCaption && (
            <figcaption
              className="mt-2 mb-4 text-xs font-thin italic text-center prose:invert"
              dangerouslySetInnerHTML={{ __html: imageCaption }}
            />
          )}
        </figure>
      )}
      <div
        className="e-content max-w-2xl mx-auto prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: html }}
        itemProp={bodyItemProp}
      />
      <footer className="text-sm text-center italic">
        <Link to={pathname}>
          <Logo className="w-8 h-8 rounded-full mx-auto mt-12 mb-6" />
          <time
            className="dt-published"
            itemProp="dateCreated"
            dateTime={machineReadableDate}
          >
            {date}
          </time>
        </Link>
      </footer>
    </article>
  );
};
