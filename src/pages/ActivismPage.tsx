import { cardData } from '../content/activismCards'
import { blockComponents } from '../content/siteComponents'

export default function ActivismPage() {
  return (
    <section className={blockComponents.page} aria-labelledby="activism-title">
      <div className={blockComponents.pageCopy}>
        <p className={blockComponents.eyebrow}>activism / organizing</p>
        <h1 className={blockComponents.h1} id="activism-title">
          A place for causes.
        </h1>
        <p className={blockComponents.lede}>
          Organizations that I choose to support and the issues I care about. This page is
          meant to be a resource for people who want to get involved or learn more.
        </p>
        <br></br>
      </div>

      <div className={blockComponents.activismGrid}>
        {cardData.map((item) => (
          <article
            className={`${blockComponents.panels} ${blockComponents.paddedPanel} grid h-full grid-rows-[72px_100px_1fr_auto] gap-4`}
            key={item.title}
          >
            <h2 className={`${blockComponents.h2} mb-0 min-h-[72px]`}>{item.title}</h2>
            <div className="flex h-[100px] items-start justify-center overflow-hidden rounded-2xl">
              <img
                className="h-auto w-auto max-h-full max-w-full object-contain"
                src={item.image}
                alt={item.title}
              />
            </div>
            <p className={`${blockComponents.copyBody} leading-[1.7]`}>{item.description}</p>
            <a
              className={`${blockComponents.buttons} mt-2 self-start`}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              Learn more
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
