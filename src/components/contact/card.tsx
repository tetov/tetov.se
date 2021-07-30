import classNames from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { ContactDetail } from ".";

const ContactCard = () => {
  const {
    allContactData: { nodes },
  } = useStaticQuery<GatsbyTypes.ContactCardQuery>(graphql`
    query ContactCard {
      allContactData {
        nodes {
          id
          username
          url
          hcard
          text
          icon
        }
      }
    }
  `);
  return (
    <div id="contact" className="h-card md:px-44 text-center text-lg">
      {nodes.map((n: GatsbyTypes.ContactData) => (
        <ContactDetail
          contactData={n}
          key={n.id}
          className={classNames(
            n.hcard,
            "align-middle inline-block mx-4 whitespace-nowrap",
            { "hover:text-purple": Boolean(n.url) }
          )}
          iconProp={{ size: "2em", className: "p-2 inline-block" }}
        />
      ))}
    </div>
  );
};

export default ContactCard;
