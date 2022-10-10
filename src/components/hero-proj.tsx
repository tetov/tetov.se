import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

const HeroProjPreview: React.FC<Queries.HeroProjPreviewFragment> = ({
  excerpt,
  fields: { slug },
  frontmatter: { title, description, image, imageAlt },
}) => {
  const bannerImgData = image?.childImageSharp?.bannerImgData;

  if (!bannerImgData) {
    throw new Error("No hero pic for project.");
  }

  return (
    <>
      <div>
        <Link to={`/${slug}/`} className="link-style-alt">
          <GatsbyImage
            alt={imageAlt || `Banner image for ${title}`}
            image={bannerImgData}
            loading="eager"
            className="mb-8 md:mb-16"
          />
        </Link>
        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link to={`/${slug}/`} className="link-style-alt">
              {title}
            </Link>
          </h3>
          <p
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: description || excerpt || "" }}
          />
        </div>
      </div>
    </>
  );
};

export default HeroProjPreview;

export const fragment = graphql`
  fragment HeroProjPreview on MarkdownRemark {
    excerpt(pruneLength: 160, format: HTML)
    frontmatter {
      title
      description
      imageAlt
      image {
        ...BannerImg
      }
    }
    fields {
      slug
    }
  }
`;
