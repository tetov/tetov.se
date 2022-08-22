import classNames from "classnames";
import { graphql } from "gatsby";
import ContactDetail from "src/components/contact-detail";
import Layout from "src/components/layout";
import SEO from "src/components/seo";

const Contact: GatsbyPage<GatsbyTypes.ContactQuery> = ({
  location,
  data: {
    allContactData: { nodes },
  },
}) => (
  <Layout subHeading="Want to say hi?">
    <div className="h-card md:px-44 text-center text-lg">
      {nodes.map((n) => (
        <ContactDetail
          contactData={n}
          key={n.id}
          className={classNames("inline-block mx-4 whitespace-nowrap", {
            "hover:text-purple": Boolean(n.url),
          })}
          iconProp={{ size: "2em", className: "p-2 inline-block" }}
        />
      ))}
    </div>
  </Layout>
);

export const Head = () => (
  <SEO
    pageTitle="Contact"
    description="Anton Tetov's contact details"
    pathname={location.pathname}
  />
);

export default Contact;

export const contactQuery = graphql`
  query Contact {
    allContactData(sort: { fields: weight }) {
      nodes {
        id
        username
        url
        hcard
        text
        icon
        rel
      }
    }
  }
`;
