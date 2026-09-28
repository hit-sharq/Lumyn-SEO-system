'use client'

import { useEffect, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface Heading {
  id: string
  text: string
  level: number
}

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -66%', threshold: 0 }
    )

    headings.forEach((h) => {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length < 3) return null

  return (
    <nav className="toc" aria-label="Table of contents">
      <h4 className="toc-title">On this page</h4>
      <ul className="toc-list">
        {headings.map((h) => (
          <li key={h.id} className={`toc-item toc-level-${h.level}`}>
            <Link
              href={`#${h.id}`}
              className={`toc-link ${activeId === h.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                const target = document.getElementById(h.id)
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' })
                  history.pushState(null, '', `#${h.id}`)
                  setActiveId(h.id)
                }
              }}
            >
              <span className="toc-bullet">
                <ChevronRight size={10} />
              </span>
              <span className="toc-text">{h.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function useTableOfContents(content: string[]) {
  const [headings, setHeadings] = useState<Heading[]>([])

  useEffect(() => {
    const extracted: Heading[] = []
    let headingCounter = 0

    content.forEach((paragraph) => {
      const strongMatch = paragraph.match(/<strong>(.*?)<\/strong>/)
      if (strongMatch) {
        const text = strongMatch[1].replace(/<[^>]*>/g, '')
        const id = `heading-${headingCounter++}`
        extracted.push({ id, text, level: 3 })
      }
    })

    setHeadings(extracted)
  }, [content])

  return headings
}