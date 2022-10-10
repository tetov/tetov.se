import * as Gatsby from "gatsby";
import React from "react";
import renderer from "react-test-renderer";
import Header from "src/components/header";

describe("Header", () => {
  it("renders correctly", () => {
    const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          title: `Nossnahoj Votet Notna`,
          description: `Mocks`,
          siteURL: `https://example.ai`,
          lang: `ent`,
          image: `/logo.png`,
        },
      },
    }));
    const tree = renderer
      .create(<Header subHeading={<span>Test</span>} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
