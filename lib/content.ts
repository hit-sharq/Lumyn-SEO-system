export type ContentItem = {
  slug: string
  type: 'article' | 'news'
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  author: string
  image: string
  content: string[]
}

export const content: ContentItem[] = [
  { slug: 'building-digital-products-for-africa', type: 'article', title: 'Building digital products for Africa’s next chapter', excerpt: 'The strongest products start with a close understanding of the people, infrastructure, and ambition they are built for.', category: 'Product', date: '2026-09-18', readTime: '6 min read', author: 'Lumyn Studio', image: '/images/article-grid.svg', content: [
    'Africa is not a single market. It is a collection of ambitious, fast-moving ecosystems where technology meets real constraints and real opportunity.',
    'From Lagos to Nairobi to Cape Town, the same pattern shows up: the teams that win are the ones that treat infrastructure as a design constraint, not an afterthought.',
    'At Lumyn, we design around those realities: resilient infrastructure, thoughtful payment experiences, and interfaces that make complex work feel simple.',
    'The result is digital work that does more than look good. It creates momentum for the people and businesses using it.',
  ] },
  { slug: 'mpesa-integration-lessons', type: 'article', title: 'What three M-Pesa integrations taught us about resilient systems', excerpt: 'Reliable payment experiences are built on clear states, graceful retries, and trust at every step.', category: 'Engineering', date: '2026-09-10', readTime: '8 min read', author: 'Lumyn Engineering', image: '/images/article-grid.svg', content: [
    'Payments are the moment a digital promise becomes tangible. That is why reliability matters more than cleverness.',
    'Over three integrations we learned the same lesson three times: a payment system is only as good as its failure handling. Here is what that actually looks like.',
    '<strong>Lesson 1 — Make the state machine explicit.</strong>Every payment has a life cycle: initiated, submitted, confirmed, completed, failed, and reversed. We modelled these as an enum with strict transitions. A payment in "confirmed" cannot jump to "failed" — it must pass through "reversed". This sounds obvious until you realize most bugs come from implicit states.',
    '<strong>Lesson 2 — Retry like a human would.</strong>Network timeouts are rarely permanent. We added exponential backoff with jitter, capped at three attempts, and a circuit breaker that pauses retries if the failure rate crosses 50% in a rolling minute. The key rule: never retry a customer-initiated action more than the user can see.',
    '<strong>Lesson 3 — Tell the user what happened.</strong>When a transaction fails, the message must name the cause. "Payment failed" is useless. "M-Pesa timed out — please check your phone and confirm, or try again" is actionable. We instrumented every failure with a code and surfaced it in the UI.',
    'Our approach pairs clear transaction states with safe retries, useful observability, and copy that helps people understand what happened.',
    'These patterns travel well beyond one provider. They are the foundation of every dependable commerce experience.',
  ] },
  { slug: 'the-lumyn-studio-system', type: 'article', title: 'Inside the Lumyn Studio system', excerpt: 'A practical look at how we turn strategy, design, and engineering into one focused delivery system.', category: 'Studio', date: '2026-08-28', readTime: '5 min read', author: 'Lumyn Studio', image: '/images/article-grid.svg', content: [
    'Great work is rarely the result of one discipline working alone. Our studio brings strategy, design, and engineering into the same conversation from day one.',
    'The traditional model separates these into phases: strategy first, then design, then engineering. That works when the problem is well understood. It breaks down when it is not.',
    'Our approach is different. Strategy, design, and engineering sit in one room from kickoff. Strategy defines the problem and the north star. Design sketches the shape of the solution. Engineering validates what is actually buildable — and often feeds that back to reshape the problem.',
    'This creates fewer handoffs, sharper decisions, and a more honest relationship between the idea and the shipped product.',
    'We call it a system because it is repeatable. Each project is different, but the standards stay high.',
  ] },
  { slug: 'lumyn-launches-new-brand-system', type: 'news', title: 'Lumyn launches a new digital brand system', excerpt: 'A sharper visual language for a company building what comes next.', category: 'Company News', date: '2026-09-20', readTime: '2 min read', author: 'Lumyn Technologies', image: '/images/article-grid.svg', content: [
    'Today we are introducing a new brand system built around clarity, energy, and useful technology.',
    'The system brings our products, studio work, and stories together under one recognizable point of view.',
  ] },
  { slug: 'lumyn-hosts-builders-night', type: 'news', title: 'Lumyn hosts Nairobi builders night', excerpt: 'Local makers gathered to share ideas, prototypes, and practical lessons from the work.', category: 'Events', date: '2026-09-05', readTime: '2 min read', author: 'Lumyn Technologies', image: '/images/article-grid.svg', content: [
    'Builders Night brought together designers, engineers, founders, and curious minds for an evening of honest conversations.',
    'We left with new questions, new collaborators, and a renewed belief in the power of sharing the work.',
  ] },
]

export const articles = content.filter((item) => item.type === 'article')
export const news = content.filter((item) => item.type === 'news')
export function getContent(slug: string) { return content.find((item) => item.slug === slug) }
export function formatDate(date: string) { return new Intl.DateTimeFormat('en-KE', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(date)) }