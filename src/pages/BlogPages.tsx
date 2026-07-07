import { Link, Navigate, useParams } from 'react-router-dom'
import { blogPosts } from '../content/blogPosts'
import { blockComponents } from '../content/siteComponents'

export function BlogIndexPage() {
  return (
    <section className={blockComponents.page} aria-labelledby="blog-title">
      <div className={blockComponents.pageCopy}>
        <p className={blockComponents.eyebrow}>blog / writing</p>
        <h1 className={blockComponents.h1} id="blog-title">
          Reflections and thoughts.
        </h1>
        <p className={blockComponents.lede}>
          A space for me to share opinions and ideas, all of which are my own and do not
          reflect the views of any organization.
        </p>
      </div>

      <div className={blockComponents.blogList}>
        {blogPosts.map((post, index) => (
          <article
            className={`${blockComponents.blogPost} ${blockComponents.panels}`}
            key={post.slug}
          >
            <div className={blockComponents.postMeta}>
              <span className={blockComponents.postDate}>{post.date}</span>
              <span className={blockComponents.postNumber}>#{blogPosts.length - index}</span>
            </div>
            <h2 className={blockComponents.h2}>{post.title}</h2>
            <p className={blockComponents.postExcerpt}>{post.excerpt}</p>
            <div className={blockComponents.postFooter}>
              <span className={blockComponents.readTime}>{post.date}</span>
              <Link className={blockComponents.readLink} to={`/blog/${post.slug}`}>
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((entry) => entry.slug === slug)

  if (!post) {
    return <Navigate replace to="/blog" />
  }

  return (
    <section className={blockComponents.page} aria-labelledby="blog-post-title">
      <div className={blockComponents.pageCopy}>
        <p className={blockComponents.eyebrow}>blog / writing</p>
        <h1 className={blockComponents.h1} id="blog-post-title">
          {post.title}
        </h1>
      </div>

      <article className={`${blockComponents.panels} ${blockComponents.paddedPanel} grid gap-5`}>
        {post.content.map((block, index) => {
          if (block.type === 'paragraph') {
            return (
              <p className={blockComponents.proseParagraph} key={`${block.type}-${index}`}>
                {block.text}
              </p>
            )
          }

          return (
            <figure className="grid gap-3 justify-items-start" key={`${block.type}-${index}`}>
              <div className="inline-block overflow-hidden">
                <img src={block.src} alt={block.alt} className="block h-auto w-auto max-w-full" />
              </div>
              {block.caption ? (
                <figcaption className="text-sm text-[#4f4a46] dark:text-[#c8bfb5]">
                  {block.caption}
                </figcaption>
              ) : null}
            </figure>
          )
        })}
      </article>

      <div className="mt-4">
        <Link className={blockComponents.secondaryLink} to="/blog">
          Back to blog
        </Link>
      </div>
    </section>
  )
}
