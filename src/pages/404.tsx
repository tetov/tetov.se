import { HeadFC } from "gatsby";
import { Head as HeadComponent } from "src/components/head";
import Layout from "src/components/layout";

const NotFoundPage: GatsbyPage = () => {
  const title = "404: Not found";
  return (
    <Layout subHeading={title}>
      <p className="text-center">
        You just hit a route that doesn&#39;t exist...
      </p>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = ({location}) => (
  <HeadComponent pageTitle="404: Not found" pathname={location.pathname} />
);
