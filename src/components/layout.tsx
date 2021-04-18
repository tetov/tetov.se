import React from "react"

import Footer from "./footer"
import Header from "./header"
import NavDefault from "./nav-default"
import NavIndex from "./nav-index"
import SEO, { ISEOProp as ISEOProp } from "./seo"

export interface ILayoutProp extends ISEOProp {
  location: any
  children?: any
}

const Layout: React.FC<ILayoutProp> = ({ location, children, ...seoProps }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let Nav: React.FC = isRootPath ? NavIndex : NavDefault

  return (
    <div className="global-wrapper min-h-screen" data-is-root-path={isRootPath}>
      <div className="container mx-auto px-5">
        <SEO {...seoProps} />
        <Header />
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
