import { graphql, HeadFC, Link, PageProps } from "gatsby";
import * as React from "react";
import HCard from "src/components/hcard";
import HeadComponent from "src/components/head";
import Layout from "src/components/layout";
import PageTitle from "src/components/page-title";

const Index: React.FC<PageProps<Queries.IndexQuery>> = ({
  location: { pathname },
  data: {
    allContactData: { nodes: contactDataNodes },
  },
}) => (
  <Layout
    footerChildren={<HCard nodes={contactDataNodes} />}
    pathname={pathname}
  >
    <PageTitle>
      <p>
        Hi! I'm Anton Tetov, I'm an architect, programmer and maker. These are
        some of my{" "}
        <Link to="/projects" className="link-style">
          projects
        </Link>
        .{" "}
        <Link to="/contact" className="link-style">
          Would you like to say hi?
        </Link>
      </p>
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
    allContactData {
      nodes {
        ...HCard
      }
    }
  }
`;
