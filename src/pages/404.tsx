import Layout from "src/components/layout";
import SEO from "src/components/seo";

const NotFoundPage: GatsbyPage = ({ location: { pathname } }) => {
  const title = "404: Not found";
  return (
    <Layout subHeading={title}>
      <p className="text-center">
        You just hit a route that doesn&#39;t exist...
      </p>
    </Layout>
  );
};

export const Head = () => (
  <SEO pageTitle="404: Not found" pathname={location.pathname} />
);

export default NotFoundPage;
