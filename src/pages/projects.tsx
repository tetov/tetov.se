import { graphql, HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { ArticleListing } from "src/components/article";
import HeadComponent from "src/components/head";
import HeroProj from "src/components/hero-proj";
import Layout from "src/components/layout";
import PageTitle from "src/components/page-title";

const Projects: React.FC<PageProps<Queries.ProjectsQuery>> = ({
  location: { pathname },
  data: {
    allMarkdownRemark: { nodes: mdNodes },
    allContactData: { nodes: contactDataNodes },
  },
}) => {
  const [heroProj, ...projNodes] = mdNodes;

  return (
    <Layout pathname={pathname}>
      <PageTitle>Projects</PageTitle>
      <HeroProj {...heroProj} />
      <ArticleListing nodes={projNodes as Queries.MarkdownRemark[]} />
    </Layout>
  );
};

export default Projects;

export const Head: HeadFC = ({ location }) => (
  <HeadComponent pathname={location.pathname} />
);

// Query with /(DIR)/
export const query = graphql`
  query Projects {
    allMarkdownRemark(
      filter: { fields: { category: { eq: "projs" } } }
      sort: { fields: [frontmatter___weight], order: DESC }
      limit: 7
    ) {
      nodes {
        id
        ...ArticlePreview
        ...HeroProjPreview
      }
    }
    allContactData {
      nodes {
        ...HCard
      }
    }
  }
`;
