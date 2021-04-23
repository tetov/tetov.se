import { Link } from "gatsby"
import React from "react"

import useSiteMetadata from "../helpers/hook-use-site-metadata"

const Header: React.FC = () => {
  const { title } = useSiteMetadata()

  return (
    <header className="text-center md:justify-between pt-12 mb-16 md:mb-12">
      <Link to="/">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
          {title}
        </h1>
      </Link>
      <p className="mt-4 lg:px-64 md:px-32 text-xl md:text-2xl font-light inline-block leading-relaxed">
        Hi! I'm <span className="text-purple">Anton Tetov</span>, I'm an
        architect, programmer and maker. These are some of my projects.{" "}
        <Link to="#contact" className="link-style">
          Want to say hi?
        </Link>
      </p>
    </header>
  )
}

export default Header
