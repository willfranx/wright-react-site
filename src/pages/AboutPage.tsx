import resumePdf from '../assets/img/Wright_Franklin_Resume.pdf'
import wrightImg from '../assets/img/wright.jpg'
import { blockComponents } from '../content/siteComponents'
import { EmailIcon, GitHubIcon, LinkedInIcon } from '../ui/ConnectIcons'

export default function AboutPage() {
  return (
    <section className={blockComponents.page} aria-labelledby="about-title">
      <div className={blockComponents.heroLayout}>
        <div className={blockComponents.pageCopy}>
          <p className={blockComponents.eyebrow}>about / who I am</p>
          <h1 className={blockComponents.h1} id="about-title">
            Software engineer, writer, and photographer.
          </h1>
          <p className={blockComponents.lede}>
            Hi! I'm Wright, an enthusiastic learner working as a software engineer in
            Anchorage, Alaska. I care about community and using technology to create
            positive change.
          </p>
        </div>

        <div className={`${blockComponents.heroCard} ${blockComponents.panels}`}>
          <img src={wrightImg} className={blockComponents.heroImage} alt="Portrait of Wright" />
        </div>
      </div>

      <div className={blockComponents.aboutLayout}>
        <article className={`${blockComponents.panels} ${blockComponents.paddedPanel}`}>
          <h2 className={blockComponents.h2}>More about me</h2>
          <p className={blockComponents.copyBody}>
            You can check out my resume here. Be sure to check out the rest of the site as
            well. Thanks for looking!
          </p>
          <div className="mt-4">
            <a className={blockComponents.secondaryLink} href={resumePdf} target="_blank" rel="noreferrer">
              My resume
            </a>
          </div>
        </article>

        <article className={`${blockComponents.panels} ${blockComponents.paddedPanel}`}>
          <h2 className={blockComponents.h2}>Focus areas</h2>
          <ul className={blockComponents.featureList}>
            <li className={blockComponents.copyBody}>Software engineering with a social lens</li>
            <li className={blockComponents.copyBody}>Community-centered activism and creativity</li>
            <li className={blockComponents.copyBody}>Landscape photography</li>
          </ul>
        </article>

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
      </div>
    </section>
  )
}
