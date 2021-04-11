import { IGatsbyImageData } from "gatsby-plugin-image"

export interface IContentProp {
  content: {
    html: string
    excerpt: string
    frontmatter: {
      title: string
      description: string
      date: string
      heroImage: IGatsbyImageData
      images: IGatsbyImageData[]
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
