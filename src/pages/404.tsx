import type { HeadFC } from "gatsby";
import React from "react";
import HeadComponent from "src/components/head";
import Layout from "src/components/layout";

const NotFoundPage = () => (
  <Layout>
    <p className="text-center">
      You just hit a route that doesn&#39;t exist...
    </p>
  </Layout>
);

export default NotFoundPage;

export const Head: HeadFC = ({ location: { pathname } }) => (
  <HeadComponent pageTitle="404: Not found" pathname={pathname} />
);
