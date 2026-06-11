import resumePdf from "../assets/img/Wright_Franklin_Resume_2026.pdf";
import wrightImg from "../assets/img/wright.jpg";

export default function AboutPage() {
  return (
    <section className="page about-page" aria-labelledby="about-title">
      <div className="hero-layout">
        <div className="page-copy">
          <p className="eyebrow">about / who I am</p>
          <h1 id="about-title">Software engineer, writer, and photographer.</h1>
          <p className="lede">
            Hi! I'm Wright, an enthusiastic learner working as a software engineer in Anchorage, Alaska. I care about community and using technology to create positive change.
          </p>
        </div>

        <div className="hero-card panel">
          <img
            src={wrightImg}
            className="hero-image"
            alt="Portrait of Wright"
          />
        </div>
      </div>

      <div className="about-layout">
        <article className="panel large-panel">
          <h2>More about me</h2>
          <p>
            You can check out my resume here. Be sure to check out the rest of
            the site as well. Thanks for looking!
          </p>
          <br></br>
          <div>
            <a
              className="secondary-link"
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
            >
              My resume
            </a>
          </div>
        </article>

        <article className="panel stack-panel">
          <h2>Focus areas</h2>
          <ul className="feature-list">
            <li>Creativity with a social lens</li>
            <li>Community-centered activism</li>
            <li>Panoramic landscape photography</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
