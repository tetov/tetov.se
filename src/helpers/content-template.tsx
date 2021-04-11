import { graphql, PageProps } from "gatsby"
import React from "react"

import ContentPage from "../components/content-page"
import ContentPost from "../components/content-post"
import ContentProj from "../components/content-proj"
import Layout from "../components/layout"

const contentComponents = {
  page: ContentPage,
  post: ContentPost,
  proj: ContentProj,
}

const ContentTemplate: GatsbyPage<PageProps> = ({ data, location }) => {
  const {
    excerpt,
    frontmatter: { title, description, lang },
    fields: { category },
  } = data
  const ContentComponent: React.FC = contentComponents[category]

  // Add meta to Layout
  return (
    <Layout
      location={location}
      title={title}
      description={description || excerpt}
      lang={lang}
    >
      <ContentComponent>{data}</ContentComponent>
    </Layout>
  )
}

export default ContentTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      fields {
        category
        slug
      }
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        heroImg
        images
      }
    }
  }
`
