import React from "react";
import renderer from "react-test-renderer";
import { PureHeader as Header } from "src/components/header";

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Header title="tetov's projects and more" subHeading={<div></div>} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
