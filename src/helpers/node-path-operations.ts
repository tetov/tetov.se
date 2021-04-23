import path from "path"

import type { Node } from "gatsby"

type GetNodeFunctionType = (id: String) => Node

type FileNode = Node & {
  absolutePath: string
  name: string
  dir: string
  ext: string
  root: string
  base: string
}

const getFileNode = (node: any, getNodeFunc: GetNodeFunctionType): FileNode =>
  node.internal.type !== "File" ? getNodeFunc(node.parent) : node

export const parseNodePath = (
  node: Node,
  getNodeFunc: GetNodeFunctionType
): path.ParsedPath => {
  const n = getFileNode(node, getNodeFunc)
  return { name: n.name, dir: n.dir, ext: n.ext, root: n.root, base: n.base }
}
