export type NewsPost = {
  slug: string
  title: string
  excerpt: string
  /** ISO 8601 date */
  publishedAt: string
  updatedAt?: string
  coverImage?: { src: string; alt: string }
  /** Paragraphs of plain text. Swap for rich content when the CMS is connected. */
  body: string[]
}

/**
 * News is backend-driven. Replace this adapter with the CMS or database query.
 * Until then the site publishes no articles and the pages show an honest empty state.
 */
export type NewsSource = {
  list: () => Promise<NewsPost[]>
  get: (slug: string) => Promise<NewsPost | null>
}

const emptySource: NewsSource = {
  list: async () => [],
  get: async () => null,
}

let source: NewsSource = emptySource

export function configureNewsSource(next: NewsSource) {
  source = next
}

export async function getNewsPosts() {
  const posts = await source.list()
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export async function getNewsPost(slug: string) {
  return source.get(slug)
}
