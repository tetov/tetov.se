import React from "react";
import renderer from "react-test-renderer";
import NavBar, { NavLinks } from "src/components/nav-bar";

describe("NavLinks", () => {
  it("renders correctly horizontal", () => {
    const tree = renderer
      .create(
        <NavLinks
          pathname="/"
          navigation={[
            { text: "test1", url: "https://test1.test" },
            { text: "test2", url: "https://test2.test" },
          ]}
          horizontal={true}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly vertical", () => {
    const tree = renderer
      .create(
        <NavLinks
          pathname="/"
          navigation={[
            { text: "test1", url: "https://test1.test" },
            { text: "test2", url: "https://test2.test" },
          ]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("NavBar", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<NavBar pathname="/" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
