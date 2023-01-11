import { graphql, HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { ArticleListing } from "src/components/article";
import HeadComponent from "src/components/head";
import HeroProj from "src/components/hero-proj";
import Layout from "src/components/layout";
import PageTitle from "src/components/page-title";

const Projects = ({
  location: { pathname },

  data: {
    allMdx: { nodes: mdxNodes },
  },
}: PageProps<Queries.ProjectsQuery>) => {
  const [heroProj, ...projNodes] = mdxNodes;

  return (
    <Layout pathname={pathname}>
      <PageTitle>Projects</PageTitle>
      <HeroProj {...heroProj} />
      <ArticleListing nodes={projNodes as Queries.Mdx[]} />
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
    allMdx(
      filter: { fields: { category: { eq: "projs" } } }
      sort: { frontmatter: { weight: DESC } }
      limit: 7
    ) {
      nodes {
        id
        ...ArticlePreview
        ...HeroProjPreview
      }
    }
  }
`;
