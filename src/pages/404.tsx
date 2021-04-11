import Layout from "../components/layout"

const NotFoundPage: GatsbyPage = ({ location }) => {
  return (
    <Layout location={location} title="404: Not found">
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </Layout>
  )
}

export default NotFoundPage
