import React from "react"

import Footer from "./footer"
import SEO, { ISEOProp as ISEOProp } from "./seo"

export interface ILayoutProp extends ISEOProp {
  children?: JSX.Element
}

const Layout: React.FC<ILayoutProp> = ({ children, ...seoProps }) => {
  return (
    <div className="global-wrapper min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <SEO {...seoProps} />
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-5 space-y-6">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
