import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="page" aria-labelledby="not-found-title">
      <div className="page-copy">
        <p className="eyebrow">404</p>
        <h1 id="not-found-title">Page not found</h1>
        <p className="lede">The page you requested does not exist.</p>
      </div>

      <Link className="primary-link" to="/">
        Go home
      </Link>
    </section>
  );
}
