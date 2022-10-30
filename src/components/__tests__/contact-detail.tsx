import React from "react";
import renderer from "react-test-renderer";
import ContactDetail from "src/components/contact-detail";

describe("ContactDetail", () => {
  it("renders correctly with icon & url", () => {
    const tree = renderer
      .create(
        <ContactDetail
          text="MySpace"
          url="https://myspace.tk/tom"
          label="name"
          useIcon
          className="where-is-he-now where-did-he-go"
          hcard="u-url"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly without icon but with url", () => {
    const tree = renderer
      .create(
        <ContactDetail
          text="MySpace"
          url="https://myspace.tk/tom"
          className="where-is-he-now where-did-he-go"
          hcard="u-url"
          label="name"
          useIcon={false}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly with icon but without url", () => {
    const tree = renderer
      .create(
        <ContactDetail
          text="MySpace"
          className="where-is-he-now where-did-he-go"
          hcard="u-url"
          useIcon
          label="name"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly without icon and without url", () => {
    const tree = renderer
      .create(
        <ContactDetail
          text="MySpace"
          className="where-is-he-now where-did-he-go"
          hcard="u-url"
          label="name"
          useIcon={false}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
