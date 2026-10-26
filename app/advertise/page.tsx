import { SiteShell } from '@/components/site-shell'

export const metadata = {
  title: 'Advertise on the Lumyn Blog | Sponsored Content',
  description: 'Reach Kenyan business and technology readers with sponsored articles on blogs.lumyn.co.ke. Rates, guidelines, and submission details.',
}

const sponsored = [
  { slug: 'crypto-law-kenya-business-guide', title: 'Crypto and Digital Currency Law in Kenya: What Businesses Need to Know in 2026', excerpt: 'Kenya has no dedicated crypto statute, yet businesses are already using digital assets. A practical guide to the legal landscape.', category: 'Legal & Compliance', date: '2026-10-26', image: '/images/articles/crypto-law-kenya-hero.svg' },
  { slug: 'business-banking-kenya-sme-2026', title: 'Business Banking for Kenyan SMEs: What Actually Matters in 2026', excerpt: 'A practical look at business accounts, M-Pesa integration, and borrowing for Kenyan small businesses.', category: 'Business & Finance', date: '2026-10-26', image: '/images/articles/business-banking-kenya-hero.svg' },
  { slug: 'pakakumi-kenya-crash-game-platform', title: "Pakakumi: Kenya's Crash Game and Sports Betting Platform Explained", excerpt: 'How Pakakumi works - crash games, sports betting, M-Pesa deposits, and BCLB licensing.', category: 'Sponsored', date: '2026-10-26', image: '/images/articles/pakakumi-sponsored-hero.svg' },
]

export default function AdvertisePage() {
  return (
    <SiteShell>
      <main className="section wrap" id="advertise">
        <div className="section-heading">
          <div>
            <span className="section-label">Sponsored content</span>
            <h2>Advertise on the Lumyn blog</h2>
          </div>
        </div>

        <p>
          The Lumyn blog reaches Kenyan business owners, engineers, and product teams researching websites, SEO,
          payments, and digital operations. Sponsored articles let you speak to that audience with clearly labeled,
          editorially reviewed placement.
        </p>

        <div className="cap-grid">
          <div className="cap-item">
            <span className="cap-num">1</span>
            <h3>Sponsored article</h3>
            <p>A 800-1200 word feature on your topic, labeled Sponsored, with one followed mention of your brand replaced by a nofollow link. From KES 60,000.</p>
          </div>
          <div className="cap-item">
            <span className="cap-num">2</span>
            <h3>Guest post</h3>
            <p>Unpaid contributor placement for experts with original, non-promotional insight. One nofollow author bio link. Free, subject to editorial approval.</p>
          </div>
          <div className="cap-item">
            <span className="cap-num">3</span>
            <h3>Banner placement</h3>
            <p>Homepage or article-page banner for one month. From KES 40,000 per month.</p>
          </div>
        </div>

        <div className="section-heading">
          <div>
            <span className="section-label">Editorial guidelines</span>
            <h2>What we accept</h2>
          </div>
        </div>
        <ul>
          <li>Topic must serve Kenyan businesses: tech, web, SEO, payments (M-Pesa), operations, or startup growth.</li>
          <li>Original, unpublished content. AI-only drafts are rejected.</li>
          <li>Sponsored posts carry a Sponsored banner; outbound links use rel nofollow sponsored.</li>
          <li>No casino, gambling, betting, crypto, adult, or payday-lending placement.</li>
          <li>Lumyn edits for clarity and may decline a submission at its discretion.</li>
        </ul>

        <div className="section-heading">
          <div>
            <span className="section-label">Published sponsored content</span>
            <h2>Recent sponsored articles</h2>
          </div>
        </div>
        <div className="card-grid">
          {sponsored.map((item) => (
            <a key={item.slug} href={`/articles/${item.slug}`} className="content-card">
              <div className="card-image">
                <span className="card-index">SPONSORED</span>
              </div>
              <div className="card-body">
                <div className="card-meta">
                  <span>{item.category}</span>
                  <span>{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <div className="card-footer">
                  <span className="text-link">Read more</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="section-heading">
          <div>
            <span className="section-label">Get in touch</span>
            <h2>Submit a proposal</h2>
          </div>
        </div>
        <p>Send your topic idea, format, target publish date, and budget to <a href="mailto:ads@lumyn.co.ke">ads@lumyn.co.ke</a>. We reply within three business days.</p>
        <a href="/contact" className="button button-dark">Start a conversation</a>
      </main>
    </SiteShell>
  )
}
