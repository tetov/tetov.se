import path from "path"

import { GetNodeFunctionType, IFileNode, INode } from "./types"

const _getFileNode = (
  node: any,
  getNodeFunc: GetNodeFunctionType
): IFileNode => (
    node.internal.type !== "File" ? getNodeFunc(node.parent) : node
)

const parseNodePath = (
  node: INode,
  getNodeFunc: GetNodeFunctionType
): path.ParsedPath => {
  const n = _getFileNode(node, getNodeFunc)
  return { name: n.name, dir: n.dir, ext: n.ext, root: n.root, base: n.base }
}

export default parseNodePath
