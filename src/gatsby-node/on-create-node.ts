import type { CreateNodeArgs, GatsbyNode } from "gatsby";
import { parseNodeFilePath } from "./utils";

type OnCreateNodeLimitedArgs = (args: CreateNodeArgs) => void | Promise<void>;

const onCreateMarkdownRemarkNode: OnCreateNodeLimitedArgs = async ({
  actions: { createNodeField },
  node,
  getNode,
}) => {
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

interface IContactData {
  label: string;
  username?: string;
  url?: string;
  hcard?: string;
  text?: string;
  icon?: string;
  rel?: string[];
}

const onCreateDataYamlNode: OnCreateNodeLimitedArgs = async ({
  actions: { createNode },
  node,
  createNodeId,
  createContentDigest,
}) => {
  if (!node?.contactDataList) {
    return;
  }
  for (const data of node.contactDataList as Node & IContactData[]) {
    createNode({
      ...data,
      id: createNodeId(data.label),
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(data),
        type: "ContactData",
      },
    });
  }
};

const onCreateNode: GatsbyNode["onCreateNode"] = async (args) => {
  console.log(args.node.internal.type);
  switch (args.node.internal.type) {
    case "MarkdownRemark":
      onCreateMarkdownRemarkNode(args);
      break;
    case "ContentYaml":
      onCreateDataYamlNode(args);
      break;
  }
};

export default onCreateNode;
