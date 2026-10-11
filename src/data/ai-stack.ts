import {
  Sparkle,
  Coffee,
  Robot,
  Article,
  FilmSlate,
  Database,
  Code,
  MagnifyingGlass,
  FlowArrow,
  Palette,
  Browser,
  Broadcast,
  Desktop,
} from '@/components/slab'
import type { Icon } from '@/components/slab'
import { profile } from '@/data/profile'

export type StackStatus = 'Live' | 'Internal' | 'Beta'

export type StackLogo = { src: string; name: string }

export type StackNode = {
  id: string
  name: string
  what: string
  stack?: string
  status?: StackStatus
  Icon: Icon
  logos?: StackLogo[]
  children?: StackNode[]
}

const JAVA_LOGO: StackLogo = { src: '/icons/java.svg', name: 'Java' }
const MYSQL_LOGO: StackLogo = { src: '/icons/mysql.svg', name: 'MySQL' }
const GITHUB_LOGO: StackLogo = { src: '/icons/ai/github.svg', name: 'GitHub' }
const VSCODE_LOGO: StackLogo = { src: '/icons/vscode.svg', name: 'VS Code' }
const POSTMAN_LOGO: StackLogo = { src: '/icons/postman.svg', name: 'Postman' }
const DBEAVER_LOGO: StackLogo = { src: '/icons/dbeaver.svg', name: 'DBeaver' }
const FIGMA_LOGO: StackLogo = { src: '/icons/figma.svg', name: 'Figma' }
const CANVA_LOGO: StackLogo = { src: '/icons/canva.svg', name: 'Canva' }
const NOTION_LOGO: StackLogo = { src: '/icons/notion.svg', name: 'Notion' }
const GWS_LOGO: StackLogo = { src: '/icons/googleworkspace.svg', name: 'Google Workspace' }
const OFFICE_LOGO: StackLogo = { src: '/icons/microsoftoffice.svg', name: 'Microsoft Office' }
const TEAMS_LOGO: StackLogo = { src: '/icons/microsoftteams.svg', name: 'MS Teams' }
const REMOTION_LOGO: StackLogo = { src: '/icons/remotion.svg', name: 'Remotion' }

