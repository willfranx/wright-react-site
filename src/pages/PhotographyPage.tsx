import { photoGrid } from '../content/photoGrid'

export default function PhotographyPage() {
  return (
    <section
      className="page photography-page"
      aria-labelledby="photography-title"
    >
      <div className="page-copy">
        <p className="eyebrow">photography / visual archive</p>
        <h1 id="photography-title">
          Images from the beautiful places I've seen.
        </h1>
        <p className="lede">
          I began taking panoramics when I got my first iPhone. I started taking
          them every time I found myself somewhere beautiful. When I look back
          at these panoramas, they become a small glimpse into different times
          of my life. I've arranged them here for you to enjoy.
        </p>
        <br></br>
        <p className="lede">
          Scroll to begin. The photos are arranged top to bottom by most recent
          year, grouped by location.
        </p>
      </div>

      <div className="photo-grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {photoGrid.map((photo) => (
              <div 
                className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center photo-card"
              >
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}
