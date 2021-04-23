import classNames from "classnames"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import ContactDetail from "./contact-detail"

const Footer: React.FC = () => {
  const {
    allContactData: { nodes },
  } = useStaticQuery<GatsbyTypes.FooterQuery>(graphql`
    query Footer {
      allContactData {
        nodes {
          id
          username
          url
          hcard
          text
          icon
        }
      }
    }
  `)

  return (
    <footer className="pt-8 pb-16 h-card text-lg items-center">
      <hr className="m-8 text-light-alt dark:text-dark-alt" />
      <div id="contact" className="md:px-44 text-center">
        {nodes.map((n) => (
          <ContactDetail
            contactDetails={n}
            key={n.id}
            className={classNames(
              n.hcard,
              "align-middle inline-block mx-4 whitespace-nowrap hover:text-purple"
            )}
            iconProp={{ size: "2em", className: "p-2 inline-block" }}
          />
        ))}
      </div>
    </footer>
  )
}
export default Footer
