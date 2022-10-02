import { graphql, HeadFC } from "gatsby";
import { GatsbyImage, getSrc } from "gatsby-plugin-image";
import { ContentBody, ContentHeader } from "src/components/content";
import { Head as HeadComponent } from "src/components/head";
import Layout from "src/components/layout";

const MarkdownPage: GatsbyPage<Queries.MarkdownPageQuery> = ({ data }) => {
  const categoryComponentMapping = {
    posts: PostPage,
    projs: ProjPage,
  };
  const Component =
    categoryComponentMapping[data.markdownRemark.fields.category];
  return Component({ data });
};

const PostPage: GatsbyPage<Queries.MarkdownPageQuery> = ({
  location: { pathname },
  data: {
    markdownRemark: {
      html,
      excerpt,
      fields: {
        heroImg: { heroImgData },
        slug,
      },
      frontmatter: { title, description, lang, date, machineReadableDate },
    },
  },
}) => (
  <Layout>
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

const ProjPage: GatsbyPage<Queries.MarkdownPageQuery> = ({
  location: { pathname },
  data: {
    markdownRemark: {
      html,
      fields: {
        heroImg: { heroImgData },
        slug,
      },
      frontmatter: { title },
    },
  },
}) => (
  <Layout>
    <article
      className="h-entry"
      itemScope
      itemType="http://schema.org/CreativeWork"
    >
      <ContentHeader url={`/${slug}`}>{title}</ContentHeader>
      <GatsbyImage
        alt={`Cover image for ${title}`}
        image={heroImgData}
        loading="eager"
        className="mb-8 md:mb-16"
        imgClassName="shadow-sm hover:shadow-md transition-shadow duration-200"
      />
      <ContentBody content={html} itemProp="about" />
    </article>
  </Layout>
);

export default MarkdownPage;

export const Head: HeadFC<Queries.MarkdownPageQuery> = ({ location, data }) => {
  const imageData = data.markdownRemark?.fields.heroImg?.heroImgData;
  const frontmatter = data.markdownRemark?.frontmatter;

  const pageDate = frontmatter?.machineReadableDate;

  return (
    <HeadComponent
      pathname={location.pathname}
      image={imageData && getSrc(imageData)}
      pageTitle={frontmatter?.title}
      description={frontmatter?.description || data.markdownRemark?.excerpt}
    >
      <meta property="og:type" content="article" id="og:type" />
      {pageDate && (
        <meta property="og:article:published_time" content={pageDate} />
      )}
    </HeadComponent>
  );
};

export const query = graphql`
  query MarkdownPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      excerpt(pruneLength: 160, format: MARKDOWN)
      id
      html
      fields {
        slug
        category
        heroImg {
          ...HeroImg
        }
      }
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        projDate: date(formatString: "YYYY-MM")
        machineReadableDate: date
        description
        lang
      }
    }
  }
`;
