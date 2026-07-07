import { photoYearGroups } from '../content/photoGrid'
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
        <br></br>
      </div>

      <div className="grid gap-12">
        {photoYearGroups.map((yearGroup) => (
          <section key={yearGroup.year} aria-labelledby={`year-${yearGroup.year}`}>
            <h2 className={`${blockComponents.h2} mb-6`} id={`year-${yearGroup.year}`}>
              {yearGroup.year}
            </h2>

            <div className="grid gap-10">
              {yearGroup.groups.map((group) => (
                <section key={group.key} aria-labelledby={group.key}>
                  <h3 className="mb-4 text-[1.05rem] font-medium tracking-[0.02em] text-[#171412] dark:text-[#f5f2ee]">
                    {group.title}
                  </h3>

                  <div className="grid grid-cols-1 gap-[18px]">
                    {group.photos.map((photo) => (
                      <div className={`${blockComponents.photoCard} p-2`} key={photo.src}>
                        <div className="aspect-[3.5/1] overflow-hidden rounded-[22px] bg-[rgba(255,255,255,0.45)] dark:bg-[rgba(60,54,48,0.35)]">
                          <img
                            src={photo.src}
                            alt={photo.label}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}
