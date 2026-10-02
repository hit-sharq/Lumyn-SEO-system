import { content } from './content'

export type ClusterId =
  | 'business-website'
  | 'seo-foundations'
  | 'kenya-digital-economy'
  | 'lumyn-case-studies'
  | 'studio-process'
  | 'engineering-deep-dives'

export type Cluster = {
  id: ClusterId
  name: string
  /** Slug of the pillar article. Supporting articles should link up to it. */
  pillar: string | null
  description: string
  /** Search intent the cluster is built to capture. */
  intent: 'commercial' | 'informational' | 'navigational' | 'brand'
  /** Slugs published so far, in publish order. */
  members: string[]
}

export const CLUSTERS: Record<ClusterId, Cluster> = {
  'business-website': {
    id: 'business-website',
    name: 'Building a Business Website',
    pillar: 'why-kenyan-business-needs-professional-website-2026',
    description:
      'Everything a Kenyan business owner needs to decide, budget for and commission a business website.',
    intent: 'commercial',
    members: [
      'why-kenyan-business-needs-professional-website-2026',
      'website-cost-kenya-2026',
      'custom-website-vs-wordpress-kenya',
    ],
  },
  'seo-foundations': {
    id: 'seo-foundations',
    name: 'SEO Foundations',
    pillar: null,
    description: 'Search visibility fundamentals for Kenyan businesses and the teams that serve them.',
    intent: 'informational',
    members: ['how-ai-transforming-seo-2026'],
  },
  'kenya-digital-economy': {
    id: 'kenya-digital-economy',
    name: "Kenya's Digital Economy",
    pillar: 'state-of-digital-business-kenya-2026',
    description: 'Data and analysis on Kenya digital infrastructure, payments and market behaviour.',
    intent: 'informational',
    members: [
      'state-of-digital-business-kenya-2026',
      'building-digital-products-for-africa',
      'mpesa-integration-lessons',
    ],
  },
  'lumyn-case-studies': {
    id: 'lumyn-case-studies',
    name: 'Lumyn Case Studies',
    pillar: null,
    description: 'Project stories and post-mortems. Highest trust value per word, weakest search volume.',
    intent: 'brand',
    members: [],
  },
  'studio-process': {
    id: 'studio-process',
    name: 'Inside the Studio',
    pillar: null,
    description: 'How Lumyn works. Not search-led, supports sales conversations directly.',
    intent: 'brand',
    members: ['the-lumyn-studio-system'],
  },
  'engineering-deep-dives': {
    id: 'engineering-deep-dives',
    name: 'Engineering Deep Dives',
    pillar: null,
    description: 'Technical authority content that demonstrates engineering credibility.',
    intent: 'informational',
    members: [],
  },
}

/**
 * Planned articles from Lumyn_SEO_and_Brand_Awareness_Content_Strategy.docx.
 * Deliberately kept out of `content` so unwritten entries never generate routes.
 *
 * `docRef` points at the section 10 priority number or the section it came from,
 * so the strategy document and this roadmap stay reconcilable.
 */
export type PlannedArticle = {
  slug: string
  title: string
  cluster: ClusterId
  purpose: string
  docRef: string
  /** Rank within the cluster. 1 = write next. */
  priority: number
  /** Cross-cluster links to add at publish time. */
  linksTo?: string[]
}

