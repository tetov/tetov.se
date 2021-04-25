import { Link } from "gatsby"
import React from "react"

import useSiteMetadata from "../helpers/hook-use-site-metadata"

const Header: React.FC = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <header className="text-center md:justify-between pt-12 mb-16 md:mb-12">
      <Link to="/">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
          {title}
        </h1>
      </Link>{" "}
      <h2
        itemProp="headline"
        className="mt-4 lg:px-64 md:px-32 text-2xl md:text-4xl font-light inline-block leading-relaxed"
      >
        {children}
      </h2>
    </header>
  )
}

export default Header
