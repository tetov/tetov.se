import { graphql } from "gatsby"

export const HeroImg = graphql`
    fragment HeroImg on ImageSharp {
        heroImgData: gatsbyImageData(
            width:1240
            placeholder: BLURRED
        )
    }
`
export const ProjMetaData = graphql`
  fragment ProjMetaData on MarkdownRemark {
    excerpt(pruneLength: 160)
    fields {
      slug
        }
        frontmatter {
          title
          date(formatString: "YYYY-MM")
          description
        }
    
    }
  
`
