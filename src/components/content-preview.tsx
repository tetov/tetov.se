import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const ContentPreview: React.FC<GatsbyTypes.ContentPreviewFragment> =({
  excerpt,
  fields: { 
    slug,
    heroImg: {
      previewImg
    }},
  frontmatter: { title, date, description },
}) => (
  <div className="hover:bg-accent-1">
    <div className="mb-5">
      <GatsbyImage
        alt={`Cover image for ${title}`}
        image={previewImg}
        loading="lazy"
        imgClassName="shadow-sm hover:shadow-md transition-shadow duration-200"
      />
    </div>
      <h3 className="text-3xl mb-3 leading-snug">
    <Link to={slug} className="hover:underline">
        {title}
    </Link>
    </h3>
    <div className="text-lg mb-4">{date}</div>
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
              ) 
          }
        }
  }
    `
