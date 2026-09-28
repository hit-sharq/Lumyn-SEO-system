import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { SiteShell } from '@/components/site-shell'

export const metadata = {
  title: 'Contact | Lumyn Technologies',
  description: 'Partner with Lumyn Technologies. Start a conversation about your next digital product or platform.',
}

export default function ContactPage() {
  return <SiteShell><main>
    <section className="section wrap" id="about">
      <div className="section-heading">
        <div>
          <span className="section-label">Who we are</span>
          <h2>Pioneering the future of digital innovation</h2>
        </div>
        <ArrowDown />
      </div>
      <div className="principles">
        <div><div className="principle-mark" /><h3>Enterprise solutions</h3><p>Scalable architecture built for mission-critical requirements, from M-Pesa payment rails to multi-tenant platforms.</p></div>
        <div><div className="principle-mark" /><h3>Cutting-edge technology</h3><p>Leveraging AI, cloud-native architectures, and modern development practices across every build.</p></div>
        <div><div className="principle-mark" /><h3>Global impact</h3><p>Trusted by businesses across Kenya and beyond to drive real digital transformation.</p></div>
      </div>
    </section>
    <section className="cta">
      <div className="wrap">
        <span className="section-label">Let&apos;s build together</span>
        <h2>Ready to transform <em>your vision?</em></h2>
        <p>Partner with Lumyn Technologies and let&apos;s build the future together.</p>
        <a href="https://www.lumyn.co.ke/contact" className="button button-orange" target="_blank" rel="noopener noreferrer">
          Visit our contact page <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  </main></SiteShell>
}