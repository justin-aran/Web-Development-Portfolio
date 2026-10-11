import { ArrowSquareOut } from '@/components/slab'
import Flagship, { type FlagshipTab } from '@/components/Flagship'
import {
  Globe,
  BookOpen,
  Toolbox,
  Sparkle,
} from '@/components/slab'

// ── OOP Portfolio Showcase Configuration ──

const OOP_PORTFOLIO_TABS: FlagshipTab[] = [
  {
    id: 'oop-live',
    label: 'Live Website',
    type: 'iframe',
    url: 'https://justinaran-oop-eportfolio.netlify.app',
    path: '/',
    caption:
      'Interactive live deployment of the OOP Academic e-Portfolio. Explore course modules, code assessments, laboratory submissions, and academic reflections directly inside the preview.',
    Icon: Globe,
  },
  {
    id: 'oop-coursework',
    label: 'Coursework Overview',
    type: 'image',
    imageSrc: '/academic/oop-proj-1.png',
    path: '#overview',
    caption:
      'E-portfolio welcome overview detailing the course scope, curriculum objectives, and personal academic journey through Object-Oriented Programming.',
    Icon: BookOpen,
  },
  {
    id: 'oop-quizzes',
    label: 'Quizzes & Seatworks',
    type: 'image',
    imageSrc: '/academic/oop-proj-2.png',
    path: '#activities',
    caption:
      'Weekly academic activity log documenting programming challenges, hands-on seatworks, quizzes, and practical exams covering Java OOP paradigms.',
    Icon: Toolbox,
  },
  {
    id: 'oop-reflections',
    label: 'Reflections & Realizations',
    type: 'image',
    imageSrc: '/academic/oop-proj-3.png',
    path: '#reflections',
    caption:
      'In-depth reflections and technical realizations tracing conceptual growth, OOP design principles, and software architecture takeaways across the semester.',
    Icon: Sparkle,
  },
]

