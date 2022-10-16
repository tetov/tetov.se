import { graphql, HeadFC, PageProps } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import * as React from "react";
import type { ArticleProp } from "src/components/article";
import Article from "src/components/article";
import HeadComponent from "src/components/head";
import Layout from "src/components/layout";

type GatsbyMarkdownPage = React.FC<PageProps<Queries.MarkdownPageQuery>>;

const MarkdownPage: GatsbyMarkdownPage = (props) => {
  const category = props.data.markdownRemark?.fields?.category;

  if (!category) {
    throw new Error("No category set on node's fields.");
  }

  const articlePropMapping: { [key: string]: Partial<ArticleProp> } = {
    posts: {
      articleClass: "h-entry",
      articleType: "BlogEntry",
      bodyItemProp: "articleBody",
      date: props.data.markdownRemark?.frontmatter.date,
    },
    projs: {
      articleClass: "h-entry",
      articleType: "CreativeWork",
      bodyItemProp: "about",
    },
  };

  const articleProp = articlePropMapping[category];

  if (!articleProp) {
    throw new Error(`No matching articleProp for category: ${category}`);
  }

  const markdownRemark = props.data.markdownRemark;

  return (
    <Layout pathname={props.location.pathname}>
      <Article
        pathname={props.location.pathname}
        html={markdownRemark.html}
        title={markdownRemark.frontmatter.title}
        bannerImageData={
          markdownRemark.frontmatter.image?.childImageSharp?.bannerImgData
        }
        imageAlt={markdownRemark?.frontmatter.imageAlt || undefined}
        {...articleProp}
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
        image {
          ...BannerImg
        }
      }
    }
  }
`;
