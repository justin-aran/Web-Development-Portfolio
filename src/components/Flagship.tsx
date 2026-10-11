import { useState, useCallback, useEffect, useRef } from 'react'
import {
  ArrowSquareOut,
  House,
  SquaresFour,
  Globe,
  CheckCircle,
  type Icon,
} from '@/components/slab'

// ── Types ──

export type FlagshipTab = {
  id: string
  label: string
  type: 'iframe' | 'image'
  url?: string
  imageSrc?: string
  path?: string
  caption: string
  Icon: Icon
}

export type FlagshipProps = {
  eyebrow?: string
  title?: string
  desc?: string
  liveUrl?: string
  githubUrl?: string
  displayUrl?: string
  tabs?: FlagshipTab[]
  showFeedback?: boolean
}

// ── Default Data: AFK 2026 (Flagship Build) ──

const DEFAULT_AFK_TABS: FlagshipTab[] = [
  {
    id: 'afk-live',
    label: 'Live Website',
    type: 'iframe',
    url: 'https://afk-2026.netlify.app/',
    path: '/',
    caption:
      'Interactive live deployment of the AFK 2026 website running directly within the portfolio. Scroll and interact with the live countdown timer, event schedules, and activity registration modules.',
    Icon: Globe,
  },
  {
    id: 'afk-hero',
    label: 'Hero & Countdown',
    type: 'image',
    imageSrc: '/academic/afk.png',
    path: '#hero',
    caption:
      'Hero section featuring the cyber-themed visual identity for "Away From Keyboard 2026", announcing the flagship student council initiative with an active real-time countdown timer.',
    Icon: House,
  },
  {
    id: 'afk-activities',
    label: 'Activities & Events',
    type: 'image',
    imageSrc: '/academic/afk2.png',
    path: '#activities',
    caption:
      'Comprehensive event directory spotlighting featured activities, workshop schedules, competitive tournament brackets, and vital council announcements.',
    Icon: SquaresFour,
  },
  {
    id: 'afk-registration',
    label: 'Activity Registration',
    type: 'image',
    imageSrc: '/academic/afk3.png',
    path: '#registration',
    caption:
      'Integrated registration portal allowing PUP CCIS students to register for specific activity tracks with instant validation and slot management.',
    Icon: CheckCircle,
  },
]

const AUTO_ADVANCE_MS = 8000

export default function Flagship({
  eyebrow = 'Flagship Build · PUP CCIS',
  title = 'AFK 2026: Away From Keyboard',
  desc = "The official event website created for the PUP CCIS Student Council's flagship initiative — Away From Keyboard (AFK) 2026. Built to showcase key activities, event schedules, essential announcements, an interactive real-time countdown timer, and streamlined registration features for each activity.",
  liveUrl = 'https://afk-2026.netlify.app/',
  githubUrl = 'https://github.com/justin-aran/afk-website-2026.git',
  displayUrl = 'afk-2026.netlify.app',
  tabs = DEFAULT_AFK_TABS,
}: FlagshipProps) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  // Auto-advance only when looking at screenshots to avoid interrupting iframe interaction
  const current = tabs[active] || tabs[0]
  useEffect(() => {
    if (paused || !inView || current.type === 'iframe') return
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % tabs.length)
    }, AUTO_ADVANCE_MS)
    return () => window.clearInterval(id)
  }, [paused, inView, current.type, tabs.length])

  const onTabKey = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault()
        const dir = e.key === 'ArrowRight' ? 1 : -1
        const next = (index + dir + tabs.length) % tabs.length
        setActive(next)
        const buttons = e.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>(
          'button[role="tab"]',
        )
        buttons?.[next]?.focus()
      }
    },
    [tabs.length],
  )

  return (
    <aside className="flagship" aria-labelledby={`flagship-heading-${title.replace(/\s+/g, '-').toLowerCase()}`} ref={ref}>
      <header className="flagship__header">
        <div className="flagship__header-meta">
          <span className="flagship__eyebrow">{eyebrow}</span>
          <h3 className="flagship__title" id={`flagship-heading-${title.replace(/\s+/g, '-').toLowerCase()}`}>
            {title}
          </h3>
        </div>
        <p className="flagship__desc">{desc}</p>
        <div className="flagship__ctas">
          <a
            className="flagship__cta flagship__cta--primary"
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Visit Live Website</span>
            <ArrowSquareOut weight="bold" size={16} aria-hidden="true" />
          </a>
          {githubUrl && (
            <a
              className="flagship__cta flagship__cta--secondary"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View Repository</span>
              <ArrowSquareOut weight="bold" size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      </header>

      <div
        className="flagship__showcase"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="flagship__device">
          <div className="flagship__device-bar">
            <span className="flagship__dot flagship__dot--red" />
            <span className="flagship__dot flagship__dot--amber" />
            <span className="flagship__dot flagship__dot--green" />
            <div className="flagship__device-url">
              <span className="flagship__device-url-host">{displayUrl}</span>
              <span className="flagship__device-url-path">{current.path || ''}</span>
            </div>
            <div className="flagship__device-actions">
              {current.type === 'iframe' ? (
                <span className="flagship__badge-live">
                  <span className="flagship__badge-dot" /> Live Preview
                </span>
              ) : (
                <span className="flagship__badge-screen">Screenshot</span>
              )}
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flagship__device-link"
                title="Open live website in new tab"
              >
                <ArrowSquareOut size={13} weight="bold" />
                <span>Open</span>
              </a>
            </div>
          </div>

          <div className="flagship__device-screen">
            {current.type === 'iframe' ? (
              <iframe
                key={current.id}
                src={current.url}
                title={`${title} - ${current.label}`}
                className="flagship__iframe"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            ) : (
              <div className="flagship__image-wrap" key={current.id}>
                <img
                  src={current.imageSrc}
                  alt={`${title} - ${current.label}`}
                  className="flagship__screenshot"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>

        <div className="flagship__panel">
          <div className="flagship__tabs" role="tablist" aria-label={`${title} views`}>
            {tabs.map((tab, i) => {
              const TabIcon = tab.Icon
              const selected = i === active
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  className={`flagship__tab${selected ? ' is-active' : ''}`}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onTabKey(e, i)}
                >
                  <span className="flagship__tab-icon" aria-hidden="true">
                    <TabIcon size={16} weight="bold" />
                  </span>
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
          <p className="flagship__caption" key={current.id}>
            {current.caption}
          </p>
          <div className="flagship__progress" aria-hidden="true">
            {tabs.map((_, i) => (
              <span
                key={i}
                className={`flagship__progress-bar${i === active ? ' is-active' : ''}${paused || !inView || current.type === 'iframe' ? ' is-paused' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
