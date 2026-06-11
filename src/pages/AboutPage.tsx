import resumePdf from "../assets/img/Wright_Franklin_Resume_2026.pdf";
import wrightImg from "../assets/img/wright.jpg";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "../ui/ConnectIcons";

export default function AboutPage() {
  return (
    <section className="page about-page" aria-labelledby="about-title">
      <div className="hero-layout">
        <div className="page-copy">
          <p className="eyebrow">about / who I am</p>
          <h1 id="about-title">Software engineer, writer, and photographer.</h1>
          <p className="lede">
            Hi! I'm Wright, an enthusiastic learner working as a software
            engineer in Anchorage, Alaska. I care about community and using
            technology to create positive change.
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
            <li>Software engineering with a social lens</li>
            <li>Community-centered activism and creativity</li>
            <li>Landscape photography</li>
          </ul>
        </article>

        <section
          className="connect-section panel"
          aria-labelledby="connect-title"
        >
          <div className="connect-copy">
            <p className="eyebrow">connect with me</p>
            <h2 id="connect-title">Say hello</h2>
            <p>
              Reach out by email or visit my GitHub and LinkedIn to see more of
              my work and background.
            </p>
          </div>

          <div className="connect-links">
            <a
              className="connect-button connect-email"
              href="mailto:wright@wrightfranklin.com"
              aria-label="Email me"
            >
              <EmailIcon />
              Email
            </a>
            <a
              className="connect-button"
              href="https://github.com/willfranx"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              className="connect-button"
              href="https://www.linkedin.com/in/willfranx"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
