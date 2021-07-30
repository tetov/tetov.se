import { ContactCard } from "components/contact";
import Layout from "components/layout";
import { MetaContent } from "components/meta";
import React from "react";

const Contact: GatsbyPage = ({ location }) => (
  <Layout pathName={location.pathname} subHeading="Want to say hi?">
    <MetaContent title="Contact" excerpt="Anton Tetov's contact details" />
    <ContactCard />
  </Layout>
);

export default Contact;
