import { useMemo } from 'react'

type Tool = {
  name: string
  iconPath: string
  color?: string
}

// ── Daily Drivers: Tools Justin actually works with ──
const TOOLS: Tool[] = [
  { name: 'Java', iconPath: '/icons/java.svg' },
  { name: 'MySQL', iconPath: '/icons/mysql.svg', color: '#4479A1' },
  { name: 'VS Code', iconPath: '/icons/vscode.svg' },
  { name: 'GitHub', iconPath: '/icons/ai/github.svg', color: '#181717' },
  { name: 'DBeaver', iconPath: '/icons/dbeaver.svg', color: '#382923' },
  { name: 'Postman', iconPath: '/icons/postman.svg', color: '#FF6C37' },
  { name: 'Figma', iconPath: '/icons/figma.svg', color: '#F24E1E' },
  { name: 'Canva', iconPath: '/icons/canva.svg', color: '#00C4CC' },
  { name: 'Notion', iconPath: '/icons/notion.svg', color: '#000000' },
  { name: 'Overleaf', iconPath: '/icons/overleaf.svg', color: '#47A141' },
  { name: 'CapCut', iconPath: '/icons/capcut.svg', color: '#000000' },
  { name: 'Remotion', iconPath: '/icons/remotion.svg' },
  { name: 'Google Workspace', iconPath: '/icons/googleworkspace.svg' },
  { name: 'Microsoft Office', iconPath: '/icons/microsoftoffice.svg' },
  { name: 'MS Teams', iconPath: '/icons/microsoftteams.svg' },
  { name: 'Zoom', iconPath: '/icons/zoom.svg', color: '#2D8CFF' },
  { name: 'HTML & CSS', iconPath: '/icons/html5.svg' },
]

export default function ToolsMarquee() {
  const doubled = useMemo(() => [...TOOLS, ...TOOLS], [])

  return (
    <section className="tools-marquee" aria-label="Tools I work with" data-reveal>
      <div className="tools-marquee__track" aria-hidden="true">
        {doubled.map((tool, i) => {
          const useMask = tool.iconPath.endsWith('.svg') && !!tool.color
          return (
            <div key={`${tool.name}-${i}`} className="tools-marquee__item">
              <span className="tools-marquee__tile">
                {useMask ? (
                  <span
                    className="tools-marquee__icon"
                    style={{
                      ['--icon-url' as string]: `url('${tool.iconPath}')`,
                      ['--brand-color' as string]: tool.color ?? 'var(--navy)',
                    }}
                  />
                ) : (
                  <img
                    className="tools-marquee__img"
                    src={tool.iconPath}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    width={20}
                    height={20}
                  />
                )}
              </span>
              <span className="tools-marquee__label">{tool.name}</span>
            </div>
          )
        })}
      </div>

      <ul className="sr-only">
        {TOOLS.map((t) => (
          <li key={t.name}>{t.name}</li>
        ))}
      </ul>
    </section>
  )
}