export const ROADMAP: PlannedArticle[] = [
  // --- Batch 1: website cluster, highest commercial intent ---
  {
    slug: 'how-to-choose-web-development-company-kenya',
    title: 'How to Choose a Web Development Company in Kenya',
    cluster: 'business-website',
    purpose: 'Highest-intent conversion article. Everything in the cluster funnels here.',
    docRef: 'priority #3',
    priority: 1,
    linksTo: ['website-cost-kenya-2026', 'custom-website-vs-wordpress-kenya'],
  },
  {
    slug: 'website-vs-social-media-kenya',
    title: 'Website vs Social Media: What Does Your Business Actually Need?',
    cluster: 'business-website',
    purpose: 'Counter-argument to the live "why you need a website" article. Answers the when, not the whether.',
    docRef: 'priority #4',
    priority: 2,
    linksTo: ['why-kenyan-business-needs-professional-website-2026'],
  },
  {
    slug: '10-features-every-business-website-should-have',
    title: '10 Features Every Modern Business Website Should Have',
    cluster: 'business-website',
    purpose: 'Listicle that links naturally into cost, necessity and M-Pesa integration.',
    docRef: 'priority #14',
    priority: 3,
    linksTo: ['website-cost-kenya-2026', 'mpesa-integration-lessons'],
  },

  // --- Batch 2: SEO cluster, Lumyn's own expertise ---
  {
    slug: 'seo-for-kenyan-businesses-beginners-guide',
    title: "SEO for Kenyan Businesses: A Practical Beginner's Guide",
    cluster: 'seo-foundations',
    purpose: 'Pillar for the SEO cluster. Target the beginner who cannot yet name what SEO is.',
    docRef: 'priority #5',
    priority: 4,
  },
  {
    slug: 'get-your-business-on-google-kenya',
    title: 'How to Get Your Business on Google in Kenya',
    cluster: 'seo-foundations',
    purpose: 'Local search and Google Business Profile. Ties directly to service enquiries.',
    docRef: 'priority #6',
    priority: 5,
    linksTo: ['seo-for-kenyan-businesses-beginners-guide'],
  },

  // --- Batch 3: case studies, trust ---
  {
    slug: 'why-we-built-enkaji',
    title: 'Why We Built Enkaji: Building a B2B Marketplace for Kenya',
    cluster: 'lumyn-case-studies',
    purpose: 'First case study. Use the section 8 framework already defined in the strategy doc.',
    docRef: 'priority #11',
    priority: 6,
  },
  {
    slug: 'why-we-built-dwell-ke',
    title: 'Why We Built Dwell KE',
    cluster: 'lumyn-case-studies',
    purpose: 'PropTech case study. Contrasts with Enkaji to show range.',
    docRef: 'priority #12',
    priority: 7,
  },

  // --- Batch 4: cost consolidation (see notes below) ---
  {
    slug: 'custom-software-development-cost-kenya',
    title: 'How Much Does Custom Software Development Cost in Kenya?',
    cluster: 'business-website',
    purpose:
      'Single pillar covering custom software, e-commerce, web app and mobile app pricing as sections. Replaces four separate cost articles from doc section 9 that would otherwise cannibalise each other.',
    docRef: 'priority #8 + doc s9 siblings',
    priority: 8,
    linksTo: ['website-cost-kenya-2026'],
  },

  // --- Batch 5: remaining priority items ---
  {
    slug: 'mpesa-changing-ecommerce-kenya',
    title: 'How M-Pesa Is Changing E-Commerce in Kenya',
    cluster: 'kenya-digital-economy',
    purpose: 'Local authority. Supports the payments expertise shown in the M-Pesa lessons article.',
    docRef: 'priority #10',
    priority: 9,
    linksTo: ['mpesa-integration-lessons'],
  },
  {
    slug: 'website-vs-web-app-vs-mobile-app',
    title: 'Website, Web App or Mobile App: What Does Your Business Need?',
    cluster: 'business-website',
    purpose: 'Commercial. Sits naturally between the cost and choose-a-company articles.',
    docRef: 'priority #15',
    priority: 10,
    linksTo: ['custom-website-vs-wordpress-kenya', 'how-to-choose-web-development-company-kenya'],
  },
]

/**
 * Cut from the strategy doc. Listed so the reasoning survives the next revision.
 */
export const CUT_FROM_PLAN: { title: string; docRef: string; reason: string }[] = [
  {
    title: 'How Kenyan SMEs Can Build a Strong Digital Presence',
    docRef: 'priority #13',
    reason:
      'Overlaps the live "Why Every Kenyan Business Needs a Professional Website". Writing both splits signals across two posts targeting one intent.',
  },
  {
    title: 'Technology Trends Kenyan Businesses Should Watch in 2026',
    docRef: 'doc s6',
    reason:
      'Generic listicle with no proprietary data or angle Lumyn owns. Competes with better-funded publishers on their terms.',
  },
  {
    title: 'Why Mobile-First Websites Matter in Kenya',
    docRef: 'doc s6',
    reason: 'Listed twice in the doc (s4 and s6). Duplicated topic.',
  },
  {
    title: 'Next.js vs WordPress: What Should You Use for a Business Website?',
    docRef: 'doc s4',
    reason: 'Already published as "Custom Website vs WordPress".',
  },
  {
    title: 'Kenya Growing Digital Economy: What Businesses Need to Know',
    docRef: 'doc s6',
    reason: 'Already published as "The State of Digital Business in Kenya in 2026".',
  },
  {
    title: 'How Much Does an E-Commerce Website Cost in Kenya?',
    docRef: 'doc s9',
    reason: 'Absorbed as a section of the consolidated software-cost pillar.',
  },
  {
    title: 'How Much Does a Web Application Cost in Kenya?',
    docRef: 'doc s9',
    reason: 'Absorbed as a section of the consolidated software-cost pillar.',
  },
  {
    title: 'How Much Does a Mobile App Cost in Kenya?',
    docRef: 'doc s9',
    reason: 'Absorbed as a section of the consolidated software-cost pillar.',
  },
]

// --- helpers ---

export function getCluster(id: string): Cluster | undefined {
  return CLUSTERS[id as ClusterId]
}

export function getClusterArticles(id: ClusterId) {
  return CLUSTERS[id].members
    .map((slug) => content.find((item) => item.slug === slug))
    .filter((item): item is (typeof content)[number] => item !== undefined)
}

export function getPillar(id: ClusterId) {
  const slug = CLUSTERS[id].pillar
  if (!slug) return undefined
  return content.find((item) => item.slug === slug)
}

/**
 * Articles that should link back to this one: its cluster siblings, plus any
 * explicit cross-cluster links declared on the roadmap.
 */
export function getPlannedLinks(slug: string): string[] {
  const planned = ROADMAP.find((item) => item.slug === slug)
  if (!planned) return []
  return planned.linksTo ?? []
}

export function nextUp(count = 1): PlannedArticle[] {
  return [...ROADMAP].sort((a, b) => a.priority - b.priority).slice(0, count)
}
