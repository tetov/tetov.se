import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { ContactDetail } from ".";

const HiddenCard: React.FC = () => {
  const {
    allContactData: { nodes },
  } = useStaticQuery<GatsbyTypes.HiddenHCardQuery>(graphql`
    query HiddenHCard {
      allContactData {
        nodes {
          id
          url
          hcard
          text
        }
      }
    }
  `);

  return (
    <div className="h-card hidden" aria-hidden={true}>
      {nodes
        .filter((n) => n.url || n.hcard)
        .map((n) => (
          <ContactDetail key={n.id} contactData={n} hidden={true} />
        ))}
    </div>
  );
};

export default HiddenCard;
