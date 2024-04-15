import React from "react";
import renderer from "react-test-renderer";
import { CVUnorderedList } from "src/components/cv";

describe("CVUnorderedList", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <CVUnorderedList>
          {["keyword", "another keyword", 3].map((k) => (
            <li key={k}>{k}</li>
          ))}
        </CVUnorderedList>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
