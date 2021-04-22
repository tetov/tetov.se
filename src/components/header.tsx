import { Link } from "gatsby"
import React from "react"

import useSiteMetadata from "../helpers/hook-use-site-metadata"

const Header: React.FC = () => {
  const { title } = useSiteMetadata()

  /*
  const navMappings = [
  { text: "projects", url: "/" },
  { text: "blog", url: "/blog" },
  { text: "about", url: "/about" },
  ]
  */

  return (
    <header className="text-center md:justify-between pt-12 mb-16 md:mb-12">
      <Link to="/">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
          {title}
        </h1>
      </Link>
      <p className="mt-4 lg:px-64 md:px-32 text-xl md:text-2xl font-light inline-block">
        I'm <span className="text-purple">Anton Tetov</span> (
        <span className="text-purple">they/them</span>) and these are some of my
        projects. If you need to contact me you'll find my{" "}
        <Link to="#contact" className="link-style">
          contact details below
        </Link>
        .
      </p>

      {/* <nav className="flex-col">
        {navMappings.map(({ text, url }) => (
          <div key={url}>
            <Link to={url} key={text}>
              <h4 className="text-center text-lg m-5 md:pl-2">{text}</h4>
            </Link>
          </div>
        ))} */}
    </header>
  )
}

export default Header
