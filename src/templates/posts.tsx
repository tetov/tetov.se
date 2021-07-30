import { ContentBody, ContentHeader } from "components/content";
import Layout from "components/layout";
import { MetaContent } from "components/meta";
import { graphql } from "gatsby";
import React from "react";

const TemplatePost: GatsbyPage<GatsbyTypes.PostPropQuery> = ({
  location: { pathname },
  data: {
    html,
    excerpt,
    frontmatter: { title, description, lang, date, machineReadableDate },
    fields: { slug },
  },
}) => (
  <Layout pathName={pathname}>
    <MetaContent
      title={title}
      excerpt={description || excerpt}
      lang={lang}
      dateCreated={machineReadableDate}
    />
    <article
      className="h-entry"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <ContentHeader itemProp="headline" url={`/${slug}`}>
        {title}
      </ContentHeader>
      <p className="mb-4 text-4xl lg:text-6xl leading-tight">
        <time
          className="dt-published"
          itemProp="dateCreated"
          dateTime={machineReadableDate}
        >
          {date}
        </time>
      </p>
      <ContentBody content={html} itemProp="articleBody" />
    </article>
  </Layout>
);

export default TemplatePost;

export const pageQuery = graphql`
  query PostProp($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160, format: MARKDOWN)
      html
      frontmatter {
        title
        description
        lang
        date(formatString: "YYYY-MM-DD")
        machineReadableDate: date
      }
      fields {
        slug
      }
    }
  }
`;
