'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <nav className="nav wrap">
        <a className="brand" href="/"><span className="brand-mark">L</span> Lumyn</a>
        <div className={`nav-links${open ? ' open' : ''}`}>
          <a href="/capabilities" onClick={() => setOpen(false)}>Capabilities</a>
          <a href="/articles" onClick={() => setOpen(false)}>Articles</a>
          <a href="/news" onClick={() => setOpen(false)}>News</a>
          <a href="/about" onClick={() => setOpen(false)}>About</a>
          <a href="/advertise" onClick={() => setOpen(false)}>Advertise</a>
        </div>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <a href="/contact" className="button button-dark">Start a project <ArrowUpRight size={15} /></a>
      </nav>
    </header>
  )
}

export function Footer() {
  return (
    <footer id="contact">
      <div className="wrap footer-grid">
        <div>
          <a className="brand" href="/"><span className="brand-mark">L</span> Lumyn</a>
          <p className="footer-note">A digital innovation studio engineering bespoke platforms, products, and experiences that move ambitious businesses forward.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <a href="/articles">Articles</a>
          <a href="/news">News</a>
          <a href="/about">About us</a>
          <a href="/capabilities">Capabilities</a>
          <a href="/advertise">Advertise</a>
        </div>
        <div>
          <h4>Connect</h4>
          <a href="mailto:info@lumyn.co.ke">info@lumyn.co.ke</a>
          <a href="mailto:support@lumyn.co.ke">support@lumyn.co.ke</a>
          <span>Nairobi, Kenya</span>
        </div>
      </div>
      <div className="footer-bottom wrap">
        <span>© 2026 Lumyn Technologies</span>
        <span>Built for what comes next.</span>
      </div>
    </footer>
  )
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
