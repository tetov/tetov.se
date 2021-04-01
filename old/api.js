import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import yaml from "js-yaml"

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

const grayMatterOpts = {
  excerpt: true,
  excerpt_separator: '<!-- excerptEnd -->',
  engines:
  {
    yaml: s => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA})
  }
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content, excerpt } = matter(fileContents, grayMatterOpts)
  
  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    switch(field) {
      case 'slug':
        items[field] = realSlug
        break;
      case 'content':
        items[field] = content
        break;
      case 'excerpt':
        items[field] = excerpt
        break;
      default:
        items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
