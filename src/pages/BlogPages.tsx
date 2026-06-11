import { Link, Navigate, useParams } from "react-router-dom";
import { blogPosts } from "../content/blogPosts";

export function BlogIndexPage() {
  return (
    <section className="page blog-page" aria-labelledby="blog-title">
      <div className="page-copy">
        <p className="eyebrow">blog / writing</p>
        <h1 id="blog-title">Reflections and thoughts.</h1>
        <p className="lede">
          A space for me to share opinions and ideas, all of which are my own and do not reflect the views of any organization.
        </p>
      </div>

      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <article className="blog-post panel" key={post.slug}>
            <div className="post-meta">
              <span className="post-date">{post.date}</span>
              <span className="post-number">#{blogPosts.length - index}</span>
            </div>
            <h2>{post.title}</h2>
            <p className="post-excerpt">{post.excerpt}</p>
            <div className="post-footer">
              <Link className="read-link" to={`/blog/${post.slug}`}>
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return <Navigate replace to="/blog" />;
  }

  return (
    <section className="page blog-post-page" aria-labelledby="blog-post-title">
      <div className="page-copy">
        <p className="eyebrow">blog / writing</p>
        <h1 id="blog-post-title">{post.title}</h1>
      </div>

      <article className="panel large-panel blog-post-detail">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
      <br></br>
      <Link className="secondary-link" to="/blog">
        Back to blog
      </Link>
    </section>
  );
}
