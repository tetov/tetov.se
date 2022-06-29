import React from "react";
import renderer from "react-test-renderer";
import { PureMetaImage as MetaImage } from "src/components/meta/image";

describe("MetaImage", () => {
  const test_src = "content/projs/adaptive_clay_formations/hero.jpg";
  const siteURL = "https://tetov.se/";
  const test_alt = "Alt text";
  it.each`
    src          | alt
    ${test_src}  | ${test_alt}
    ${undefined} | ${test_alt}
    ${test_src}  | ${undefined}
    ${undefined} | ${undefined}
  `("src: $src alt: $alt", ({ src, alt }) => {
    const tree = renderer
      .create(<MetaImage src={src} siteURL={siteURL} alt={alt} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
