import { IGatsbyImageData } from "gatsby-plugin-image"

import type { Node } from "gatsby"

export interface IContentProp {
  content: {
    html: string
    excerpt: string
    frontmatter: {
      title: string
      description: string
      date: string
      heroImage: IGatsbyImageData
      imgPaths: IGatsbyImageData[]
    }
    fields: {
      slug: string
    }
  }
}

export type ContentPreviewProp = IContentProp & {
  content: {
    html?: string
    frontmatter: {
      images?: IGatsbyImageData[]
    }
  }
}

export type voidFunc = () => void

export type GetNodeFunctionType = (id: String) => Node

// Use in Gatsby API code before codegen has generated types
export interface INode{
  id: string
  internal: {
    type: string
  }
}

export interface IFileNode extends INode {
  name: string
  dir: string
  ext: string
  root: string
  base: string
}

export interface IMarkdownRemarkNode extends INode {
    fields: {
        slug: string
        category: string
    }
    frontmatter: {
        title: string
    }
}
