import { GatsbyNode } from "gatsby"

import parseNodePath from "../helpers/parse-node-path"

import type { Node } from "gatsby"

type PreQueryImageSharp = Node & {
  parent: Node
}

type PreQueryMarkdownRemark = Node & {
  parent: Node
  fields: { isPageBundle: Boolean }
}

const onPreExtractQueries: GatsbyNode["onPreExtractQueries"] = async ({
  actions: { createNodeField },
  getNode,
  getNodesByType,
}) => {
  const allImgNodes = getNodesByType("ImageSharp") as PreQueryImageSharp[]
  const docNodes = getNodesByType("MarkdownRemark") as PreQueryMarkdownRemark[]

  const imgParsedPaths = {}
  allImgNodes.forEach((n) => (imgParsedPaths[n.id] = parseNodePath(n, getNode)))
  

  docNodes.forEach((docN) => {
    const { name: docName, dir: docDir } = parseNodePath(docN, getNode)
    console.log(`Name: ${docName} Dir: ${docDir}`)

    let _imgNodes = allImgNodes.filter(
      (imgN) => imgParsedPaths[imgN.id].dir === docDir
    )

    // Found no images
    if (_imgNodes.length < 1) return
    
    // https://stackoverflow.com/a/35092754/15398307
    _imgNodes.sort((a, b) =>
    imgParsedPaths[a.id].name.localeCompare(imgParsedPaths[b.id].name)
    )
    
    if (_imgNodes.length === 1 && (docN.fields.isPageBundle || imgParsedPaths[_imgNodes[0].id].name === docN.name)) {
      // Only use found image for hero if page bundle or named same as doc file
      if (!docN.fields.isPageBundle && imgParsedPaths[_imgNodes[0].id].name !== docN.name)
        return

      createNodeField({node: docN, name: "hero", value: _imgNodes[0]})
      return
    }

    const heroNodeIdx = _imgNodes.findIndex(n => imgParsedPaths[n.id].name === "hero") 
    
    // No image with name hero found, just use the first in (sorted) list
    if (heroNodeIdx === -1) {
      createNodeField({node: docN, name: "hero", value: _imgNodes[0]})
      createNodeField({node: docN, name: "imgs", value: _imgNodes.slice(1)})
      return
    }
    
    const heroNode = _imgNodes[heroNodeIdx]
    _imgNodes.splice(heroNodeIdx, 1)

    createNodeField({
      node: docN,
      name: `hero`,
      value: heroNode,
    })
  
    createNodeField({
      node: docN,
      name: `imgs`,
      value: _imgNodes,
    })
  })
}

export default onPreExtractQueries
