import type { GatsbyNode } from "gatsby";
import { parseNodeFilePath } from "./utils";

const onCreateNode: GatsbyNode["onCreateNode"] = ({
  actions: { createNodeField },
  node,
  getNode,
}) => {
  if (!(node.internal.type === "MarkdownRemark")) {
    return;
  }

  const { dir, name } = parseNodeFilePath({
    node,
    getNode,
    basePath: "content",
    trailingSlash: false,
  });

  const slug = name;
  const category = dir.replace("/", "");

  createNodeField({
    node: node,
    name: `slug`,
    value: slug,
  });

  createNodeField({
    node: node,
    name: `category`,
    value: category,
  });
};

export default onCreateNode;
