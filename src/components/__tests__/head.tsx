import React from "react";
import renderer from "react-test-renderer";
import HeadComponent from "src/components/head";

describe("HeadComponent", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <HeadComponent
          description="The dead trees waited to be ignited by the smallest spark and seek their revenge."
          imageUrl="http://runte.org/velit-porro-sapiente-id-aut-error-quis.png"
          pageTitle="We have a lot of rain in June."
          pathname="we-have-a-lot"
        >
          <meta property="og:type" content="article" id="og:type" />
          <meta
            property="og:article:published_time"
            content="2022-03-22T12:57:14Z"
          />
        </HeadComponent>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
