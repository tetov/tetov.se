import classNames from "classnames";
import { graphql, HeadFC, PageProps } from "gatsby";
import * as React from "react";
import ContactDetail from "src/components/contact-detail";
import HeadComponent from "src/components/head";
import Layout from "src/components/layout";

const Contact: React.FC<PageProps<Queries.ContactQuery>> = ({
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

export const Head: HeadFC = ({ location }) => (
  <HeadComponent
    pageTitle="Contact"
    description="Anton Tetov's contact details"
    pathname={location.pathname}
  />
);

export default Contact;

export const query = graphql`
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
