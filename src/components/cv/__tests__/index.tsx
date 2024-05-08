import React from "react";
import renderer from "react-test-renderer";
import {
  CVEntry,
  CVEntryBody,
  CVPropTable,
  CVSection,
  CVUnorderedList,
} from "src/components/cv";

describe("Integration of CV components", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <CVSection title="Test" key="Test">
          <CVEntry
            heading={<span key="test">Heading</span>}
            startDate="2023-12-11"
            endDate="2023-12-12"
            url="https://test.test/"
            key="test1"
          >
            <CVEntryBody description="Desc">
              <CVPropTable
                tuples={[
                  ["Location", "Twin Peaks"],
                  [
                    "list",
                    <CVUnorderedList key="test">
                      {["listitem1", "lisritem2"].map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </CVUnorderedList>,
                  ],
                ]}
              />
            </CVEntryBody>
          </CVEntry>
          <CVEntry>
            <CVEntryBody description="Desc 2">
              <CVUnorderedList>
                {["keyword", "another keyword", 3].map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </CVUnorderedList>
            </CVEntryBody>
          </CVEntry>
        </CVSection>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
