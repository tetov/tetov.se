import { graphql } from "gatsby";
import * as React from "react";
import ContactDetail from "src/components/contact-detail";

const HCard: React.FC<{ nodes: ReadonlyArray<Queries.HCardFragment> }> = ({
  nodes,
}) => {
  const filteredNodes = nodes.filter(
    ({ url, hcard }) => url || hcard
  ) as PureHCardProp[];

  return <PureHCard contactDetails={filteredNodes} />;
};

export type PureHCardProp = {
  id: string;
  url?: string;
  hcard?: string;
  text: string;
  rel?: string;
};

export const PureHCard: React.FC<{ contactDetails: PureHCardProp[] }> = ({
  contactDetails,
}) => (
  <div className="h-card hidden" aria-hidden>
    {contactDetails.map((n) => (
      <ContactDetail
        useIcon={false}
        key={n.id}
        url={n.url}
        hcard={n.hcard}
        text={n.text}
        rel={n.rel}
      />
    ))}
  </div>
);

export default HCard;

export const fragment = graphql`
  fragment HCard on ContactData {
    id
    url
    hcard
    text
    rel
  }
`;