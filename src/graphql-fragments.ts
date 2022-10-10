import { graphql } from "gatsby";

export const BannerImg = graphql`
  fragment BannerImg on File {
    childImageSharp {
      bannerImgData: gatsbyImageData(
        width: 1496
        placeholder: BLURRED
        transformOptions: { cropFocus: CENTER }
      )
    }
  }
`;
