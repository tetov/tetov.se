import { Link } from "gatsby"
import React from "react"
import { ContentPreviewProp } from "../helpers/types"
import HeroImage from "./hero-img"

const HeroProj: React.FC<ContentPreviewProp> = ({ content: {excerpt, fields: {slug}, frontmatter: {title, heroImage: image, date}}}) => (
    <section>
      <div className="mb-8 md:mb-16">
        <Link to={slug}>
          <HeroImage title={title} image={image} />
        </Link>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link to={slug} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">{date}</div>
        </div>
        <div className="mb-4">{excerpt}</div>
      </div>
    </section>
  )

export default HeroProj
