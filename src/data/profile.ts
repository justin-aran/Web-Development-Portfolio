/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline. Every value below is a PLACEHOLDER.
 * Replace the text, or hand this file to your AI assistant and tell it what
 * to put in each field.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

import { SealCheck, Clock, GraduationCap, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  phone: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Justin Jhon Trio Aran',
  firstName: 'Justin',
  handle: '@justinaran',
  role: 'Aspiring Web Developer & IT Professional',
  avatarSrc: '/main.png',
  verifiedLabel: 'Pasig City Scholar · PUP BSIT',
  email: 'justinaran56@gmail.com',
  phone: '(0997) 772-0517',
  location: 'Pasig City, Philippines',
  stats: [
    { value: 'BSIT', label: 'PUP Student', Icon: GraduationCap },
    { value: 'Scholar', label: 'Pasig City', Icon: SealCheck },
    { value: 'GMT+8', label: 'Philippines', Icon: Clock },
  ],
  displayName: { line1: 'Build. Lead.', line2: 'Innovate.' },
  hero: {
    body: 'Aspiring web developer, cloud enthusiast, and tech community leader building the future from Pasig City.',
    portraitSrc: '/body.png',
    portraitAlt: 'Justin Jhon Trio Aran portrait',
  },
  socials: [
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/justinjhonaran', iconPath: '/icons/linkedin.svg' },
    { label: 'Design Portfolio', href: 'https://justinaran.figma.site', iconPath: '/icons/vscode.svg' },
  ],
}
