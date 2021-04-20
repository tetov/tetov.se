import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const HeroProj: React.FC<GatsbyTypes.HeroProjFragment> = ({
  excerpt,
  fields: {
    slug,
    heroImg: { heroImgData },
  },
  frontmatter: { title, date, description },
}) => (
  <section className="hover:border border:black">
    <div className="mb-8 md:mb-16">
      <Link to={slug}>
        <GatsbyImage
          alt={`Cover image for ${title}`}
          image={heroImgData}
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
      <div>
        <p className="text-lg leading-relaxed mb-4">{description || excerpt}</p>
      </div>
    </div>
  </section>
)

export default HeroProj

export const HeroProjFragment = graphql`
  fragment HeroProj on MarkdownRemark {
    ...ProjMetaData
    fields {
      heroImg {
        ...HeroImg
      }
    }
  }
`
