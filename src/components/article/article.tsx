import PageTitle from "src/components/page-title";
import Logo from "src/logo.inline.svg";

import classNames from "classnames";
import { graphql, Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";

type ArticleMarkup = {
  articleMF2Class?: string;
  articleType?: string;
  bodyItemProp?: string;
};

export type ArticleProp = {
  pathname: string;
  html: string;
  title: string;
  machineReadableDate: string;
  date?: string;
  bannerImageData?: IGatsbyImageData;
  imageAlt?: string;
  imageCaption?: string;
  className?: string;
  articleMarkup?: ArticleMarkup;
};

export const Article = ({
  pathname,
  className = "",
  body,
  title,
  date,
  machineReadableDate,
  bannerImageData,
  imageAlt,
  imageCaption,
  articleMarkup,
}: ArticleProp) => (
  <article
    className={classNames(className, articleMarkup?.articleMF2Class, "mx-auto")}
    itemScope
    itemType={
      articleMarkup?.articleType &&
      `http://schema.org/${articleMarkup.articleType}`
    }
  >
    <header className="mb-2">
      <PageTitle itemProp="headline" mfClass="p-name">
        {title}
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
            className="mt-2 mb-4 italic"
            dangerouslySetInnerHTML={{ __html: imageCaption }}
          />
        )}
      </figure>
    )}
    <div
      className="e-content max-w-2xl mx-auto"
      dangerouslySetInnerHTML={{ __html: html }}
      itemProp={articleMarkup?.bodyItemProp}
    />
    <footer className="text-sm text-center italic">
      <Link to={pathname} className="u-url">
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

export const query = graphql`
  fragment Article on MarkdownRemark {
    excerpt(pruneLength: 160, format: PLAIN)
    id
    html
    fields {
      slug
      category
    }
    frontmatter {
      title
      date(formatString: "YYYY-MM-DD")
      machineReadableDate: date
      description
      lang
      imageAlt
      imageCaption
      image {
        ...BannerImg
      }
    }
  }
`;
