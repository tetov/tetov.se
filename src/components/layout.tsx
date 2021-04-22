import React from "react"

import Footer from "./footer"
import Header from "./header"
import SEO, { ISEOProp as ISEOProp } from "./seo"

export interface ILayoutProp extends ISEOProp {
  location: any
  children?: any
}

const Layout: React.FC<ILayoutProp> = ({ location, children, ...seoProps }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div
      className="global-wrapper min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text"
      data-is-root-path={isRootPath}
    >
      <div className="container mx-auto px-5 space-y-6">
        <SEO {...seoProps} />
        <Header />
        <main>{children}</main>
        <Footer isRootPath={isRootPath} />
      </div>
    </div>
  )
}

export default Layout
