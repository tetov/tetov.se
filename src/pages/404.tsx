import React from "react";
import Layout from "src/components/layout";
import { MetaContent } from "src/components/meta";

const NotFoundPage: GatsbyPage = ({ location: { pathname } }) => {
  const title = "404: Not found";
  return (
    <Layout pathName={pathname} subHeading={title}>
      <MetaContent title="404: Not found" />
      <p className="text-center">
        You just hit a route that doesn&#39;t exist...
      </p>
    </Layout>
  );
};

export default NotFoundPage;
