import { useState } from "react";
import heroImg from "../assets/img/J1256.jpeg";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "../ui/ConnectIcons";
import { getRandomQuote } from "../content/quoteFooter";

export default function HomePage() {
  const [quoteItem, setUserData] = useState(() => getRandomQuote());

  const formattedQuote = quoteItem?.Quote.replace(/<br\s*\/?>/gi, "\n");

  return (
    <section className="page home-page" aria-labelledby="home-title">
      <div className="hero-layout">
        <div className="page-copy">
          <p className="eyebrow">wright / home</p>
          <h1 id="home-title">Hello, world! Welcome to my site.</h1>
          <p className="lede">
            Please feel free to explore. If you have any questions, please
            contact me at any of the links below.
          </p>
        </div>

        <div className="hero-card panel">
          <img
            src={heroImg}
            className="hero-image"
            alt="A picture of the northern lights from my backyard in Anchorage, Alaska."
          />
        </div>
      </div>

      <section
        className="connect-section panel"
        aria-labelledby="connect-title"
      >
        <div className="connect-copy">
          <p className="eyebrow">connect with me</p>
          <h2 id="connect-title">Say hello</h2>
          <p>
            Reach out by email or visit my GitHub and LinkedIn to see more of my
            work and background.
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

      <div className="card-grid highlight-grid">
        {quoteItem ? (
          <div className="card-grid highlight-grid">
            {quoteItem && (
              <article className="panel" key={quoteItem.Quote}>
                <p className="card-kicker">Here's a quote that I love:</p>
                {/* The style prop ensures the newlines are rendered as visual breaks */}
                <h4 style={{ whiteSpace: "pre-line" }}>"{formattedQuote}"</h4>
                <p className="card-meta">
                  — {quoteItem.Author}, <em>{quoteItem.Book}</em>
                </p>
                <br></br>
                <button
                  className="connect-button refresh-button"
                  onClick={() => {
                    const newQuote = getRandomQuote();
                    setUserData(newQuote);
                  }}
                  aria-label="Refresh quote"
                >
                  Discover another quote
                </button>
              </article>
            )}
          </div>
        ) : (
          <p>No quote found.</p>
        )}
      </div>
    </section>
  );
}
