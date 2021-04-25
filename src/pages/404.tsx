import React from "react"

import Header from "../components/header"
import Layout from "../components/layout"

const NotFoundPage: GatsbyPage = () => {
  return (
    <Layout title="404: Not found">
      <>
        <Header>404: Not Found</Header>
        <p className="text-center">
          You just hit a route that doesn&#39;t exist...
        </p>
      </>
    </Layout>
  )
}

export default NotFoundPage
