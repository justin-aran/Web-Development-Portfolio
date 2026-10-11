import { Component, useEffect, useState, type ReactNode } from 'react'
import { Ticket, Robot, FlowArrow, type Icon } from '@/components/slab'
import { lazy, Suspense } from 'react'
import WorkflowSamples from './WorkflowSamples'
import AIStackGrid from './AIStackGrid'
import { AppsSection } from './Projects'
import { useFunnelModal } from './FunnelModal'
import { websiteFunnel } from '@/data/funnels'

const FunnelBarrel = lazy(() => import('./FunnelBarrel'))

/**
 * What the Projects dialogs show. Each panel is the work itself, on screen
 * the moment the dialog opens - no section chrome to read past and no second
 * dialog to click into.
 */

/** Only the strip of macOS windows, drifting on the backdrop. No window. */
export function AutomationsPanel() {
  return (
    <div className="ppanel ppanel--strip">
      <WorkflowSamples />
    </div>
  )
}

/** A plain mac window with a scrolling body, for the sections that are
 *  pages rather than frames. */
function SectionWindow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="ppanel ppanel--window">
      <div className="ppanel__bar">
        <span className="ppanel__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="ppanel__url">
          <span className="ppanel__url-host">{label}</span>
        </span>
      </div>
      <div className="ppanel__scroll">{children}</div>
    </div>
  )
}

class BarrelErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  state = { hasError: false }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}

function BarrelFallback({ funnels, onOpen }: { funnels: typeof websiteFunnel; onOpen: (f: typeof websiteFunnel[0]) => void }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
        padding: '36px 24px',
        overflowY: 'auto',
        maxHeight: '80vh',
        width: '100%',
      }}
    >
      {funnels.map((f) => (
        <button
          key={f.file}
          type="button"
          onClick={() => onOpen(f)}
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '14px',
            overflow: 'hidden',
            cursor: 'pointer',
            textAlign: 'left',
            padding: '12px',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {f.imageSrc && (
            <img
              src={f.imageSrc}
              alt={f.label}
              style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px' }}
            />
          )}
          <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase' }}>
            {f.tag}
          </span>
          <span style={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>
            {f.label}
          </span>
        </button>
      ))}
    </div>
  )
}

/** Only the barrel, spinning on the backdrop. Its own page preview still
 *  stacks above (z 9000). */
export function BarrelPanel() {
  const { openFull, modal } = useFunnelModal()
  return (
    <div className="ppanel ppanel--barrel">
      <BarrelErrorBoundary fallback={<BarrelFallback funnels={websiteFunnel} onOpen={openFull} />}>
        <Suspense fallback={<div className="funnels__barrel-skeleton" aria-hidden="true" />}>
          <FunnelBarrel funnels={websiteFunnel} onOpen={openFull} />
        </Suspense>
      </BarrelErrorBoundary>
      {modal}
    </div>
  )
}

/** The systems as a logo-first grid, in a scrolling window. */
export function AIWindow() {
  return (
    <SectionWindow label="Your systems">
      <AIStackGrid />
    </SectionWindow>
  )
}
export function AppsWindow() {
  return (
    <SectionWindow label="Experience & Internships">
      <AppsSection />
    </SectionWindow>
  )
}

function FrameBar({ host, path }: { host: string; path: string }) {
  return (
    <div className="ppanel__bar">
      <span className="ppanel__dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="ppanel__url">
        <span className="ppanel__url-host">{host}</span>
        <span className="ppanel__url-path">{path}</span>
      </span>
    </div>
  )
}

/** The plan document, full height, straight away. */
export function PlanPanel() {
  return (
    <div className="ppanel ppanel--frame">
      <FrameBar
        host="yourdomain.com"
        path="/sample-plan"
      />
      <LiveFrame src="/placeholders/sample-plan.html" title="Sample document" />
    </div>
  )
}

type Build = {
  id: string
  label: string
  src?: string
  externalUrl?: string
  githubUrl?: string
  host: string
  path: string
  Icon: Icon
  images?: string[]
  description?: string
}

