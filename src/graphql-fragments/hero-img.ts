import { graphql } from "gatsby"

export const HeroImg = graphql`
    fragment HeroImg on ImageSharp {
        heroImgData: gatsbyImageData(
            width:1240
            placeholder: BLURRED
            transformOptions: {cropFocus: CENTER}
        )
    }
`
