import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

import HeroImage from "./hero-img"

const ContentPreview: React.FC<GatsbyTypes.ContentPreviewQueryFragment> = ({
  excerpt,
  fields: { slug, hero },
  frontmatter: { title, date, description },
}) => (
  <div>
    <div className="mb-5">
      <GatsbyImage
        alt={`Cover image for ${title}`}
        image={getImage(hero)}
        loading="eager"
        imgClassName="shadow-sm hover:shadow-md transition-shadow duration-200"
      />
    </div>
    <Link to={slug} activeClassName="underline">
      <h3 className="text-3xl mb-3 leading-snug">{title}</h3>
    </Link>
    <div className="text-lg mb-4">{date}</div>
    <div className="mb-4">
      <p className="text-lg leading-relaxed mb-4">{description || excerpt}</p>
    </div>
  </div>
)

export default ContentPreview
export const query = graphql`
  fragment ContentPreviewQuery on MarkdownRemark {
    excerpt(pruneLength: 160)
    fields {
      slug
      previewImg: hero {
        gatsbyImageData(width: 200)
      }
    }
    frontmatter {
      title
      date(formatString: "YYYY-MM")
      description
    }
  }
`
