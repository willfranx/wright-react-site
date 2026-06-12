import { cardData } from "../content/activismCards";

export default function ActivismPage() {
  return (
    <section className="page activism-page" aria-labelledby="activism-title">
      <div className="page-copy">
        <p className="eyebrow">activism / organizing</p>
        <h1 id="activism-title">A place for causes.</h1>
        <p className="lede">
          Organizations that I choose to support and the issues I care about.
          This page is meant to be a resource for people who want to get
          involved or learn more.
        </p>
      </div>

      <div className="card-grid activism-grid">
        {cardData.map((item) => (
          <article className="panel" key={item.title}>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
            <br></br>
            <a
              className="connect-button"
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
  );
}
