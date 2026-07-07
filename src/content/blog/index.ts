import type { BlogPost } from './types'

const postModules = import.meta.glob('./posts/*.ts', {
  eager: true,
}) as Record<string, { blogPost: BlogPost }>

export const blogPosts = Object.values(postModules)
  .map((module) => module.blogPost)
  .sort((left, right) => {
    return new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
  })