export default function ShowcaseGrid() {
  return (
    <section className="pgrid ktools" aria-labelledby="showcase-title">
      <header className="pgrid__head ktools__head">
        <div className="ktools__head-copy">
          <span className="pgrid__eyebrow">Web Development Showcase</span>
          <h1 className="pgrid__title" id="showcase-title">
            Featured Projects & Applications
          </h1>
          <p className="pgrid__lede">
            Live deployed web platforms and academic systems built for the PUP CCIS community. Explore interactive live previews, event countdown timers, and project repositories.
          </p>
        </div>

        <div className="ktools__vote">
          <p className="ktools__vote-label">
            Flagship Project
            <span aria-hidden="true" className="ktools__vote-dot" />
            <span className="ktools__vote-ask">PUP CCIS</span>
          </p>
          <a
            className="ktools__vote-frame ktools__vote-card"
            href="https://afk-2026.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/placeholders/badge.svg" alt="" width="48" height="48" />
            <span className="ktools__vote-text">
              Away From Keyboard (AFK) 2026 · Official Event Website
            </span>
          </a>
        </div>
      </header>

      <div className="home__glass ktools__glass">
        {/* Flagship Build 1: AFK 2026 */}
        <Flagship
          eyebrow="Flagship Build · PUP CCIS Student Council"
          title="AFK 2026: Away From Keyboard"
          desc="The official event website created for the PUP CCIS Student Council's flagship initiative — Away From Keyboard (AFK) 2026. Built to showcase key activities, event schedules, essential announcements, an interactive real-time countdown timer, and streamlined registration features for each activity."
          liveUrl="https://afk-2026.netlify.app/"
          githubUrl="https://github.com/justin-aran/afk-website-2026.git"
          displayUrl="afk-2026.netlify.app"
          showFeedback={false}
        />

        <div className="ktools__divider" aria-hidden="true" />

        {/* Showcase Build 2: OOP Website Portfolio */}
        <Flagship
          eyebrow="Academic E-Portfolio · Object-Oriented Programming"
          title="OOP Website Portfolio"
          desc="A comprehensive personal academic e-portfolio built for Object-Oriented Programming (OOP) coursework at PUP CCIS. Systematically exhibits semester coursework milestones, laboratory exercises, programming quizzes, seatworks, and practical examinations, synthesized with in-depth reflective analyses and technical realizations that chronicle conceptual growth and mastery of OOP paradigms."
          liveUrl="https://justinaran-oop-eportfolio.netlify.app"
          githubUrl="https://github.com/justin-aran/OOP-Portfolio.git"
          displayUrl="justinaran-oop-eportfolio.netlify.app"
          tabs={OOP_PORTFOLIO_TABS}
          showFeedback={false}
        />

        <div className="ktools__divider" aria-hidden="true" />

        {/* Section 3: More Projects Worked On */}
        <div className="showcase-more">
          <header className="showcase-more__head">
            <span className="showcase-more__eyebrow">Academic & Innovation Systems</span>
            <h2 className="showcase-more__title">More Projects I Have Worked On</h2>
            <p className="showcase-more__lede">
              Full-stack database applications, desktop management systems, and corporate innovation solutions.
            </p>
          </header>

          <div className="showcase-more__grid">
            {/* Card 1: Pag-IBIG DB System */}
            <article className="showcase-card">
              <div className="showcase-card__media">
                <img
                  src="/academic/db1.png"
                  alt="Pag-IBIG Housing Loan DB System"
                  className="showcase-card__img"
                  loading="lazy"
                />
              </div>
              <div className="showcase-card__body">
                <div className="showcase-card__header">
                  <div className="showcase-card__badges">
                    <span className="showcase-card__badge">Live Deploy</span>
                    <span className="showcase-card__badge">Database</span>
                    <span className="showcase-card__badge">Full-Stack</span>
                  </div>
                  <h3 className="showcase-card__title">Pag-IBIG Housing Loan DB System</h3>
                </div>
                <p className="showcase-card__desc">
                  Designed and developed a structured database and full-stack information system for Pag-IBIG Housing Loan Applications using DBeaver, Postman, and MySQL Workbench. Deployed live on Vercel.
                </p>
                <div className="showcase-card__actions">
                  <a
                    href="https://pagibig-frontend.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="showcase-card__btn showcase-card__btn--primary"
                  >
                    <span>Live App</span>
                    <ArrowSquareOut size={14} weight="bold" />
                  </a>
                  <a
                    href="https://github.com/justin-aran/pagibig-housing-loan_full-stack.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="showcase-card__btn showcase-card__btn--secondary"
                  >
                    <span>Repository</span>
                    <ArrowSquareOut size={14} weight="bold" />
                  </a>
                </div>
              </div>
            </article>

            {/* Card 2: Student Record System */}
            <article className="showcase-card">
              <div className="showcase-card__media">
                <img
                  src="/academic/oop1.png"
                  alt="Student Record Management System"
                  className="showcase-card__img"
                  loading="lazy"
                />
              </div>
              <div className="showcase-card__body">
                <div className="showcase-card__header">
                  <div className="showcase-card__badges">
                    <span className="showcase-card__badge">Java Swing</span>
                    <span className="showcase-card__badge">MVC / DTO</span>
                    <span className="showcase-card__badge">MySQL</span>
                  </div>
                  <h3 className="showcase-card__title">Student Record Management System</h3>
                </div>
                <p className="showcase-card__desc">
                  A desktop administrative application built for OOP coursework at PUP. Manages student directories, course data tracks, user authentication, dynamic enrollment matrices, and transactional grade metrics.
                </p>
                <div className="showcase-card__actions">
                  <a
                    href="https://github.com/justin-aran/student-management-system.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="showcase-card__btn showcase-card__btn--primary"
                  >
                    <span>View Repository</span>
                    <ArrowSquareOut size={14} weight="bold" />
                  </a>
                </div>
              </div>
            </article>

            {/* Card 3: GTindahan Mode */}
            <article className="showcase-card">
              <div className="showcase-card__media">
                <img
                  src="/academic/gcash1.png"
                  alt="GTindahan Mode (ImaGnation Challenge)"
                  className="showcase-card__img"
                  loading="lazy"
                />
              </div>
              <div className="showcase-card__body">
                <div className="showcase-card__header">
                  <div className="showcase-card__badges">
                    <span className="showcase-card__badge">FinTech</span>
                    <span className="showcase-card__badge">Team maGenta</span>
                    <span className="showcase-card__badge">Innovation</span>
                  </div>
                  <h3 className="showcase-card__title">GTindahan Mode (ImaGnation Challenge)</h3>
                </div>
                <p className="showcase-card__desc">
                  Proposed GTindahan Mode with Team maGenta for the ImaGnation Corporate Innovation Challenge. Features a simplified 4-button storefront, Tanggap Bayad QR with audio prompts, and GLista micro-credit for sari-sari stores.
                </p>
                <div className="showcase-card__actions">
                  <span className="showcase-card__badge">PUP Innovation Proposal</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
