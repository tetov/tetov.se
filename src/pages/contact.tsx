import classNames from "classnames";
import { graphql, HeadFC, PageProps } from "gatsby";
import * as React from "react";
import ContactDetail from "src/components/contact-detail";
import HeadComponent from "src/components/head";
import Layout from "src/components/layout";
import PageTitle from "src/components/page-title";

const Contact = ({
  location: { pathname },

  data: {
    allContactData: { nodes },
  },
}: PageProps<Queries.ContactQuery>) => (
  <Layout pathname={pathname}>
    <PageTitle>Want to say hi?</PageTitle>
    <div className="h-card text-center text-lg">
      {nodes.map((n) => (
        <ContactDetail
          className={classNames("inline-block mx-4 whitespace-nowrap", {
            "hover:text-purple": Boolean(n.url),
          })}
          iconProp={{ size: "2em", className: "p-2 inline-block" }}
          {...n}
          url={n.url ?? undefined}
          hcard={n.hcard ?? undefined}
          rel={n.rel ?? undefined}
          key={n.id}
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
