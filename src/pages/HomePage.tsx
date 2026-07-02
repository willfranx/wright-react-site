import { useState } from 'react'
import heroImg from '../assets/img/J1256.jpeg'
import { getRandomQuote } from '../content/quoteFooter'
import { blockComponents } from '../content/siteComponents'
import { EmailIcon, GitHubIcon, LinkedInIcon } from '../ui/ConnectIcons'

export default function HomePage() {
  const [quoteItem, setUserData] = useState(() => getRandomQuote())

  const formattedQuote = quoteItem?.Quote.replace(/<br\s*\/?>/gi, '\n')

  return (
    <section className={blockComponents.page} aria-labelledby="home-title">
      <div className={blockComponents.heroLayout}>
        <div className={blockComponents.pageCopy}>
          <p className={blockComponents.eyebrow}>wright / home</p>
          <h1 className={blockComponents.h1} id="home-title">
            Hello, world! Welcome to my site.
          </h1>
          <p className={blockComponents.lede}>
            Please feel free to explore. If you have any questions, please contact me at any
            of the links below.
          </p>
        </div>

        <div className={`${blockComponents.heroCard} ${blockComponents.panels}`}>
          <img
            src={heroImg}
            className={blockComponents.heroImage}
            alt="A picture of the northern lights from my backyard in Anchorage, Alaska."
          />
        </div>
      </div>

      <section
        className={`${blockComponents.connectSection} ${blockComponents.panels}`}
        aria-labelledby="connect-title"
      >
        <div className={blockComponents.connectCopy}>
          <p className={blockComponents.eyebrow}>connect with me</p>
          <h2 className={blockComponents.h2} id="connect-title">
            Say hello
          </h2>
          <p className={blockComponents.copyBody}>
            Reach out by email or visit my GitHub and LinkedIn to see more of my work and
            background.
          </p>
        </div>

        <div className={blockComponents.connectLinks}>
          <a className={blockComponents.buttons} href="mailto:wright@wrightfranklin.com" aria-label="Email me">
            <EmailIcon />
            Email
          </a>
          <a
            className={blockComponents.buttons}
            href="https://github.com/willfranx"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            className={blockComponents.buttons}
            href="https://www.linkedin.com/in/willfranx"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </section>

      <div className={blockComponents.cardGrid}>
        {quoteItem ? (
          <article className={`${blockComponents.panels} ${blockComponents.paddedPanel}`} key={quoteItem.Quote}>
            <p className={blockComponents.cardKicker}>Here's a quote that I love:</p>
            <h4 className={blockComponents.h4} style={{ whiteSpace: 'pre-line' }}>
              "{formattedQuote}"
            </h4>
            <p className="mt-4 text-[#4f4a46] dark:text-[#c8bfb5]">
              - {quoteItem.Author}, <em>{quoteItem.Book}</em>
            </p>
            <div className="h-4" aria-hidden="true" />
            <button
              className={`${blockComponents.buttons} max-w-full sm:max-w-[320px]`}
              onClick={() => {
                const newQuote = getRandomQuote()
                setUserData(newQuote)
              }}
              aria-label="Refresh quote"
            >
              Discover another quote
            </button>
          </article>
        ) : (
          <p className={blockComponents.copyBody}>No quote found.</p>
        )}
      </div>
    </section>
  )
}
