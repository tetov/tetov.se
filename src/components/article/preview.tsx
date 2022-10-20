import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

export const ArticlePreview = ({
  excerpt,
  fields: { slug, category },
  frontmatter: { title, description, image, imageAlt },
}: Queries.ArticlePreviewFragment) => {
  const previewImg = image?.childImageSharp?.previewImg;

  if (category === "projs" && !previewImg) {
    throw new Error("Missing preview image.");
  }

  const blurb = description || excerpt;

  if (!blurb) {
    throw new Error("Missing blurb (neither description nor excerpt present).");
  }

  return (
    <div>
      <Link to={`/${slug}/`} className="link-style">
        {/* Add fallback image for future */}
        {previewImg && (
          <GatsbyImage
            alt={imageAlt || `Cover image for ${title}`}
            image={previewImg}
            loading="lazy"
            className="mb-5"
          />
        )}
        <h2 className="text-xl mb-3 leading-snug">{title}</h2>
      </Link>
      <div className="mb-4">
        <p
          className="text-lg leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: description || excerpt || "" }}
        />
      </div>
    </div>
  );
};

export const fragment = graphql`
  fragment ArticlePreview on MarkdownRemark {
    id
    excerpt(pruneLength: 160, format: HTML)
    fields {
      slug
      category
    }
    frontmatter {
      title
      description
      imageAlt
      image {
        childImageSharp {
          previewImg: gatsbyImageData(
            width: 684
            aspectRatio: 1.33
            placeholder: BLURRED
            transformOptions: { cropFocus: CENTER }
          )
        }
      }
    }
  }
`;
