import Layout from "components/layout";
import { MetaContent } from "components/meta";
import React from "react";

const NotFoundPage: GatsbyPage = ({location: {pathname}}) => {
  const title = "404: Not found"
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
