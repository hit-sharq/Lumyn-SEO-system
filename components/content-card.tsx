'use client'

import Link from 'next/link'
import { ArrowUpRight, Share2 } from 'lucide-react'
import type { ContentItem } from '@/lib/content'
import { formatDate } from '@/lib/content'

export function ContentCard({ item }: { item: ContentItem }) {
  const path = item.type === 'article' ? '/articles' : '/news'
  const share = () => { if (typeof navigator !== 'undefined' && navigator.share) navigator.share({ title: item.title, url: `${window.location.origin}${path}/${item.slug}` }) }
  return <article className="content-card">
    <div className="card-image"><img src={item.image} alt="" /><span className="card-index">{item.type === 'article' ? 'ARTICLE' : 'NEWS'}</span></div>
    <div className="card-body"><div className="card-meta"><span>{item.category}</span><span>{formatDate(item.date)}</span></div>
      <h3>{item.title}</h3><p>{item.excerpt}</p>
      <div className="card-footer"><Link href={`${path}/${item.slug}`} className="text-link">Read more <ArrowUpRight size={16} /></Link><button className="share-btn" onClick={share} aria-label={`Share ${item.title}`}><Share2 size={16} /> Share</button></div>
    </div>
  </article>
}
