import React from "react"

import Footer from "./footer"
import Header, { HeaderProp } from "./header"
import SEO, { SEOProp } from "./seo"

type LayoutProp = SEOProp &
  HeaderProp & {
    children: React.ReactNode
  }

const Layout = ({ children, subHeading, ...seoProps }: LayoutProp) => {
  return (
    <div className="global-wrapper min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <SEO {...seoProps} />
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-5 space-y-6">
        <Header subHeading={subHeading} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
