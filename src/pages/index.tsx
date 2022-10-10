import { graphql, HeadFC, Link, PageProps } from "gatsby";
import * as React from "react";
import { ArticlePreview } from "src/components/article";
import ContactDetail from "src/components/contact-detail";
import { Head as HeadComponent } from "src/components/head";
import HeroProj from "src/components/hero-proj";
import Layout from "src/components/layout";

const Index: React.FC<PageProps<Queries.IndexQuery>> = ({
  data: {
    allMarkdownRemark: { nodes: mdNodes },
    allContactData: { nodes: contactDataNodes },
  },
}) => {
  const [heroProj, ...projNodes] = mdNodes;

  const subHeading = (
    <>
      Hi! I'm Anton Tetov, I'm an architect, programmer and maker. These are
      some of my projects.{" "}
      <Link to="/contact" className="link-style">
        Want to say hi?
      </Link>
    </>
  );

  return (
    <Layout subHeading={subHeading}>
      <HeroProj {...heroProj} />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-8">
        {projNodes.map((node) => (
          <ArticlePreview key={node.id} {...node} />
        ))}
      </div>
      <div className="h-card hidden" aria-hidden={true}>
        {contactDataNodes
          .filter((n) => n.url || n.hcard)
          .map((n) => (
            <ContactDetail key={n.id} contactData={n} useIcon={false} />
          ))}
      </div>
    </Layout>
  );
};

export default Index;

export const Head: HeadFC = ({ location }) => (
  <HeadComponent pathname={location.pathname} />
);

// Query with /(DIR)/
export const query = graphql`
  query Index {
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
        id
        url
        hcard
        text
        rel
      }
    }
  }
`;
