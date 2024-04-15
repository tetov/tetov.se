import React from "react";
import renderer from "react-test-renderer";
import { CVSection } from "src/components/cv";

describe("CVPropTable", () => {
  it("renders correctly with minimum props", () => {
    const tree = renderer.create(<CVSection title="Title" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it("renders correctly with children", () => {
  const tree = renderer
    .create(
      <CVSection title="Test" key="test2">
        <ul>
          <li>Test 1</li>
          <li>
            Test <b>2</b>
          </li>
        </ul>
      </CVSection>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
