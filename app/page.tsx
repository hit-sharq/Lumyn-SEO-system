import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteShell } from '@/components/site-shell'
import { ContentCard } from '@/components/content-card'
import { articles } from '@/lib/content'

export default function Page() {
  const insights = articles.filter((a) => a.type === 'article' && !a.sponsored)
  const caseStudies = articles.filter((a) => a.cluster === 'lumyn-case-studies')
  const caps = [
    { n: '01', t: 'Discover', d: 'We learn how your business works, where it is going, and what your customers need next.' },
    { n: '02', t: 'Design', d: 'We turn complex requirements into clear journeys, useful systems, and a sharp digital point of view.' },
    { n: '03', t: 'Build', d: 'We engineer reliable products with modern technology, resilient infrastructure, and measurable performance.' },
    { n: '04', t: 'Grow', d: 'We stay close after launch to improve adoption, learn from real usage, and help your product compound.' },
  ]
  return (
    <SiteShell>
      <main>
        <section className="hero wrap">
          <div className="eyebrow"><span className="signal-dot" /> Redefining digital innovation</div>
          <h1>Building<br /><em>tomorrow&apos;s</em><br /><strong>technology.</strong></h1>
          <div className="hero-bottom">
            <p>Lumyn Technologies is a Nairobi-based studio crafting enterprise-grade software — from M-Pesa-integrated platforms to AI-assisted products — for businesses ready to move faster than their market.</p>
            <div className="hero-actions">
              <Link href="/contact" className="button button-dark">Start your project <ArrowUpRight size={16} /></Link>
              <Link href="/articles" className="button button-outline">Explore our insights</Link>
            </div>
          </div>
          <div className="stats">
            <div><b>12<span>+</span></b><small>Projects delivered</small></div>
            <div><b>4<span>+</span></b><small>Team members</small></div>
            <div><b>3<span>+</span></b><small>Events hosted</small></div>
            <div><b>2<span>+</span></b><small>Years of innovation</small></div>
          </div>
        </section>

        <div className="ticker">
          <div>STRATEGY <i>✦</i> DESIGN <i>✦</i> ENGINEERING <i>✦</i> MOMENTUM <i>✦</i> STRATEGY <i>✦</i> DESIGN <i>✦</i> ENGINEERING <i>✦</i> MOMENTUM <i>✦</i></div>
        </div>

        <section className="section wrap" id="capabilities">
          <div className="section-heading">
            <div>
              <span className="section-label">Capabilities</span>
              <h2>Strategy, design, engineering</h2>
            </div>
          </div>
          <div className="cap-grid">
            {caps.map((c) => (
              <div key={c.n} className="cap-item">
                <span className="cap-num">{c.n}</span>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section wrap" id="work">
          <div className="section-heading">
            <div>
              <span className="section-label">Featured work</span>
              <h2>Built for Kenyan businesses</h2>
            </div>
            <Link href="/articles" className="text-link">View all work <ArrowUpRight size={16} /></Link>
          </div>
          <div className="card-grid">{caseStudies.slice(0, 3).map((item) => <ContentCard key={item.slug} item={item} />)}</div>
        </section>

        <section className="section wrap" id="insights">
          <div className="section-heading">
            <div>
              <span className="section-label">Latest insights</span>
              <h2>Ideas for businesses ready to move</h2>
            </div>
            <Link href="/articles" className="text-link">View all insights <ArrowUpRight size={16} /></Link>
          </div>
          <div className="card-grid">{insights.slice(0, 3).map((item) => <ContentCard key={item.slug} item={item} />)}</div>
        </section>

        <section className="cta wrap">
          <span className="section-label">Ready to build?</span>
          <h2>Let's build <em>your next thing.</em></h2>
          <p>Lumyn Technologies is a Nairobi-based studio crafting enterprise-grade software for businesses ready to move faster than their market.</p>
          <Link href="/contact" className="button button-orange">Start your project <ArrowUpRight size={16} /></Link>
        </section>
      </main>
    </SiteShell>
  )
}
