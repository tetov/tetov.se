import type { IContentProp } from "../helpers/types"

const ContentPage: React.FC<IContentProp> = ({
  content: {
    html,
    frontmatter: { title },
  },
  // TODO: Add heroImage
  // {html, frontmatter: {title, heroImage}}
}) => (
  <article itemScope itemType="http://schema.org/WebPage">
    <header>
      <h1 itemProp="name">{title}</h1>
    </header>
    <section
      dangerouslySetInnerHTML={{ __html: html }}
      itemProp=" ainContentOfPage"
    />
  </article>
)

export default ContentPage
