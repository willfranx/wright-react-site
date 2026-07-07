export type BlogContentBlock =
  | {
      type: 'paragraph'
      text: string
    }
  | {
      type: 'image'
      src: string
      alt: string
      caption?: string
    }

export type BlogPost = {
  slug: string
  title: string
  date: string
  publishedAt: string
  excerpt: string
  content: BlogContentBlock[]
}