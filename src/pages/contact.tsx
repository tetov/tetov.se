import classNames from "classnames";
import ContactDetail from "components/contact-detail";
import Layout from "components/layout";
import { MetaContent } from "components/meta";
import { graphql } from "gatsby";
import React from "react";

const Contact: GatsbyPage<GatsbyTypes.ContactQuery> = ({
  location,
  data: {
    allContactData: { nodes },
  },
}) => (
  <Layout pathName={location.pathname} subHeading="Want to say hi?">
    <MetaContent title="Contact" excerpt="Anton Tetov's contact details" />
    <div className="h-card md:px-44 text-center text-lg">
      {nodes.map((n) => (
        <ContactDetail
          contactData={n}
          key={n.id}
          className={classNames(
            "align-middle inline-block mx-4 whitespace-nowrap",
            { "hover:text-purple": Boolean(n.url) }
          )}
          iconProp={{ size: "2em", className: "p-2 inline-block" }}
        />
      ))}
    </div>
  </Layout>
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
