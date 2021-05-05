import { Link } from "gatsby"
import React from "react"

type PageHeaderProps = {
  url: string
  itemProp?: string
  children: React.ReactNode
}

const PageHeader = ({
  url,
  itemProp = "headline",
  children,
}: PageHeaderProps) => (
  <header className="text-center md:justify-between mb-16 md:mb-12">
    <h2 className="mt-4 w-2/3 text-2xl md:text-4xl font-light inline-block leading-relaxed">
      <Link to={url} className="p-name link-style-alt" itemProp={itemProp}>
        {children}
      </Link>
    </h2>
  </header>
)

export default PageHeader
