import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/site-shell'
import { content, formatDate, getContent } from '@/lib/content'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
export function generateStaticParams() { return content.filter((item) => item.type === 'news').map((item) => ({ slug: item.slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const item = getContent((await params).slug); return { title: item ? `${item.title} | Lumyn News` : 'News | Lumyn', description: item?.excerpt } }
export default async function NewsDetail({ params }: { params: Promise<{ slug: string }> }) { const item = getContent((await params).slug); if (!item || item.type !== 'news') notFound(); return <SiteShell><main className="article-page wrap"><Link href="/news" className="back-link"><ArrowLeft size={16} /> Back to newsroom</Link><div className="article-header"><span className="section-label">{item.category} / {formatDate(item.date)}</span><h1>{item.title}</h1><p>{item.excerpt}</p><div className="byline"><span>By {item.author}</span><span>{item.readTime}</span></div></div><img className="article-hero" src={item.image} alt="" /><div className="article-body">{item.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></main></SiteShell> }
