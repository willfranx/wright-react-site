import { Link } from 'react-router-dom'
import { blockComponents } from '../content/siteComponents'

export default function NotFoundPage() {
  return (
    <section className={blockComponents.page} aria-labelledby="not-found-title">
      <div className={blockComponents.pageCopy}>
        <p className={blockComponents.eyebrow}>404</p>
        <h1 className={blockComponents.h1} id="not-found-title">
          Page not found
        </h1>
        <p className={blockComponents.lede}>The page you requested does not exist.</p>
      </div>

      <Link className={blockComponents.primaryLink} to="/">
        Go home
      </Link>
    </section>
  )
}
