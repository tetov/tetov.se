import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const ContentPreview = ({
  excerpt,
  fields: {
    slug,
    heroImg: { previewImg },
  },
  frontmatter: { title, description },
}: GatsbyTypes.ContentPreviewFragment) => (
  <div>
    <Link to={`/${slug}`} className="link-style-alt">
      <GatsbyImage
        alt={`Cover image for ${title}`}
        image={previewImg}
        loading="lazy"
        className="mb-5"
      />
      <h3 className="text-3xl mb-3 leading-snug">{title}</h3>
    </Link>
    <div className="mb-4">
      <p className="text-lg leading-relaxed mb-4">{description || excerpt}</p>
    </div>
  </div>
)

export default ContentPreview

export const fragmen = graphql`
  fragment ContentPreview on MarkdownRemark {
    ...ProjMetaData
    fields {
      heroImg {
        previewImg: gatsbyImageData(
          width: 684
          aspectRatio: 1.33
          placeholder: BLURRED
          transformOptions: { cropFocus: CENTER }
        )
      }
    }
  }
`
