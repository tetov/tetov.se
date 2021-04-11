import type { IContentProp } from "../helpers/types"

const ContentProj: React.FC<IContentProp> = ({content: { html, frontmatter: {title, date}}}) => (
  <article itemScope itemType="http://schema.org/CreativeWork">
    <header>
      <h1 itemProp="headline">{title}</h1>
      <p>{date}</p>
    </header>
    <section
      dangerouslySetInnerHTML={{ __html: html }}
      itemProp="about"
    />
  </article>
)

export default ContentProj
