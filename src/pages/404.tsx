import React from "react"

import Layout from "../components/layout"

const NotFoundPage: GatsbyPage = ({ location }) => {
  return (
    <Layout location={location} title="404: Not found">
      <h1 className="text-center text-xl">404: Not Found</h1>
      <p className="text-center">
        You just hit a route that doesn&#39;t exist...
      </p>
    </Layout>
  )
}

export default NotFoundPage
