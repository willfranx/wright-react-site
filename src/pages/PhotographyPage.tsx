import { photoGrid } from '../content/photoGrid'
import { blockComponents } from '../content/siteComponents'

export default function PhotographyPage() {
  return (
    <section className={blockComponents.page} aria-labelledby="photography-title">
      <div className={blockComponents.pageCopy}>
        <p className={blockComponents.eyebrow}>photography / visual archive</p>
        <h1 className={blockComponents.h1} id="photography-title">
          Images from the beautiful places I've seen.
        </h1>
        <p className={blockComponents.lede}>
          I began taking panoramics when I got my first iPhone. I started taking them every
          time I found myself somewhere beautiful. When I look back at these panoramas,
          they become a small glimpse into different times of my life. I've arranged them
          here for you to enjoy.
        </p>
        <p className={`${blockComponents.lede} mt-4`}>
          Scroll to begin. The photos are arranged top to bottom by most recent year,
          grouped by location.
        </p>
      </div>

      <div className={blockComponents.photoGrid}>
        <div className="grid grid-cols-1 gap-[18px]">
          {photoGrid.map((photo) => (
            <div className={blockComponents.photoCard} key={photo.src}>
              <img src={photo.src} alt={photo.label} className="max-h-[400px] w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