const BUILDS: Build[] = [
  {
    id: 'ticketing',
    label: 'Student Record Management System',
    githubUrl: 'https://github.com/justin-aran/student-management-system.git',
    host: 'github.com',
    path: '/justin-aran/student-management-system',
    Icon: Ticket,
    images: ['/academic/oop1.png', '/academic/oop2.png'],
    description: 'Java Swing desktop-based administrative application using localized MySQL database server and modular MVC & DTO design architecture.',
  },
  {
    id: 'framework',
    label: 'Pag-IBIG Housing Loan DB System',
    externalUrl: 'https://pagibig-frontend.vercel.app/',
    githubUrl: 'https://github.com/justin-aran/pagibig-housing-loan_full-stack.git',
    host: 'pagibig-frontend.vercel.app',
    path: '/',
    Icon: Robot,
    src: 'https://pagibig-frontend.vercel.app/',
    images: ['/academic/db1.png', '/academic/db2.png'],
    description: 'Designed and developed a structured database and full-stack information system for Pag-IBIG Housing Loan Applications, tested with DBeaver, Postman, and MySQL Workbench.',
  },
  {
    id: 'workflow',
    label: 'GTindahan Mode (ImaGnation Challenge)',
    host: 'imaGnation.challenge',
    path: '/team-magenta',
    Icon: FlowArrow,
    images: ['/academic/gcash1.png', '/academic/gcash2.png'],
    description: 'Team maGenta proposal: Empowering older NMSME merchants via simplified GCash ecosystem with 4-button storefront, QR audio payments, auto-load promos, and GLista credit.',
  },
]

/** One build, framed, open on arrival. */
function BuildPanel({ build }: { build: Build }) {
  return (
    <div className="ppanel ppanel--frame">
      <div className="ppanel__bar">
        <span className="ppanel__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="ppanel__url">
          <span className="ppanel__url-host">{build.host}</span>
          <span className="ppanel__url-path">{build.path}</span>
        </span>
        {build.externalUrl && (
          <a
            className="ppanel__ext"
            href={build.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Live
            <span aria-hidden="true">↗</span>
          </a>
        )}
        {build.githubUrl && (
          <a
            className="ppanel__ext"
            href={build.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: 'var(--navy)' }}
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
      {build.src ? (
        <LiveFrame src={build.src} title={build.label} />
      ) : (
        <div
          className="ppanel__stage"
          style={{
            overflowY: 'auto',
            padding: 'clamp(20px, 3vh, 32px)',
            background: 'var(--cream)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px' }}>
              {build.label}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6, marginBottom: '16px' }}>
              {build.description}
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {build.externalUrl && (
                <a
                  className="app-card__cta"
                  href={build.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Live App ↗
                </a>
              )}
              {build.githubUrl && (
                <a
                  className="app-card__cta"
                  href={build.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: 'var(--navy)' }}
                >
                  View GitHub Repository ↗
                </a>
              )}
            </div>
          </div>
          {build.images && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px', marginTop: '8px' }}>
              {build.images.map((img, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid var(--line)',
                    boxShadow: '0 8px 24px -12px rgba(6, 12, 26, 0.2)',
                    background: '#fff',
                  }}
                >
                  <img src={img} alt={`${build.label} preview ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
export const TicketingPanel = () => <BuildPanel build={BUILDS[0]} />
export const FrameworkPanel = () => <BuildPanel build={BUILDS[1]} />
export const WorkflowPanel = () => <BuildPanel build={BUILDS[2]} />

/** Matches `pmodal-panel` (420ms). Same-site frames share the portfolio's
 *  main thread, so loading one mid-animation stalled the open by 100ms+. */
const FRAME_DELAY_MS = 440

function LiveFrame({ src, title }: { src: string; title: string }) {
  const [ready, setReady] = useState(false)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), FRAME_DELAY_MS)
    return () => window.clearTimeout(id)
  }, [])
  return (
    <div className="ppanel__stage">
      {!ready && <div className="ppanel__skeleton" aria-hidden="true" />}
      {mounted && <iframe
        className="ppanel__iframe"
        src={src}
        title={title}
        loading="eager"
        onLoad={() => setReady(true)}
        data-ready={ready ? 'true' : 'false'}
      />}
    </div>
  )
}
