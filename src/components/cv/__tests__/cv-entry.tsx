import React from "react";
import renderer from "react-test-renderer";
import { CVEntry, CVEntryBody } from "src/components/cv";

describe("CVEntry", () => {
  it("renders correctly without props", () => {
    const tree = renderer.create(<CVEntry />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly with all fields", () => {
    const tree = renderer
      .create(
        <CVEntry
          startDate="2018-10-02"
          endDate="2020-10-02"
          key="key"
          heading="Farmhand in Stardew Valley"
          url="https://stardewvalley.net/"
        >
          Hard work!
        </CVEntry>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly without enddate", () => {
    const tree = renderer
      .create(
        <CVEntry
          startDate="2018-10-02"
          key="key"
          heading="Farmhand in Stardew Valley"
          url="https://stardewvalley.net/"
        >
          Hard work!
        </CVEntry>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("CVEntryBody", () => {
  it("renders correctly with text child", () => {
    const tree = renderer
      .create(<CVEntryBody description="Test">Test</CVEntryBody>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly with html child", () => {
    const tree = renderer
      .create(
        <CVEntryBody description="Test">
          <ul>
            <li>Test 1</li>
            <li>Test 2</li>
          </ul>
        </CVEntryBody>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly with html description", () => {
    const tree = renderer
      .create(
        <CVEntryBody description={<b>test</b>}>
          <ul>
            <li>Test 1</li>
            <li>Test 2</li>
          </ul>
        </CVEntryBody>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Combined CVEntry & CVEntryBody", () => {
  it("renders correctly with text child", () => {
    const tree = renderer
      .create(
        <CVEntry>
          <CVEntryBody description="Test">Test</CVEntryBody>
        </CVEntry>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly with CVEntry props", () => {
    const tree = renderer
      .create(
        <CVEntry
          startDate="2018-10-02"
          endDate="2020-10-02"
          key="key"
          heading="Farmhand in Stardew Valley"
          url="https://stardewvalley.net/"
        >
          <CVEntryBody description="Test">Test</CVEntryBody>
        </CVEntry>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
