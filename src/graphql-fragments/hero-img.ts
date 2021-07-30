import { graphql } from "gatsby";

export const HeroImg = graphql`
  fragment HeroImg on ImageSharp {
    heroImgData: gatsbyImageData(
      width: 1496
      placeholder: BLURRED
      transformOptions: { cropFocus: CENTER }
    )
  }
`;
