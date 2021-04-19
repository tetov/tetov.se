import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const ContentPreview: React.FC<GatsbyTypes.IndexComponentsFragment> = ({
  excerpt,
  fields: { 
    slug,
    heroImg: {
      img
    }},
  frontmatter: { title, date, description },
}) => (
  <div>
    <div className="mb-5">
      <GatsbyImage
        alt={`Cover image for ${title}`}
        image={img}
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
