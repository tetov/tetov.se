import { ContentBody, ContentHeader } from "components/content";
import Layout from "components/layout";
import { MetaContent } from "components/meta";
import { graphql } from "gatsby";
import React from "react";

const TemplatePage: GatsbyPage<GatsbyTypes.PagePropQuery> = ({
  location: { pathname },
  data: {
    html,
    excerpt,
    frontmatter: { title, description, lang },
    fields: { slug },
  },
}) => (
  <Layout pathName={pathname}>
    <MetaContent title={title} excerpt={description || excerpt} lang={lang} />
    <article itemScope itemType="http://schema.org/WebPage">
      <ContentHeader itemProp="headline" url={`/${slug}`}>
        {title}
      </ContentHeader>
      <ContentBody content={html} itemProp="mainContentOfPage" />
    </article>
  </Layout>
);

export default TemplatePage;

export const pageQuery = graphql`
  query PageProp($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        lang
      }
    }
  }
`;
