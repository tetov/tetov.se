import { graphql } from "gatsby";
import * as React from "react";
import ContactDetail from "src/components/contact-detail";

const HCard = ({
  nodes,
}: {
  nodes: ReadonlyArray<Queries.ContactDataYaml>;
}) => {
  if (nodes.length !== 1) {
    throw new Error("More or less than one ContactData node found");
  }

  const filteredNodes = nodes[0].contactDataList.filter(
    ({ url, hcard }) => url || hcard
  ) as PureHCardProp[];

  return <PureHCard contactDetails={filteredNodes} />;
};

export type PureHCardProp = {
  label: string;
  url?: string;
  hcard?: string;
  text: string;
  rel?: string;
};

export const PureHCard = ({
  contactDetails,
}: {
  contactDetails: PureHCardProp[];
}) => (
  <div className="h-card hidden" aria-hidden>
    {contactDetails.map((n) => (
      <ContactDetail
        useIcon={false}
        key={n.label}
        label={n.label}
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
  fragment HCard on ContactDataYamlContactDataList {
    url
    hcard
    text
    rel
    label
  }
`;
