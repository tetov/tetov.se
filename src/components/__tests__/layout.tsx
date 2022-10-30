import React from "react";
import renderer from "react-test-renderer";
import Layout from "src/components/layout";

describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Layout
          footerChildren={<a href="/">Test</a>}
          subHeading="Test heading"
          pathname="/"
        >
          Some content
        </Layout>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
