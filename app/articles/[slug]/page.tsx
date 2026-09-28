import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/site-shell'
import { content, formatDate, getContent } from '@/lib/content'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { ShareButton } from '@/components/share-button'
import { ArticleContent } from './ArticleContent'

const SITE = 'https://blogs.lumyn.co.ke'
const MAIN_SITE = 'https://www.lumyn.co.ke'

export function generateStaticParams() { return content.filter((item) => item.type === 'article').map((item) => ({ slug: item.slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const item = getContent((await params).slug)
  if (!item) return { title: 'Article | Lumyn' }
  const url = `${SITE}/articles/${item.slug}`
  return {
    title: `${item.title} | Lumyn Technologies Blog`,
    description: item.excerpt,
    openGraph: { title: item.title, description: item.excerpt, url, type: 'article', siteName: 'Lumyn Technologies Blog', publishedTime: item.date, authors: [item.author], section: item.category },
    twitter: { card: 'summary_large_image', title: item.title, description: item.excerpt },
    alternates: { canonical: url },
  }
}

const OPEN_TAG = String.fromCharCode(60) + 'strong>'
const CLOSE_TAG = String.fromCharCode(60, 47, 115, 116, 114, 111, 110, 103, 62)

function BodyParagraph({ text, headingId }: { text: string; headingId?: string }) {
  const idx = text.indexOf(CLOSE_TAG)
  if (text.startsWith(OPEN_TAG) && idx > -1) {
    const heading = text.slice(OPEN_TAG.length, idx)
    const rest = text.slice(idx + CLOSE_TAG.length)
    return (
      <div>
        <h3 id={headingId} className="article-h3">{heading}</h3>
        {rest && <p className="article-lead" dangerouslySetInnerHTML={{ __html: rest }} />}
      </div>
    )
  }
  return <p dangerouslySetInnerHTML={{ __html: text }} />
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const item = getContent((await params).slug)
  if (!item || item.type !== 'article') notFound()
  const url = `${SITE}/articles/${item.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: item.title,
    description: item.excerpt,
    author: { '@type': 'Organization', name: item.author },
    publisher: { '@type': 'Organization', name: 'Lumyn Technologies', logo: { '@type': 'ImageObject', url: `${MAIN_SITE}/favicon-192x192.png` } },
    datePublished: item.date,
    dateModified: item.dateModified || item.date,
    mainEntityOfPage: url,
    image: `${SITE}${item.image}`,
    articleSection: item.category,
    inLanguage: 'en-KE',
  }
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    listItem: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: `${SITE}/articles` },
      { '@type': 'ListItem', position: 3, name: item.title, item: url },
    ],
  }
  const faqLd = item.faq ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: item.faq.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  } : null
  return <SiteShell><main className="article-page wrap">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
    <Link href="/articles" className="back-link"><ArrowLeft size={16} /> Back to articles</Link>
    <div className="article-header">
      <span className="section-label">{item.category} / {formatDate(item.date)}</span>
      <h1>{item.title}</h1>
      <p>{item.excerpt}</p>
      <div className="byline"><span>By {item.author}</span><span>{item.readTime}</span><ShareButton url={url} title={item.title} /></div>
    </div>
    <img className="article-hero" src={item.image} alt={item.title} />
    <ArticleContent item={item} />
  </main></SiteShell>
}