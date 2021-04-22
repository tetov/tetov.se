import classNames from "classnames"
import React from "react"

import useSiteMetadata from "../helpers/hook-use-site-metadata"
import ContactDetail from "./contact-detail"

const Footer: React.FC<{ isRootPath?: Boolean }> = ({ isRootPath = false }) => {
  const { social, siteUrl, description } = useSiteMetadata()
  return (
    <footer className="pt-8 pb-16 h-card text-lg items-center">
      <hr className="m-8 text-light-alt dark:text-dark-alt" />
      <div id="contact" className="md:px-44 text-center">
        {social.map((s) => (
          <ContactDetail
            contactDetails={s}
            key={`${s.hcard || ""}${s.text || ""}${s.url || ""}`}
            className={classNames(
              s.hcard,
              "align-middle inline-block mx-4 whitespace-nowrap hover:text-purple"
            )}
            iconProp={{ size: "2rem", className: "p-2 inline-block" }}
          />
        ))}
        {/* FIXME */}
        {isRootPath && (
          <>
            <a
              href={siteUrl}
              className="hidden u-url u-uid"
              aria-hidden={true}
            />
            <span className="hidden p-name" aria-hidden="true">
              Anton Tetov
            </span>
            <span className="hidden p-gender-identity" aria-hidden="true">
              they/them
            </span>
            <span className="hidden p-note" aria-hidden="true">
              {description}
            </span>
          </>
        )}
      </div>
    </footer>
  )
}
export default Footer
