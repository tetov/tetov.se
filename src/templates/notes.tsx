import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { ContentBody } from "src/components/content";
import Layout from "src/components/layout";
import { MetaContent } from "src/components/meta";

const TemplateNote: GatsbyPage<GatsbyTypes.NotePropQuery> = ({
  location: { pathname },
  data: {
    markdownRemark: {
      html,
      excerpt,
      fields: {
        slug,
        heroImg: { heroImgData },
      },
      frontmatter: { lang, date, machineReadableDate },
    },
  },
}) => (
  <Layout pathName={pathname} subHeading="a note">
    <MetaContent
      title={`A note posted ${date}`}
      excerpt={excerpt}
      lang={lang}
    />
    <article
      className="h-entry"
      itemScope
      itemType="http://schema.org/SocialMediaPosting"
    >
      <ContentBody content={html} itemProp="articleBody" className="p-name" />
      <GatsbyImage
        alt={excerpt}
        image={heroImgData}
        loading="eager"
        className="mb-8 md:mb-16"
        imgClassName="shadow-sm hover:shadow-md transition-shadow duration-200 u-photo"
        itemProp="sharedContent"
      />
      <Link to={`./notes/${slug}`} className="alt-link-style u-url">
        <time
          className="dt-published"
          itemProp="dateCreated"
          dateTime={machineReadableDate}
        >
          {date}
        </time>
      </Link>
    </article>
  </Layout>
);

export default TemplateNote;

export const pageQuery = graphql`
  query NoteProp($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt
      html
      fields {
        slug
        heroImg {
          ...HeroImg
        }
      }
      frontmatter {
        lang
        date(formatString: "HH:mm D [of] MMM, YYYY")
        machineReadableDate: date
      }
    }
  }
`;
