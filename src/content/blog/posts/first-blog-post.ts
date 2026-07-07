import img1 from '../../../assets/img/dancing_smiley.gif'
import type { BlogPost } from '../types'

export const blogPost: BlogPost = {
  slug: 'first-blog-post',
  title: 'First blog post!',
  date: 'July 7, 2026',
  publishedAt: '2026-07-07',
  excerpt: 'My new site is done, and this is my first blog post!',
  content: [
    {
      type: 'paragraph',
      text: 'My new site is done, and this is my first blog post! Thanks for checking it out. I plan to use this blog for sharing thoughts, reflections, and ideas about what I\'m working on and the tools that I\'m using. Stay tuned!',
    },
    {
      type: 'image',
      src: img1,
      alt: 'A dancing smiley face.',
      caption: 'New site!',
    },
  ],
}