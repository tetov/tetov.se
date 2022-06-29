import React from "react";
import renderer from "react-test-renderer";
import { PureMetaSiteWide as MetaSiteWide} from "src/components/meta/site-wide";

describe("Header", () => {
  it("renders correctly", () => {
    const data: GatsbyTypes.MetaSiteWideQuery = {
      site: {
        siteMetadata: {
          title: "tetov's projects & more",
          siteURL: "https://tetov.se",
          lang: "en",
          description: "there no 'more', is there?",
        },
      },
      allContactData: {
        nodes: [
          {
            username: "antontetov",
          },
        ],
      },
    };
    const tree = renderer
      .create(<MetaSiteWide pathName={"Test"} data={data} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
