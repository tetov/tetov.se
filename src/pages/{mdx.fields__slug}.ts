import { graphql, HeadFC, PageProps } from "gatsby";
import type { ImageDataLike } from "gatsby-plugin-image";
import { getSrc } from "gatsby-plugin-image";
import * as React from "react";
import type { ArticleProp } from "src/components/article";
import { Article } from "src/components/article";
import HeadComponent from "src/components/head";
import Layout from "src/components/layout";

type GatsbyMarkdownPage = React.FC<PageProps<Queries.MarkdownPageQuery>>;

const MarkdownPage: GatsbyMarkdownPage = ({
  data: { mdx },
  location: { pathname },
  children
}) => {
  if (!mdx) {
    throw new TypeError("MarkdownRemark null on node.");
  }

  if (!mdx.fields || !mdx.frontmatter) {
    throw new TypeError("Fields or FrontMatter null on node");
  }

  if (!children) {
    throw new Error("Content contains no HTML content.");
  }

  const category = mdx.fields.category;

  if (!category) {
    throw new Error("No category set on node's fields.");
  }

  const prop: Partial<ArticleProp> = {};

  if (category === "special" && mdx.fields.slug === "cv") {
    prop["className"] = "cv-screen prose dark:prose-invert prose-a:link-style";
    prop["articleMarkup"] = {
      articleMF2Class: "h-resume",
      articleType: "Person",
    };
    prop["date"] = mdx.frontmatter.date;
  } else if (category === "posts") {
    prop["articleMarkup"] = {
      articleMF2Class: "h-entry",
      articleType: "BlogEntry",
      bodyItemProp: "articleBody",
    };
    prop["date"] = mdx.frontmatter.date;
  } else if (category === "projs") {
    prop["articleMarkup"] = {
      articleMF2Class: "h-entry",
      articleType: "CreativeWork",
      bodyItemProp: "about",
    };
  } else {
    throw new Error("Node doesn't match any prop templates.");
  }

  prop["className"] =
    prop["className"] ?? "prose dark:prose-invert prose-a:link-style";

  return (
    <Layout pathname={pathname}>
      <Article
        pathname={pathname}
        body={children}
        title={mdx.frontmatter.title}
        bannerImageData={
          mdx.frontmatter.image?.childImageSharp?.bannerImgData
        }
        imageAlt={mdx.frontmatter.imageAlt || undefined}
        imageCaption={mdx.frontmatter.imageCaption || undefined}
        machineReadableDate={mdx.frontmatter.machineReadableDate}
        {...prop}
      />
    </Layout>
  );
};

export default MarkdownPage;

export const Head: HeadFC<Queries.MarkdownPageQuery> = ({
  location: { pathname },
  data: {
    mdx: {
      frontmatter: { title, description, image, machineReadableDate },
      excerpt,
    },
  },
}) => (
  <HeadComponent
    pathname={pathname}
    imageUrl={getSrc(image as ImageDataLike)}
    pageTitle={title as string}
    description={(description || excerpt || "") as string}
  >
    <meta property="og:type" content="article" id="og:type" />
    {machineReadableDate && (
      <meta
        property="og:article:published_time"
        content={machineReadableDate as string}
      />
    )}
  </HeadComponent>
);

export const query = graphql`
  query MarkdownPage($id: String!) {
    mdx(id: { eq: $id }) {
      ...Article
    }
  }
`;
