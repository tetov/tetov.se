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
    allContactDataYaml: { nodes },
  },
}: PageProps<Queries.ContactQuery>) => {
  if (nodes.length !== 1) {
    throw new Error("More or less than one ContactData node found");
  }
  const { contactDataList } = nodes[0];

  return (
    <Layout pathname={pathname}>
      <PageTitle>Want to say hi?</PageTitle>
      <div className="h-card text-center text-lg">
        {contactDataList.map((n) => (
          <ContactDetail
            className={classNames("inline-block mx-4 whitespace-nowrap", {
              "hover:text-purple": Boolean(n.url),
            })}
            iconProp={{ size: "2em", className: "p-2 inline-block" }}
            text={n.text}
            url={n.url ?? undefined}
            hcard={n.hcard ?? undefined}
            rel={n.rel ?? undefined}
            key={n.label}
            label={n.label}
          />
        ))}
      </div>
    </Layout>
  );
};

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
    allContactDataYaml {
      nodes {
        contactDataList {
          url
          hcard
          text
          rel
          label
        }
      }
    }
  }
`;
