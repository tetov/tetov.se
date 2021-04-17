import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const HeroProj: React.FC<GatsbyTypes.HeroProjQueryFragment> = ({
  excerpt,
  fields: { slug, hero: {gatsbyImageData} },
  frontmatter: { title, date, description},
}) => (
  <section>
    <div className="mb-8 md:mb-16">
      <Link to={slug}>
        <GatsbyImage
          alt={`Cover image for ${title}`}
          image={getImage(gatsbyImageData)}
          loading="eager"
          imgClassName="shadow-sm hover:shadow-md transition-shadow duration-200"
        />
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
      <div className="mb-4">{description || excerpt}</div>
    </div>
  </section>
)

export default HeroProj

export const query = graphql`
  fragment HeroProjQuery on MarkdownRemark {
    excerpt(pruneLength: 160)
    fields {
      slug
      hero {
        gatsbyImageData(width: 600, placeholder: BLURRED)
      }
    }
    frontmatter {
      title
      date(formatString: "YYYY-MM")
      description
    }
  }
`

