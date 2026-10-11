import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who you are on the left, the illustration
 * on the right. Sized to the panel, so nothing here scrolls.
 *
 * The left column is a ladder, not a paragraph block: one display statement,
 * one line of context, then the four things you do - each carrying the marks
 * of the tools it is built with. The tools are the proof, so they are the
 * visual. Swap the marks below for your own (any square SVG/PNG in public/).
 */

const JAVA = { src: '/icons/java.svg', name: 'Java' }
const MYSQL = { src: '/icons/mysql.svg', name: 'MySQL' }
const VSCODE = { src: '/icons/vscode.svg', name: 'VS Code' }
const GITHUB = { src: '/icons/ai/github.svg', name: 'GitHub' }
const DBEAVER = { src: '/icons/dbeaver.svg', name: 'DBeaver' }
const POSTMAN = { src: '/icons/postman.svg', name: 'Postman' }
const GWS = { src: '/icons/googleworkspace.svg', name: 'Google Workspace' }
const TEAMS = { src: '/icons/microsoftteams.svg', name: 'MS Teams' }
const REMOTION = { src: '/icons/remotion.svg', name: 'Remotion' }
const CANVA = { src: '/icons/canva.svg', name: 'Canva' }

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'Software Engineering',
    marks: [JAVA, MYSQL, VSCODE],
  },
  {
    index: '02',
    title: 'Database & Dev Tools',
    marks: [DBEAVER, POSTMAN, GITHUB],
  },
  {
    index: '03',
    title: 'Community Leadership',
    marks: [GWS, TEAMS],
  },
  {
    index: '04',
    title: 'Multimedia Production',
    marks: [REMOTION, CANVA],
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          Building software, leading tech communities, and exploring cloud computing from Pasig City.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I build structured software and organize tech communities.
            <span> Driven by curiosity, scholarship, and a passion for innovation.</span>
          </p>

          <p className="agrid__note">
            <strong>PUP BSIT Student & Pasig City Scholar</strong>, pursuing a{' '}
            <a className="agrid__link" href="https://www.linkedin.com/in/justinjhonaran">
              career in IT
            </a>{' '}
            — focused on web development, cloud computing, and student leadership
            at the intersection of technology and community.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          {/* One plate, two cells sharing a mark / title / meta anatomy. */}
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark agrid__cell-mark--img">
                <img src="/placeholders/badge.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Pasig City Scholar</span>
                <span className="agrid__cell-meta">BSIT · PUP</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">GMT+8 · Mon–Sat</span>
              </span>
            </span>

            <a className="agrid__cell agrid__cell--wide" href="https://www.linkedin.com/in/justinjhonaran">
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <img src="/placeholders/logo.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">AWS Cloud Club & GDG PUP</span>
                <span className="agrid__cell-meta">Active Member & Associate</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src={profile.hero.portraitSrc}
            alt={profile.hero.portraitAlt}
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
