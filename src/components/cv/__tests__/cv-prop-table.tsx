import React from "react";
import renderer from "react-test-renderer";
import { CVPropTable } from "src/components/cv";

describe("CVPropTable", () => {
  it("renders correctly with provided tuples", () => {
    const tuples = [
      ["Name", <b key="test">John Doe</b>],
      ["Age", <>30</>],
      ["Location", <span key="test">New York</span>],
    ];

    const tree = renderer
      .create(<CVPropTable key="test" tuples={tuples} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when no tuples are provided", () => {
    const tree = renderer.create(<CVPropTable tuples={[]} />);
    expect(tree).toMatchSnapshot();
  });
});
