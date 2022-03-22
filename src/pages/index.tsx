import { graphql, Link } from "gatsby";
import React from "react";
import ContactDetail from "src/components/contact-detail";
import { ContentPreview } from "src/components/content";
import HeroProj from "src/components/hero-proj";
import Layout from "src/components/layout";

const Index: GatsbyPage<GatsbyTypes.IndexQuery> = ({
  data: {
    allMarkdownRemark: { nodes: mdNodes },
    allContactData: { nodes: contactDataNodes },
  },
  location,
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
    <Layout pathName={location.pathname} subHeading={subHeading}>
      <HeroProj {...heroProj} />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-8">
        {projNodes.map((node) => (
          <ContentPreview key={node.id} {...node} />
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

// Query with /(DIR)/
export const pageQuery = graphql`
  query Index {
    allMarkdownRemark(
      filter: { fields: { category: { eq: "projs" } } }
      sort: { fields: [frontmatter___weight], order: DESC }
      limit: 7
    ) {
      nodes {
        id
        ...ContentPreview
        ...HeroProj
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
