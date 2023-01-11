import type { Node } from "gatsby";
import { GatsbyNode } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { parseNodeFilePath } from "./utils";

type PreQueryMdx= Node & {
  fields: {
    slug: string;
    category: string;
    heroImg: IGatsbyImageData;
  };
  frontmatter: {
    title: string;
    hero: string;
  };
};

const onPreExtractQueries: GatsbyNode["onPreExtractQueries"] = ({
  actions: { createNodeField },
  getNode,
  getNodesByType,
}) => {
  const allImgNodes = getNodesByType("ImageSharp");
  const docNodes = getNodesByType("Mdx") as PreQueryMdx[];

  docNodes.forEach((docNode) => {
    const heroName = docNode.frontmatter.hero || "hero";

    const { category, slug } = docNode.fields;

    const candidates = allImgNodes.filter((n) => {
      const { name, dir } = parseNodeFilePath({ node: n, getNode });
      return dir === `/${category}/${slug}` && name === heroName;
    });
    if (candidates.length === 0) {
      if (category === "projs") {
        throw new Error(
          "No image candidates found for hero image for proj node.",
        );
      }
      // if not projs we just ditch
      return;
    }

    if (candidates.length > 1)
      throw new Error(
        `More than one matching hero image. Matches: ${candidates}`, // eslint-disable-line @typescript-eslint/restrict-template-expressions
      );

    createNodeField({ node: docNode, name: "heroImg", value: candidates[0] });
  });
};

export default onPreExtractQueries;
