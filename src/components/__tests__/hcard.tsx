import React from "react";
import renderer from "react-test-renderer";
import type { PureHCardProp } from "src/components/hcard";
import HCard, { PureHCard } from "src/components/hcard";

describe("HCard", () => {
  const contactDataList: PureHCardProp[] = [
    {
      hcard: "p-name",
      text: "Anton Tetov Johansson",
      rel: "me",
      label: "name",
      username: "",
    },
    {
      hcard: "p-gender-identity",
      text: "(they/them)",
      url: "https://en.wikipedia.org/wiki/Non-binary_gender",
      rel: "external",
      label: "gender-identity",
      username: "",
    },
    {
      hcard: "u-email",
      text: "email",
      url: "mailto:anton@tetov.se",
      rel: "me",
      label: "email",
      username: "",
    },
    {
      hcard: "u-key",
      text: "openpgp public key",
      url: "/key.txt",
      rel: "pgpkey authn key me",
      label: "openpgp",
      username: "",
    },
  ];
  it("PureHCard renders correctly with hand converted data", () => {
    const tree = renderer
      .create(<PureHCard contactDetails={contactDataList} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  const contactDataYamlNode: Queries.ContactDataYaml = {
    id: "uuid",
    children: [],
    parent: null,
    internal: {
      contentDigest: "",
      owner: "",
      type: "",
      content: null,
      contentFilePath: null,
      description: null,
      fieldOwners: null,
      ignoreType: null,
      mediaType: null,
    },
    contactDataList,
  };
  it("HCard renders correctly with hand converted data", () => {
    const tree = renderer
      .create(<HCard nodes={[contactDataYamlNode]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
