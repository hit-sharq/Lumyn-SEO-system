'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><nav className="nav wrap">
    <Link className="brand" href="/"><span className="brand-mark">L</span> Lumyn</Link>
    <div className={`nav-links${open ? ' open' : ''}`}>
      <Link href="/capabilities" onClick={() => setOpen(false)}>Capabilities</Link>
      <Link href="/articles" onClick={() => setOpen(false)}>Articles</Link>
      <Link href="/news" onClick={() => setOpen(false)}>News</Link>
      <Link href="/about" onClick={() => setOpen(false)}>About</Link>
    </div>
    <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
      {open ? <X size={20} /> : <Menu size={20} />}
    </button>
    <Link href="/contact" className="button button-dark">Start a project <ArrowUpRight size={15} /></Link>
  </nav></header>
}

export function Footer() { return <footer id="contact"><div className="wrap footer-grid"><div><Link className="brand" href="/"><span className="brand-mark">L</span> Lumyn</Link><p className="footer-note">A digital innovation studio engineering bespoke platforms, products, and experiences that move ambitious businesses forward.</p></div><div><h4>Explore</h4><Link href="/articles">Articles</Link><Link href="/news">News</Link><Link href="/about">About us</Link><Link href="/capabilities">Capabilities</Link></div><div><h4>Connect</h4><a href="mailto:info@lumyn.co.ke">info@lumyn.co.ke</a><a href="mailto:support@lumyn.co.ke">support@lumyn.co.ke</a><span>Nairobi, Kenya</span></div></div><div className="footer-bottom wrap"><span>© 2026 Lumyn Technologies</span><span>Built for what comes next.</span></div></footer> }
export function SiteShell({ children }: { children: React.ReactNode }) { return <><Header />{children}<Footer /></> }