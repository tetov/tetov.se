import React from "react"

import Layout from "../components/layout"

const NotFoundPage: GatsbyPage = () => {
  return (
    <Layout title="404: Not found" subHeading="404: Not found">
      <p className="text-center">
        You just hit a route that doesn&#39;t exist...
      </p>
    </Layout>
  )
}

export default NotFoundPage
