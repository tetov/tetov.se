import { graphql, HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { ArticleListing } from "src/components/article";
import HeadComponent from "src/components/head";
import Layout from "src/components/layout";
import PageTitle from "src/components/page-title";

const Posts = ({
  location: { pathname },

  data: {
    allMarkdownRemark: { nodes: postNodes },
  },
}: PageProps<Queries.PostsQuery>) => {
  return (
    <Layout pathname={pathname}>
      <PageTitle>Posts</PageTitle>
      <ArticleListing nodes={postNodes as Queries.ArticlePreviewFragment[]} />
    </Layout>
  );
};

export default Posts;

export const Head: HeadFC = ({ location }) => (
  <HeadComponent pathname={location.pathname} />
);

// Query with /(DIR)/
export const query = graphql`
  query Posts {
    allMarkdownRemark(
      filter: { fields: { category: { eq: "posts" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        ...ArticlePreview
      }
    }
  }
`;
