import type { Node } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

export type PreQueryMarkdownRemark = Node & {
  fields: {
    slug: string
    category: string
    heroImg: IGatsbyImageData
  }
  frontmatter: {
    title: string
    hero: string
  }
}

export interface IContactData {
  label: string
  username?: string
  url?: string
  hcard?: string
  text?: string
  icon?: { set: string; name: string }
}
