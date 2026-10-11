export type FunnelTag = 'Academic' | 'Leadership' | 'Community' | 'Website'

export type Funnel = {
  file: string
  label: string
  tag: FunnelTag
  desc: string
  imageSrc?: string
  /** Public subfolder the HTML + thumbnail live under. Default 'funnels'. */
  dir?: 'funnels' | 'samples'
}

/**
 * Justin's showcase pages & revolving gallery photos from real events and initiatives.
 */

export const websiteFunnel: Funnel[] = [
  {
    file: 'tedx-pup-love-at-first-idea.html',
    label: 'TEDx PUP: Love at First Idea',
    tag: 'Leadership',
    desc: 'Relations Committee Co-Head leading audience relations, guest coordination, and communications.',
    imageSrc: '/gallery/JUSTIN-3.jpg',
  },
  {
    file: 'afk-2025-fresh-kickstart.html',
    label: 'AFK 2025: Fresh Kickstart',
    tag: 'Leadership',
    desc: 'Linkages Committee Co-Head coordinating external sponsorships and collegiate partnerships.',
    imageSrc: '/gallery/JUSTIN-13.jpg',
  },
  {
    file: 'gdg-sparkfest-2025.html',
    label: 'GDG PUP: SparkFest 2025',
    tag: 'Community',
    desc: 'Facilitated attendee registration and supported guest coordination for Google Developer Groups.',
    imageSrc: '/gallery/_DSF0231.JPG',
  },
  {
    file: 'gdg-build-with-ai.html',
    label: 'GDG PUP: Build with AI',
    tag: 'Community',
    desc: 'Served as Event Marshal guiding attendees and supporting interactive AI workshops.',
    imageSrc: '/gallery/_DSF0232.JPG',
  },
  {
    file: 'tedx-guest-relations.html',
    label: 'TEDx Partner Coordination',
    tag: 'Leadership',
    desc: 'Managing stage flow, VIP guest logistics, and stakeholder relations for flagship TEDx.',
    imageSrc: '/gallery/JUSTIN-4.jpg',
  },
  {
    file: 'afk-sponsorship-outreach.html',
    label: 'AFK Sponsor Linkages',
    tag: 'Leadership',
    desc: 'Securing corporate sponsors, merchandise partners, and institutional endorsements.',
    imageSrc: '/gallery/JUSTIN-14.jpg',
  },
  {
    file: 'aws-cloud-club-pup.html',
    label: 'AWS Cloud Club PUP',
    tag: 'Community',
    desc: 'Active member and contributor exploring cloud architectures and cloud computing seminars.',
    imageSrc: '/gallery/_DSF0437.JPG',
  },
  {
    file: 'alberto-sports-sigasig.html',
    label: 'SIGASIG Sports League',
    tag: 'Community',
    desc: 'Managed audio engineering, console routing, and equipment operations during live games.',
    imageSrc: '/gallery/_DSF2052.JPG',
  },
  {
    file: 'alberto-sports-livestream.html',
    label: 'Live Broadcast Operator',
    tag: 'Community',
    desc: 'Technical streaming operator directing live multi-camera feeds and match graphics.',
    imageSrc: '/gallery/_DSF2053.JPG',
  },
  {
    file: 'sk-pinagbuhatan-secretariat.html',
    label: 'SK Pinagbuhatan Secretariat',
    tag: 'Leadership',
    desc: 'Managing council resolutions, weekly service reports, and community youth initiatives.',
    imageSrc: '/gallery/2705eb74-0b57-42d8-83e3-7bde44624c10.jpg',
  },
  {
    file: 'sk-youth-assembly.html',
    label: 'Barangay Youth Council',
    tag: 'Leadership',
    desc: 'Coordinating barangay youth initiatives, attendance tracking, and community programs.',
    imageSrc: '/gallery/8a3fc5c1-1f92-4c50-808e-45f006e6ccae.jpg',
  },
  {
    file: 'pup-ccis-student-council.html',
    label: 'PUP CCIS Student Council',
    tag: 'Leadership',
    desc: 'Serving on Secretariat, Ways, and Partnership Committee producing student advocacy materials.',
    imageSrc: '/gallery/ada49b4b-8340-4ba8-887d-7bb30b4dfcfb.jpg',
  },
  {
    file: 'ed3nventures-apex-human.html',
    label: 'ED3Nventures: Apex Human',
    tag: 'Website',
    desc: 'Multimedia intern writing course scripts, drafting PRDs, and producing Remotion/CapCut video content.',
    imageSrc: '/gallery/c3bd7c83-d888-47e4-a927-94c673053a37.jpg',
  },
  {
    file: 'inko-ai-marketing.html',
    label: 'Inko AI Startup Marketing',
    tag: 'Website',
    desc: 'Marketing campaign strategy and user growth for Japanese AI language learning application.',
    imageSrc: '/gallery/c659d233-d555-4956-ab1f-cc3ad71db8a9.jpg',
  },
  {
    file: 'pasig-city-scholar.html',
    label: 'Pasig City Scholar · PUP BSIT',
    tag: 'Academic',
    desc: 'Academic excellence and leadership at the intersection of technology and public service.',
    imageSrc: '/gallery/e3c340d7-284f-4527-b3bf-18af2db4b0ef.jpg',
  },
  {
    file: 'tedx-communications.html',
    label: 'TEDx Communications Lead',
    tag: 'Leadership',
    desc: 'Directing audience engagement, social messaging, and partner communications.',
    imageSrc: '/gallery/JUSTIN-5.jpg',
  },
  {
    file: 'afk-stage-operations.html',
    label: 'AFK Stage & Partner Operations',
    tag: 'Leadership',
    desc: 'Coordinating program transitions, guest ushering, and stage logistics.',
    imageSrc: '/gallery/JUSTIN-16.jpg',
  },
]

/**
 * Tag -> color map.
 */
export const tagColors: Record<FunnelTag, string> = {
  'Academic': '#2563EB',
  Leadership: '#ec4899',
  Community: '#16A34A',
  Website: '#FF7A1A',
}
