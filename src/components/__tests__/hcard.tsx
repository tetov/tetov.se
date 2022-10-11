import React from "react";
import renderer from "react-test-renderer";
import type { PureHCardProp } from "src/components/hcard";
import { PureHCard } from "src/components/hcard";

describe("ContactDetail", () => {
  const contactDataList: PureHCardProp[] = [
    {
      id: "b49e9204-8616-4c5a-930e-32a30ab981da",
      hcard: "p-name",
      text: "Anton Tetov Johansson",
      rel: "me",
    },
    {
      id: "1b09fd03-d850-4833-9e0a-816b45bd79aa",
      hcard: "p-gender-identity",
      text: "(they/them)",
      url: "https://en.wikipedia.org/wiki/Non-binary_gender",
      rel: "external",
    },
    {
      id: "9cbfc0dc-4a11-4ea3-b519-c826a7b88b31",
      hcard: "u-email",
      text: "email",
      url: "mailto:anton@tetov.se",
      rel: "me",
    },
    {
      id: "fbe2d09f-7d7f-4f0f-9b67-96033e124930",
      hcard: "u-key",
      text: "openpgp public key",
      url: "/key.txt",
      rel: "pgpkey authn key me",
    },
  ];
  it("renders correctly with hand converted data", () => {
    const tree = renderer
      .create(<PureHCard contactDetails={contactDataList} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
