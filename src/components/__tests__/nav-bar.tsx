import React from "react";
import renderer from "react-test-renderer";
import NavBar from "src/components/nav-bar";

describe("NavBar", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<NavBar pathname="/" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
