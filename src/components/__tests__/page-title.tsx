import React from "react";
import renderer from "react-test-renderer";
import PageTitle from "src/components/page-title";

describe("PageTitle", () => {
  it("PageTitle with custom prop and string child renders correctly", () => {
    const tree = renderer
      .create(
        <PageTitle itemProp="testline" mfClass="p-name">
          Title
        </PageTitle>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("PageTitle with default prop and string child renders correctly", () => {
    const tree = renderer.create(<PageTitle>Title</PageTitle>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("PageTitle with custom prop and JSX child renders correctly", () => {
    const tree = renderer
      .create(
        <PageTitle itemProp="JSX" mfClass="JSX">
          <a href="https://example.com/">Test</a>
        </PageTitle>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("PageTitle with default prop and JSX child renders correctly", () => {
    const tree = renderer
      .create(
        <PageTitle>
          <div className="header">Header</div>
        </PageTitle>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("PageTitle with articleHeader set to false renders a div", () => {
    const tree = renderer
      .create(
        <PageTitle articleHeader={false}>
          <div className="header">Header</div>
        </PageTitle>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("PageTitle with articleHeader set to true renders header", () => {
    const tree = renderer
      .create(
        <PageTitle articleHeader>
          <div className="header">Header</div>
        </PageTitle>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
