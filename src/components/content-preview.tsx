import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const ContentPreview: React.FC<GatsbyTypes.ContentPreviewFragment> = ({
  excerpt,
  fields: {
    slug,
    heroImg: { previewImg },
  },
  frontmatter: { title, description },
}) => (
  <div>
    <div className="mb-5">
      <Link to={`/${slug}`}>
        <GatsbyImage
          alt={`Cover image for ${title}`}
          image={previewImg}
          loading="lazy"
        />
      </Link>
    </div>
    <h3 className="text-3xl mb-3 leading-snug">
      <Link to={`/${slug}`} className="link-style-alt">
        {title}
      </Link>
    </h3>
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
          aspectRatio: 1.33
          placeholder: BLURRED
          transformOptions: { cropFocus: CENTER }
        )
      }
    }
  }
`