export const aiStack: StackNode = {
  id: 'root',
  Icon: Sparkle,
  name: profile.name,
  what: 'Aspiring Web Developer & IT Professional specializing in software engineering, databases, and multimedia.',
  stack: 'PUP BSIT · Pasig City Scholar',
  children: [
    {
      id: 'software-engineering',
      Icon: Robot,
      name: 'Software Engineering & Architecture',
      what: 'Foundational architectural paradigms for robust, maintainable, and scalable digital solutions.',
      stack: 'OOP · MVC · DTO Flow',
      status: 'Live',
      children: [
        {
          id: 'oop-paradigms',
          Icon: Coffee,
          logos: [JAVA_LOGO],
          name: 'OOP Paradigms',
          what: 'Encapsulation, inheritance, abstraction, and runtime polymorphism implemented in Java.',
          stack: 'Java · OOP',
          status: 'Live',
        },
        {
          id: 'mvc-architecture',
          Icon: FlowArrow,
          logos: [VSCODE_LOGO],
          name: 'MVC Architecture',
          what: 'Model-View-Controller design separating presentation, business logic, and database operations.',
          stack: 'MVC Pattern · Java',
          status: 'Live',
        },
        {
          id: 'dto-design',
          Icon: Article,
          logos: [VSCODE_LOGO],
          name: 'DTO Design Flow',
          what: 'Structured Data Transfer Object flow ensuring decoupled data transactions across system tiers.',
          stack: 'DTO Pattern',
          status: 'Live',
        },
      ],
    },
    {
      id: 'languages-databases',
      Icon: Database,
      name: 'Languages & Databases',
      what: 'Core programming languages and relational database systems for enterprise application development.',
      stack: 'Java · MySQL · SQL · COBOL',
      status: 'Live',
      children: [
        {
          id: 'java-lang',
          Icon: Coffee,
          logos: [JAVA_LOGO],
          name: 'Java (Swing & Core)',
          what: 'Desktop application development with graphical user interfaces (Swing) and modular logic.',
          stack: 'Java · JDK',
          status: 'Live',
        },
        {
          id: 'mysql-sql',
          Icon: Database,
          logos: [MYSQL_LOGO],
          name: 'MySQL & SQL',
          what: 'Relational database modeling, complex queries, stored procedures, and localized servers.',
          stack: 'MySQL · SQL',
          status: 'Live',
        },
        {
          id: 'cobol-lang',
          Icon: Code,
          logos: [VSCODE_LOGO],
          name: 'COBOL',
          what: 'Foundational procedural language training for legacy computing and structured transaction data.',
          stack: 'COBOL · Academic',
          status: 'Live',
        },
      ],
    },
    {
      id: 'dev-tools-workflows',
      Icon: Code,
      name: 'Development Tools & Workflows',
      what: 'Modern developer toolchain supporting version control, API testing, and database administration.',
      stack: 'VS Code · GitHub · DBeaver · Postman · Workbench',
      status: 'Live',
      children: [
        {
          id: 'vscode-github',
          Icon: FlowArrow,
          logos: [VSCODE_LOGO, GITHUB_LOGO],
          name: 'VS Code & GitHub',
          what: 'Code editing, Git version control, branching strategies, and repository collaboration.',
          stack: 'Git · GitHub · VS Code',
          status: 'Live',
        },
        {
          id: 'dbeaver-workbench',
          Icon: Database,
          logos: [DBEAVER_LOGO, MYSQL_LOGO],
          name: 'DBeaver & MySQL Workbench',
          what: 'Visual database administration, ERD schema design, and SQL query execution.',
          stack: 'DBeaver · Workbench',
          status: 'Live',
        },
        {
          id: 'postman-api',
          Icon: MagnifyingGlass,
          logos: [POSTMAN_LOGO],
          name: 'Postman API Testing',
          what: 'RESTful endpoint validation, HTTP request testing, and backend service verification.',
          stack: 'Postman · REST',
          status: 'Live',
        },
        {
          id: 'notion-overleaf',
          Icon: Article,
          logos: [NOTION_LOGO],
          name: 'Notion & Overleaf',
          what: 'Technical documentation, project roadmaps, PRD management, and LaTeX academic publishing.',
          stack: 'Notion · Overleaf · LaTeX',
          status: 'Live',
        },
      ],
    },
    {
      id: 'web-design',
      Icon: Palette,
      name: 'Web & Graphic Design',
      what: 'Responsive front-end development combined with intermediate graphic and UI prototype design.',
      stack: 'HTML5 · CSS3 · Figma · Canva',
      status: 'Live',
      children: [
        {
          id: 'html-css',
          Icon: Browser,
          name: 'HTML & CSS',
          what: 'Semantic web markup, responsive design layouts, modern CSS styling, and web components.',
          stack: 'HTML5 · CSS3',
          status: 'Live',
        },
        {
          id: 'figma-canva',
          Icon: Palette,
          logos: [FIGMA_LOGO, CANVA_LOGO],
          name: 'Figma & Canva',
          what: 'UI/UX interface prototyping, marketing assets, social media branding, and event publication materials.',
          stack: 'Figma · Canva',
          status: 'Live',
        },
      ],
    },
    {
      id: 'multimedia-production',
      Icon: Broadcast,
      name: 'Multimedia Production',
      what: 'Full-cycle video production, programmatic motion graphics, scriptwriting, and PRD specifications.',
      stack: 'CapCut · Remotion · Scriptwriting · PRDs',
      status: 'Live',
      children: [
        {
          id: 'video-editing',
          Icon: FilmSlate,
          logos: [REMOTION_LOGO],
          name: 'CapCut & Remotion',
          what: 'Video editing in CapCut alongside code-driven programmatic video rendering in Remotion.',
          stack: 'CapCut · Remotion · TypeScript',
          status: 'Live',
        },
        {
          id: 'scriptwriting-prds',
          Icon: Article,
          name: 'Scriptwriting & PRDs',
          what: 'Course scriptwriting for educational platforms and detailed Product Requirement Documents (PRDs).',
          stack: 'Markdown · PRD Writing',
          status: 'Live',
        },
      ],
    },
    {
      id: 'productivity-platforms',
      Icon: Desktop,
      name: 'Productivity & Platforms',
      what: 'Enterprise office tools, collaboration suites, and remote meeting platforms.',
      stack: 'Microsoft Office · Google Workspace · Zoom · Teams',
      status: 'Live',
      children: [
        {
          id: 'office-gws',
          Icon: Article,
          logos: [OFFICE_LOGO, GWS_LOGO],
          name: 'MS Office & Google Workspace',
          what: 'Documentation, spreadsheet tracking, administrative service reports, and collaborative workspaces.',
          stack: 'Office 365 · Google Workspace',
          status: 'Live',
        },
        {
          id: 'collaboration-meeting',
          Icon: Desktop,
          logos: [TEAMS_LOGO],
          name: 'Teams, Zoom & Meet',
          what: 'Virtual coordination, student council assemblies, technical live streaming, and committee operations.',
          stack: 'Teams · Zoom · Google Meet',
          status: 'Live',
        },
      ],
    },
  ],
}
