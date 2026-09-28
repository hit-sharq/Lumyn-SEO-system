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
  { slug: 'website-cost-kenya-2026', type: 'article', title: 'How Much Does a Website Cost in Kenya in 2026?', excerpt: 'A realistic breakdown of what Kenyan businesses pay for a website in 2026 — from DIY builders to custom platforms — and what drives the difference.', category: 'Product', date: '2026-09-25', readTime: '7 min read', author: 'Lumyn Studio', image: '/images/article-grid.svg', content: [
    'Short answer: anywhere from KES 15,000 for a basic template site to KES 2,500,000+ for a custom enterprise platform. The honest answer is more useful. Here is what actually drives cost in the Kenyan market in 2026.',
    '<strong>The four cost levers.</strong>Every quote you receive breaks down into four things: design complexity, engineering effort, integrations, and ongoing maintenance. A cheap site saves on design and engineering. An expensive one spends on all four — and usually on integrations you did not plan for.',
    '<strong>DIY and template builders: KES 15,000 – 80,000 per year.</strong>Wix, Squarespace, and WordPress.com handle hosting, security, and updates for you. You trade control for speed. This works for a brochure site — five pages, a contact form, a Google map. It stops working when you need M-Pesa payments, a member portal, or a custom admin panel. Budget one to two weeks of your own time to set it up properly.',
    '<strong>Freelancer-developed sites: KES 80,000 – 400,000.</strong>Most Kenyan businesses land here. You get a custom design, a CMS you can edit yourself, and a handful of integrations — booking system, newsletter, social feeds. The risk is not the price. It is continuity: when the freelancer disappears or their package expires, you own a site you cannot update. Ask for the source files, the CMS credentials, and a handover document before you pay the final instalment.',
    '<strong>Agency work: KES 400,000 – 1,500,000.</strong>Agencies bundle strategy, design, engineering, and support into one engagement. You get a project manager, a defined timeline, and someone accountable if something breaks. The premium you pay above a freelancer is mostly for reduced risk and faster delivery. Verify the agency has shipped work similar to yours before you sign.',
    '<strong>Custom platforms: KES 1,500,000 – 2,500,000+.</strong>This is product-grade software: multi-tenant dashboards, real-time reporting, M-Pesa integration with reconciliation, role-based access, and an SLA. Nobody builds this on a template. Most projects at this level also carry an annual support contract of 10–20% of the build cost. Budget for it or expect to rewrite the system in two years.',
    '<strong>Hidden costs nobody quotes.</strong>Domain registration (KES 2,500–4,000 per year), hosting (KES 3,000–15,000 per year depending on traffic), an SSL certificate, professional photography or copywriting (KES 30,000–100,000), and ongoing SEO. A KES 500,000 website realistically costs KES 650,000–750,000 all-in over three years once these are included.',
    '<strong>How to get a fair quote fast.</strong>Agencies and freelancers price from a brief. Give them: your goals, the pages you need, the integrations you cannot do without, your target launch date, and your budget range. Vague briefs get vague quotes. A specific brief gets you a number you can actually plan around.',
    'The right question is not "how much does a website cost". It is "what do I need the website to do, and what is the cheapest way to get there without owning a liability I cannot operate". If that sounds like your situation, <a href="/contact">start a conversation with our team</a> and we will give you an honest range, not a fantasy.',
  ] },
]

export const articles = content.filter((item) => item.type === 'article')
export const news = content.filter((item) => item.type === 'news')
export function getContent(slug: string) { return content.find((item) => item.slug === slug) }
export function formatDate(date: string) { return new Intl.DateTimeFormat('en-KE', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(date)) }