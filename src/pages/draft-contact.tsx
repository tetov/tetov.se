import { graphql } from "gatsby"
import React from "react"

import ContactDetail from "../components/contact-detail"
import Layout from "../components/layout"

const Contact: GatsbyPage<GatsbyTypes.ContactQuery> = (
  {
    data: {
      allContactData: { nodes },
    },
  },
  location
) => (
  <Layout
    location={location}
    title="Contact"
    description="Anton Tetov's contact details"
  >
    {nodes.map((n) => (
      <ContactDetail
        contactDetails={n}
        key={n.id}
        className={""}
        iconProp={{}}
      />
    ))}
  </Layout>
)

export default Contact

export const ContactQuery = graphql`
  query Contact {
    allContactData {
      nodes {
        id
        service
        username
        url
        text
        icon
      }
    }
  }
`
