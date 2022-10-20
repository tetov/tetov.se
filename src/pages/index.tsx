import { graphql, HeadFC, Link, PageProps } from "gatsby";
import * as React from "react";
import HCard from "src/components/hcard";
import HeadComponent from "src/components/head";
import Layout from "src/components/layout";
import PageTitle from "src/components/page-title";

const Index = ({
  location: { pathname },

  data: {
    allContactDataYaml: { nodes: contactDataNodes },
  },
}: PageProps<Queries.IndexQuery>) => (
  <Layout
    footerChildren={<HCard nodes={contactDataNodes} />}
    pathname={pathname}
  >
    <PageTitle>
      Hi! I'm Anton Tetov, I'm an architect, programmer and maker. These are
      some of my{" "}
      <Link to="/projects" className="link-style">
        projects
      </Link>
      .{" "}
      <Link to="/contact" className="link-style">
        Would you like to say hi?
      </Link>
    </PageTitle>
  </Layout>
);

export default Index;

export const Head: HeadFC = ({ location }) => (
  <HeadComponent pathname={location.pathname} />
);

// Query with /(DIR)/
export const query = graphql`
  query Index {
    allContactDataYaml {
      nodes {
        contactDataList {
          ...HCard
        }
      }
    }
  }
`;
