import { Link } from "gatsby"
import React from "react"

const Header: React.FC = ({ children }) => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link
        to="/"
        className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8"
        activeClassName="underline"
      >
        {children}
      </Link>
    </h2>
  )
}

export default Header
