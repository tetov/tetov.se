import { graphql } from "gatsby";
import React from "react";
import ContentBody from "../components/content/body";
import ContentHead from "../components/content/head";
import ContentHeader from "../components/content/header";
import Layout from "../components/layout";

const TemplatePage: GatsbyPage<GatsbyTypes.PagePropQuery> = ({
  location,
  data: {
    html,
    excerpt,
    frontmatter: { title, description, lang },
    fields: { slug },
  },
}) => (
  <Layout pathName={location.pathname}>
    <ContentHead title={title} excerpt={excerpt} lang={lang} />
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
