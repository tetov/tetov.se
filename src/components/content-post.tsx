import type { IContentProp } from "../helpers/types"

const ContentPost: React.FC<IContentProp> = ({content: {html, frontmatter: {title, date}}}) => 
  (
      <article
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <header>
          <h1 itemProp="headline">{title}</h1>
          <p itemProp="dateCreated">{date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: html }}
          itemProp="articleBody"
        />
      </article>
  )


export default ContentPost
