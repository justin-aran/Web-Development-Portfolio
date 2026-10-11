export type AppStat = { value: string; label: string }

export type AppProject = {
  name: string
  tagline: string
  description: string
  /** Optional - omit for gradient placeholder cards */
  imageSrc?: string
  /** CSS object-position override. Defaults to 'top center'. */
  imagePosition?: string
  /** External brand color - not a site token. Passed via --app-color inline prop. */
  accentColor: string
  stats: AppStat[]
  badge: string
  link?: string
  linkText?: string
  github?: string
}

/** @deprecated use AppProject */
export type MobileApp = AppProject

/**
 * Justin's projects with academic project screenshots and live repository / deployment links.
 */

export const mobileApps: MobileApp[] = [
  {
    name: 'Student Record Management System',
    tagline: 'Desktop admin app built with Java Swing & MySQL.',
    description: 'A desktop-based administrative application for managing student information directories, course data tracks, user authentication profiles, dynamic academic enrollment matrices, and transactional grade metrics through a structured, centralized digital architecture applying MVC and DTO patterns.',
    imageSrc: '/academic/oop1.png',
    imagePosition: '50% 30%',
    accentColor: '#2563EB',
    stats: [
      { value: 'Java', label: 'Language' },
      { value: 'MVC', label: 'Architecture' },
      { value: 'MySQL', label: 'Database' },
    ],
    badge: 'OOP / Java',
    github: 'https://github.com/justin-aran/student-management-system.git',
    link: 'https://github.com/justin-aran/student-management-system.git',
    linkText: 'View Repository',
  },
  {
    name: 'Pag-IBIG Housing Loan DB System',
    tagline: 'Full-stack database & information system with live Vercel deployment.',
    description: 'Designed and developed a structured database and information system for Pag-IBIG Housing Loan Applications. Built and tested with DBeaver, Postman, and MySQL Workbench, deployed live on Vercel.',
    imageSrc: '/academic/db1.png',
    accentColor: '#7C3AED',
    stats: [
      { value: 'Vercel', label: 'Live Deploy' },
      { value: 'MySQL', label: 'Database' },
      { value: 'Postman', label: 'API Testing' },
    ],
    badge: 'Full-Stack / DB',
    link: 'https://pagibig-frontend.vercel.app/',
    linkText: 'Live Vercel App',
    github: 'https://github.com/justin-aran/pagibig-housing-loan_full-stack.git',
  },
  {
    name: 'GTindahan Mode (ImaGnation Challenge)',
    tagline: 'Team maGenta: Empowering older NMSME merchants via simplified GCash ecosystem.',
    description: 'Proposed GTindahan Mode with Team maGenta for the ImaGnation Corporate Innovation Challenge. Features a simplified 4-button storefront, Tanggap Bayad QR with audio, automatic load promos, and GLista micro-credit for sari-sari stores.',
    imageSrc: '/academic/gcash1.png',
    accentColor: '#005CE6',
    stats: [
      { value: 'PUP', label: 'Team maGenta' },
      { value: 'FinTech', label: 'Innovation' },
      { value: 'NMSME', label: 'Inclusion' },
    ],
    badge: 'ImaGnation / FinTech',
  },
]

export const webApps: AppProject[] = [
  {
    name: 'AFK 2026: Away From Keyboard',
    tagline: 'Student Council flagship event website with live countdown & registration.',
    description: 'The official event website created for PUP CCIS Student Council\'s flagship initiative — Away From Keyboard (AFK) 2026. Features activity listings, schedules, real-time countdown timer, and activity registration.',
    imageSrc: '/academic/afk.png',
    accentColor: '#3B82F6',
    stats: [
      { value: 'Netlify', label: 'Live Deploy' },
      { value: 'Council', label: 'Flagship' },
      { value: '2026', label: 'Event' },
    ],
    badge: 'Flagship Web',
    link: 'https://afk-2026.netlify.app/',
    linkText: 'Live Website',
    github: 'https://github.com/justin-aran/afk-website-2026.git',
  },
  {
    name: 'OOP Website Portfolio',
    tagline: 'Academic e-portfolio documenting OOP coursework & technical reflections.',
    description: 'A comprehensive academic e-portfolio built for Object-Oriented Programming (OOP) coursework at PUP CCIS. Displays coursework activities, quizzes, seatworks, practical exams, reflections, and technical realizations.',
    imageSrc: '/academic/oop-proj-1.png',
    accentColor: '#10B981',
    stats: [
      { value: 'Netlify', label: 'Live Deploy' },
      { value: 'OOP', label: 'Java/Web' },
      { value: 'Academic', label: 'Portfolio' },
    ],
    badge: 'Academic Web',
    link: 'https://justinaran-oop-eportfolio.netlify.app',
    linkText: 'Live Portfolio',
    github: 'https://github.com/justin-aran/OOP-Portfolio.git',
  },
  {
    name: 'Apex Human Platform',
    tagline: 'Multimedia & course production at ED3Nventures.',
    description: 'Contributed to the Apex Human project by writing course scripts, drafting PRDs in Markdown, assisting in video production, and editing graphic-heavy videos using VS Code and Remotion.',
    accentColor: '#0EA5E9',
    stats: [
      { value: 'Remotion', label: 'Video' },
      { value: 'MD', label: 'Documentation' },
      { value: 'CapCut', label: 'Editing' },
    ],
    badge: 'Intern Project',
  },
  {
    name: 'TEDx PUP: Love at First Idea',
    tagline: 'Led audience & partner relations for TEDx.',
    description: 'Served as Relations Committee Co-Head for TEDx PUP, managing audience relations, partner coordination, guest logistics, and communications for the flagship event.',
    accentColor: '#EF4444',
    stats: [
      { value: 'Co-Head', label: 'Relations' },
      { value: '2026', label: 'Year' },
      { value: 'TEDx', label: 'Brand' },
    ],
    badge: 'Leadership',
  },
  {
    name: 'AFK 2025: Fresh Kickstart',
    tagline: 'Linkages co-head for PUP CCIS event.',
    description: 'Coordinated external partnerships, event sponsors, and organizational linkages as Linkages Committee Co-Head for AFK 2025: A Fresh Kickstart with PUP CCIS.',
    imageSrc: '/placeholders/project-3.jpg',
    accentColor: '#0891B2',
    stats: [
      { value: 'Co-Head', label: 'Linkages' },
      { value: '2025', label: 'Year' },
      { value: 'CCIS', label: 'College' },
    ],
    badge: 'Event',
  },
  {
    name: 'GDG PUP Events',
    tagline: 'Event usher & registration for GDG on Campus.',
    description: 'Facilitated guest registration for SparkFest 2025 and guided attendees as an Event Marshal for Build with AI, supporting Google Developer Groups on Campus at PUP.',
    imageSrc: '/placeholders/project-4.jpg',
    accentColor: '#F59E0B',
    stats: [
      { value: 'GDG', label: 'Community' },
      { value: '2025', label: 'Year' },
      { value: 'Google', label: 'Partner' },
    ],
    badge: 'Community',
  },
]
