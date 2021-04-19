import type {Node} from "gatsby"
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
