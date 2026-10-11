import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'

// ── The method ──

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Discover',
    body: 'I study the problem, research requirements, and plan the architecture.',
    Icon: MagnetStraight,
    chips: ['Requirements Analysis', 'Research', 'Architecture Planning', 'Documentation'],
  },
  {
    index: '02',
    label: 'Build',
    body: 'I develop solutions using Java, MySQL, and modern dev tools with structured workflows.',
    Icon: Timer,
    chips: ['Java & OOP', 'MySQL', 'GitHub', 'Testing'],
  },
  {
    index: '03',
    label: 'Deliver',
    body: 'A polished, documented project ready for presentation or deployment.',
    Icon: Trophy,
    chips: ['Documentation', 'Presentation', 'Deployment'],
  },
]

// ── The services ──

const JAVA = '/icons/java.svg'
const MYSQL = '/icons/mysql.svg'
const VSCODE = '/icons/vscode.svg'
const GITHUB = '/icons/ai/github.svg'
const DBEAVER = '/icons/dbeaver.svg'
const POSTMAN = '/icons/postman.svg'
const CANVA = '/icons/canva.svg'
const CAPCUT = '/icons/capcut.svg'
const REMOTION = '/icons/remotion.svg'
const NOTION = '/icons/notion.svg'
const GWS = '/icons/googleworkspace.svg'
const OFFICE = '/icons/microsoftoffice.svg'
const TEAMS = '/icons/microsoftteams.svg'

type Service = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  bullets: string[]
}

const BULLETS_DEV = ['OOP paradigms & clean code', 'MVC architecture', 'MySQL database design']
const BULLETS_CLOUD = ['Database & API testing', 'DBeaver & Workbench', 'Postman integration']
const BULLETS_LEAD = ['Event coordination', 'Partnership outreach', 'Student advocacy']
const BULLETS_MEDIA = ['Video production & editing', 'Scriptwriting & PRDs', 'Graphic design']
const BULLETS_ADMIN = ['Office suite mastery', 'Records management', 'Report compilation']

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'Software Engineering',
    description: 'Java desktop applications with OOP paradigms, MVC architecture, and MySQL databases.',
    chip: 'Development',
    logos: [JAVA, MYSQL, VSCODE],
    bullets: BULLETS_DEV,
  },
  {
    index: '02',
    title: 'Languages & Databases',
    description: 'Relational database schema modeling, queries, and API testing with DBeaver & Postman.',
    chip: 'Database',
    logos: [DBEAVER, POSTMAN, GITHUB],
    bullets: BULLETS_CLOUD,
  },
  {
    index: '03',
    title: 'Community Leadership',
    description: 'Organizing tech events, building partnerships, and driving student innovation at PUP.',
    chip: 'Leadership',
    logos: [GWS, TEAMS, NOTION],
    bullets: BULLETS_LEAD,
  },
  {
    index: '04',
    title: 'Multimedia Production',
    description: 'Video editing, course scriptwriting, and graphic design with Remotion, CapCut & Canva.',
    chip: 'Media',
    logos: [REMOTION, CAPCUT, CANVA],
    bullets: BULLETS_MEDIA,
  },
  {
    index: '05',
    title: 'Admin & Secretariat',
    description: 'Records management, service report compilation, and administrative coordination.',
    chip: 'Admin',
    logos: [OFFICE, GWS, NOTION],
    bullets: BULLETS_ADMIN,
  },
]

function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          What I Bring to the Table
        </h1>
        <p className="pgrid__lede">
          From software development to community leadership — here is how I create impact.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        {/* Method plate */}
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">My Approach</span>
            <h2 className="sgrid__method-title" id="method-title">
              Discover. Build.
              <br />
              <span>Deliver results.</span>
            </h2>
            <p className="sgrid__method-sub">
              A structured approach to every project, from academic software to community events.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Skills & capabilities */}
        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">Skills & capabilities.</h2>
            <p className="sgrid__offers-sub">Explore what I can do.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 05</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
