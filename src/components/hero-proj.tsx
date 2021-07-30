import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const HeroProj: React.FC<GatsbyTypes.HeroProjFragment> = ({
  excerpt,
  fields: {
    slug,
    heroImg: { heroImgData },
  },
  frontmatter: { title, description },
}) => {
  return (
    <>
      <div>
        <Link to={`/${slug}`} className="link-style-alt">
          <GatsbyImage
            alt={`Cover image for ${title}`}
            image={heroImgData}
            loading="eager"
            className="mb-8 md:mb-16"
          />
        </Link>
        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link to={`/${slug}`} className="link-style-alt">
              {title}
            </Link>
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            {description || excerpt}
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroProj;

export const HeroProjFragment = graphql`
  fragment HeroProj on MarkdownRemark {
    ...ProjMetaData
    fields {
      heroImg {
        ...HeroImg
      }
    }
  }
`;
