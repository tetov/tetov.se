import React from "react"

import ContactDetails from "../components/contact-details"
import Layout from "../components/layout"

const Contact: GatsbyPage = () => (
  <Layout
    title="Contact"
    description="Anton Tetov's contact details"
    subHeading="Want to say hi?"
  >
    <ContactDetails />
  </Layout>
)

export default Contact
