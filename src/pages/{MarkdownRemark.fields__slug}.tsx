import { graphql, HeadFC, PageProps } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import * as React from "react";
import type { ArticleProp } from "src/components/article";
import { Article } from "src/components/article";
import HeadComponent from "src/components/head";
import Layout from "src/components/layout";

type GatsbyMarkdownPage = React.FC<PageProps<Queries.MarkdownPageQuery>>;

const MarkdownPage: GatsbyMarkdownPage = ({
  data: { markdownRemark },
  location: { pathname },
}) => {
  if (!markdownRemark) {
    throw new TypeError("MarkdownRemark null on node.");
  }

  if (!markdownRemark.fields || !markdownRemark.frontmatter) {
    throw new TypeError("Fields or FrontMatter null on node");
  }

  if (!markdownRemark.html) {
    throw new Error("Content contains no HTML content.");
  }

  const category = markdownRemark.fields.category;

  if (!category) {
    throw new Error("No category set on node's fields.");
  }

  const prop: Partial<ArticleProp> = {};

  if (category === "special" && markdownRemark.fields.slug === "cv") {
    prop["className"] = "cv-screen prose dark:prose-invert prose-a:link-style";
    prop["articleMarkup"] = {
      articleMF2Class: "h-resume",
      articleType: "Person",
    };
    prop["date"] = markdownRemark.frontmatter.date;
  } else if (category === "posts") {
    prop["articleMarkup"] = {
      articleMF2Class: "h-entry",
      articleType: "BlogEntry",
      bodyItemProp: "articleBody",
    };
    prop["date"] = markdownRemark.frontmatter.date;
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
        html={markdownRemark.html ?? ""}
        title={markdownRemark.frontmatter.title}
        bannerImageData={
          markdownRemark.frontmatter.image?.childImageSharp?.bannerImgData
        }
        imageAlt={markdownRemark.frontmatter.imageAlt || undefined}
        imageCaption={markdownRemark.frontmatter.imageCaption || undefined}
        machineReadableDate={markdownRemark.frontmatter.machineReadableDate}
        {...prop}
      />
    </Layout>
  );
};

export default MarkdownPage;

export const Head: HeadFC<Queries.MarkdownPageQuery> = ({
  location: { pathname },
  data: {
    markdownRemark: {
      frontmatter: { title, description, image, machineReadableDate },
      excerpt,
    },
  },
}) => (
  <HeadComponent
    pathname={pathname}
    imageUrl={getSrc(image)}
    pageTitle={title}
    description={description || excerpt || ""}
  >
    <meta property="og:type" content="article" id="og:type" />
    {machineReadableDate && (
      <meta
        property="og:article:published_time"
        content={machineReadableDate}
      />
    )}
  </HeadComponent>
);

export const query = graphql`
  query MarkdownPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...Article
    }
  }
`;
