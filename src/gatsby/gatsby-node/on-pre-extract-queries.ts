import { GatsbyNode } from "gatsby";
import type { PreQueryMarkdownRemark } from "../../types";
import { parseNodePath } from "../../utils";

const onPreExtractQueries: GatsbyNode["onPreExtractQueries"] = async ({
  actions: { createNodeField },
  getNode,
  getNodesByType,
}) => {
  const allImgNodes = getNodesByType("ImageSharp");
  const docNodes = getNodesByType("MarkdownRemark") as PreQueryMarkdownRemark[];

  docNodes.forEach((docNode) => {
    const heroName = docNode.frontmatter.hero || "hero";

    const docDir = parseNodePath(docNode, getNode).dir;

    const candidates = allImgNodes.filter((n) => {
      const { name, dir } = parseNodePath(n, getNode);
      return dir === docDir && name === heroName;
    });
    if (candidates.length === 0) return;

    if (candidates.length > 1)
      throw new Error(
        `More than one matching hero image. Mathces: ${candidates}`
      );

    createNodeField({ node: docNode, name: "heroImg", value: candidates[0] });
  });
};

export default onPreExtractQueries;
