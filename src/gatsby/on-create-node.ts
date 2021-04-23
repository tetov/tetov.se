import { GatsbyNode } from "gatsby"
import path from "path"

import { parseNodePath } from "../helpers/node-path-operations"

const onCreateMarkdownRemarkNode: GatsbyNode["onCreateNode"] = async ({
  actions: { createNodeField },
  node,
  getNode,
}) => {
  const { dir, name } = parseNodePath(node, getNode)
  const dirArray = dir.split(path.sep)

  // Slug & Category

  // Check if node is part of a page bundle,
  // i.e. placed in its own dir and named index
  // category is two steps up from page bundle
  const isPageBundle = name === "index"

  const slug = isPageBundle ? dirArray[dirArray.length - 1] : name

  createNodeField({
    node: node,
    name: `slug`,
    value: slug,
  })

  const category = isPageBundle
    ? dirArray[dirArray.length - 2]
    : dirArray[dirArray.length - 1]

  createNodeField({
    node: node,
    name: `category`,
    value: category,
  })
}
interface IContactDataList {
  service: string
  username?: string
  url?: string
  hcard?: string
  text?: string
  icon?: string
}

const onCreateDataYamlNode: GatsbyNode["onCreateNode"] = async ({
  actions: { createNode },
  node,
  createNodeId,
  createContentDigest,
}) => {
  if (!node?.contactDataList) {
    return
  }
  for (const data of node.contactDataList as IContactDataList[]) {
    createNode({
      ...data,
      id: createNodeId(data.service),
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(data),
        type: "ContactData",
      },
    })
  }
}

const onCreateNode: GatsbyNode["onCreateNode"] = async (args) => {
  const typeFuncMapping = {
    MarkdownRemark: onCreateMarkdownRemarkNode,
    DataYaml: onCreateDataYamlNode,
  }
  const type_ = args.node.internal.type

  if (type_ in typeFuncMapping) {
    typeFuncMapping[type_](args)
  }
}

export default onCreateNode
