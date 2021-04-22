import React from "react"

import * as markdownStyles from "./markdown-styles.module.css"

const ContentBody: React.FC<{ content: string; itemProp: string }> = ({
  content,
  itemProp,
}) => (
  <div className="max-w-2xl mx-auto">
    <section
      className={markdownStyles["markdown"]}
      dangerouslySetInnerHTML={{ __html: content }}
      itemProp={itemProp}
    />
  </div>
)

export default ContentBody
