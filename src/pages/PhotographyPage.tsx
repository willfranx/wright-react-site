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
        {photoGrid.map((photo) => (
          <figure className="photo-card" key={photo.src}>
            <img className="photo-image" src={photo.src} alt={photo.label} />
          </figure>
        ))}
      </div>
    </section>
  )
}
