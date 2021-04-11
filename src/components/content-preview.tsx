import { Link } from 'gatsby'
import React from 'react'

import { ContentPreviewProp } from '../helpers/types'
import HeroImage from './hero-img'

const ContentPreview: React.FC<ContentPreviewProp> = ({ content: {excerpt, fields: { slug}, frontmatter: {title, heroImage: image, date}} }) => 
  (
    <div>
      <div className="mb-5">
        <HeroImage title={title} image={image} />
      </div>
      <Link to={slug} activeClassName="underline">
        <h3 className="text-3xl mb-3 leading-snug">{title}</h3>
      </Link>
      <div className="text-lg mb-4">{date}</div>
      <div className="mb-4">
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </div>
    </div>
  )


export default ContentPreview
