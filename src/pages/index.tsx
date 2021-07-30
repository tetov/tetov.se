import { graphql, Link } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";
import ContactDetail from "../components/contact-detail";
import { ContentPreview } from "../components/content";
import HeroProj from "../components/hero-proj";
import Layout from "../components/layout";
import useSiteMetadata from "../helpers/hook-use-site-metadata";

const Index: GatsbyPage<GatsbyTypes.IndexQuery> = ({ data, location }) => {
  const contentNodes = data.allMarkdownRemark.nodes;

  const [heroProj, ...projNodes] = contentNodes;
  const subHeading = (
    <>
      Hi! I'm Anton Tetov, I'm an architect, programmer and maker. These are
      some of my projects.{" "}
      <Link to="/contact" className="link-style">
        Want to say hi?
      </Link>
    </>
  );

  const heroImgSrc =
    useSiteMetadata().siteURL + getSrc(heroProj.fields.heroImg.heroImgData);

  return (
    <Layout pathName={location.pathname} subHeading={subHeading}>
      <>
        <Helmet>
          <meta property="og:image" content={heroImgSrc} />
        </Helmet>
        <HeroProj {...heroProj} />
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-8">
          {projNodes.map((node) => (
            <ContentPreview key={node.id} {...node} />
          ))}
        </div>
        {/* Hidden h-card */}
        <div className="h-card hidden" aria-hidden={true}>
          {data.allContactData.nodes
            .filter((n) => n.url || n.hcard)
            .map((n) => (
              <ContactDetail key={n.id} contactData={n} />
            ))}
        </div>
      </>
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
      }
    }
  }
`;
