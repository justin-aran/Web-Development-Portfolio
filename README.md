# Justin Jhon Trio Aran — Portfolio

Hi, I'm Justin — an aspiring web developer and IT professional from Pasig City, Philippines.

**Live site:** [https://justin-aran-portfolio.vercel.app](https://justin-aran-portfolio.vercel.app)

I'm a BSIT student at the Polytechnic University of the Philippines (PUP) and a Pasig City Scholar. My work sits where software, community, and communication meet: I build academic systems in Java and MySQL, ship small web projects, help run student tech events, and produce the occasional video or graphic along the way.

This site is where I keep all of it — the projects I've built, the organizations I've worked with, the skills I'm developing, and the ways to reach me.

## What's on the site

| Page | What you'll find |
|---|---|
| **Home** | A quick index of my work, skills, credentials, and services in one bento layout |
| **Projects** | Academic software, deployed web apps, internships, and community work |
| **Services** | Software engineering, databases, community leadership, multimedia, and admin support |
| **Showcase** | Event and organization work with TEDx PUP, AFK, GDG PUP, AWS Cloud Club, SK Pinagbuhatan, ED3Nventures, and Inko |
| **Testimonials** | Endorsements from active engagements — publishing soon |
| **About** | My background as a PUP BSIT student, Pasig City Scholar, and student leader |
| **Contact** | FAQs, direct email, and a message form |

The desktop layout uses a fixed profile rail, an animated contour background, and a bento home screen. Below 1100px it becomes an app-style phone layout with a floating tab bar. Light and dark themes are both supported.

## Selected work

**Student Record Management System** — A Java Swing and MySQL desktop admin app for student directories, course data, enrollment, authentication, and grades, built with MVC and DTO patterns.

**Pag-IBIG Housing Loan DB System** — A full-stack database and information system for housing loan applications, built with MySQL and tested with Postman and DBeaver. Live on Vercel.

**GTindahan Mode** — An ImaGnation Corporate Innovation Challenge concept with Team maGenta: a simplified GCash storefront for older sari-sari store owners, including QR payments, load promos, and micro-credit.

**AFK 2026: Away From Keyboard** — The PUP CCIS Student Council flagship event website, with schedules, a live countdown, and activity registration. Deployed on Netlify.

**OOP Website Portfolio** — An academic e-portfolio documenting my Object-Oriented Programming coursework, activities, and reflections at PUP CCIS.

## Beyond code

I've served as Relations Committee Co-Head for **TEDx PUP: Love at First Idea**, Linkages Committee Co-Head for **AFK 2025: Fresh Kickstart**, and part of the Secretariat, Ways, and Partnership Committees of the **PUP CCIS Student Council**. I'm also an active member of **AWS Cloud Club PUP** and **GDG PUP**, and I've worked with **SK Pinagbuhatan**, **ED3Nventures**, and **Inko**.

## Built with

Vite 6, React 19, TypeScript, plain CSS custom properties, Three.js, GSAP, Lenis, React Router 7, Phosphor icons, and Poppins.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build to dist/
npm run lint       # ESLint
```

Deploys are built with `npm run build` and served from `dist/`.

## Project structure

```text
src/
  components/   page sections, shell, rail, phone layout
  data/         profile, projects, showcase, skills, FAQs
  hooks/        Lenis, media queries, scroll reveal, dismiss
  lib/          contact, theme, accessibility, performance
  styles/       tokens, page styles, phone layout, performance tiers
  views/        Projects, Services, Showcase routes
public/         photos, logos, project shots, showcase pages
scripts/        thumbnail and placeholder generators
```

## Editing content

| What | Where |
|---|---|
| Name, handle, photo, email, socials, Home headline, phone stats | `src/data/profile.ts` |
| Projects, apps, internships, leadership entries | `src/data/projects.ts` |
| Showcase pages and gallery entries | `src/data/funnels.ts` |
| Skills and tools tree | `src/data/ai-stack.ts` |
| Contact FAQs | `src/data/faqs.ts` |
| Page headlines and copy | top of each component in `src/components/` and `src/views/` |
| Colors and design tokens | `src/styles/tokens.css` |
| SEO, share image, favicon | `index.html`, `public/favicon.svg` |
| Contact form behavior | `src/lib/contact.ts` (opens the visitor's email app unless `VITE_CONTACT_ENDPOINT` is set) |
| Privacy / Terms | `src/components/Privacy.tsx`, `src/components/ToS.tsx` |

### Adding a showcase page

1. Put the page's HTML in `public/funnels/` (single pages, shown 16:9) or `public/samples/` (full websites, shown 3:4).
2. Add an entry to `src/data/funnels.ts`.
3. Run `node scripts/make-thumbs.mjs` to render the thumbnails. It uses the Playwright install from the dev dependencies (run `npx playwright install chromium` once if needed).

To regenerate the placeholder pages: `node scripts/make-placeholder-sites.mjs`.

## Technical notes

- The contour shader measures the visitor's frame rate and steps down on slow machines (`src/lib/perf.ts`). Keep large `backdrop-filter` blurs off the layers above it — blur over an animated canvas is the most expensive thing on the page.
- From 1100px down, the site switches to the phone layout. `src/styles/mobile-app.css` owns its components (`TabBar`, `QuickMenu`, `HomeMobile`); `src/styles/mobile-pass.css` holds the motion and native-feel fixes. Everything respects `prefers-reduced-motion` and the site's own Reduce motion switch.
- Anything new above the fold on Home must join the intro hold-back list in `src/styles/boot.css`, or it will show through the intro animation.

## Credits

- Contour background technique inspired by the landonorris.com site by OFF+BRAND. The simplex noise is Ashima Arts / Ian McEwan (MIT).
- Icons: [Phosphor](https://phosphoricons.com) (MIT). Tool logos in `public/icons/` are trademarks of their owners.
- Font: Poppins (SIL Open Font License).
- Site foundation: [BrewedOps portfolio template](https://github.com/brewed-ops/portfolio-template).

## License

The site is built on a licensed foundation. See [LICENSE](LICENSE) for the PolyForm Noncommercial 1.0.0 terms and the required notice.
