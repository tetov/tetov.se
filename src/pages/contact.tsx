import React from "react"

import ContactDetails from "../components/contact-details"
import Header from "../components/header"
import Layout from "../components/layout"

const Contact: GatsbyPage = () => (
  <Layout title="Contact" description="Anton Tetov's contact details">
    <>
      <Header>Want to say hi?</Header>

      <ContactDetails />
    </>
  </Layout>
)

export default Contact
