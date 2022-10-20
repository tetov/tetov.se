import React from "react";
import renderer from "react-test-renderer";
import type { PureHCardProp } from "src/components/hcard";
import { PureHCard } from "src/components/hcard";

describe("ContactDetail", () => {
  const contactDataList: PureHCardProp[] = [
    {
      hcard: "p-name",
      text: "Anton Tetov Johansson",
      rel: "me",
      label: "name",
    },
    {
      hcard: "p-gender-identity",
      text: "(they/them)",
      url: "https://en.wikipedia.org/wiki/Non-binary_gender",
      rel: "external",
      label: "gender-identity",
    },
    {
      hcard: "u-email",
      text: "email",
      url: "mailto:anton@tetov.se",
      rel: "me",
      label: "email",
    },
    {
      hcard: "u-key",
      text: "openpgp public key",
      url: "/key.txt",
      rel: "pgpkey authn key me",
      label: "openpgp",
    },
  ];
  it("renders correctly with hand converted data", () => {
    const tree = renderer
      .create(<PureHCard contactDetails={contactDataList} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
