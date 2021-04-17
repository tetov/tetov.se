import React from "react"

import Layout, { ILayoutProp } from "../layout"

const BaseTemplate: React.FC<ILayoutProp> = (prop) => {
  // Add meta to Layout
  return <Layout {...prop} />
}

export default BaseTemplate
