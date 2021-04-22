import { GatsbyNode } from "gatsby"
import path from "path"

import { parseNodePath } from "../helpers/node-path-operations"

const onCreateNode: GatsbyNode["onCreateNode"] = async ({
  actions: { createNodeField },
  node,
  getNode,
}) => {
  if (node.internal.type !== "MarkdownRemark") {
    return
  }

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

export default onCreateNode
