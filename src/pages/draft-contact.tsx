import React from "react"

import Layout from "../components/layout"
import useSiteMetadata from "../helpers/hook-use-site-metadata"

const Contact: GatsbyPage<string> = ({ location }) => {
  const socialObj = useSiteMetadata().social

  return (
    <Layout
      location={location}
      title="Contact"
      description="Anton Tetov's contact details"
    >
      <div className="text-xl hover:text-accent">
        <p>
          <a href={socialObj.email}>email</a>
        </p>
        <p>
          <a href={socialObj.matrix}>matrix</a>
        </p>
        <p>
          <a href={socialObj.twitter}>twitter</a>
        </p>
        <p>
          <a href={socialObj.instagram}>instagram</a>
        </p>
        <p>
          <a href={socialObj.mastodon}>mastodon</a>
        </p>
      </div>
    </Layout>
  )
}

export default Contact
