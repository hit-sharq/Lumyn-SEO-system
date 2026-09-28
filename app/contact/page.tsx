import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteShell } from '@/components/site-shell'
export const metadata = { title: 'Contact | Lumyn Technologies', description: 'Partner with Lumyn Technologies. Start a conversation about your next digital product or platform.' }
export default function ContactPage() { return <SiteShell><main className="cta"><div className="wrap"><span className="section-label">Let&apos;s build together</span><h2>Ready to transform <em>your vision?</em></h2><p>Partner with Lumyn Technologies and let&apos;s build the future together.</p><Link href="mailto:info@lumyn.co.ke" className="button button-orange">Start a conversation <ArrowUpRight size={16} /></Link></div></main></SiteShell> }