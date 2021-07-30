import { graphql } from "gatsby";

export const ProjMetaData = graphql`
  fragment ProjMetaData on MarkdownRemark {
    excerpt(pruneLength: 160, format: MARKDOWN)
    fields {
      slug
    }
    frontmatter {
      title
      date(formatString: "YYYY-MM")
      description
      lang
    }
  }
`;
