import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/site-shell'
import { content, formatDate, getContent } from '@/lib/content'
import { ArrowLeft, Share2 } from 'lucide-react'
import Link from 'next/link'

const SITE = 'https://lumyn.co.ke'

export function generateStaticParams() { return content.filter((item) => item.type === 'article').map((item) => ({ slug: item.slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const item = getContent((await params).slug)
  if (!item) return { title: 'Article | Lumyn' }
  return {
    title: `${item.title} | Lumyn`,
    description: item.excerpt,
    openGraph: { title: item.title, description: item.excerpt, url: `${SITE}/articles/${item.slug}`, type: 'article', siteName: 'Lumyn Technologies' },
  }
}

const OPEN_TAG = String.fromCharCode(60) + 'strong>'
const CLOSE_TAG = String.fromCharCode(60, 47, 115, 116, 114, 111, 110, 103, 62)
function BodyParagraph({ text }: { text: string }) {
  const idx = text.indexOf(CLOSE_TAG)
  if (text.startsWith(OPEN_TAG) && idx > -1) {
    const heading = text.slice(OPEN_TAG.length, idx)
    const rest = text.slice(idx + CLOSE_TAG.length)
    return (
      <div>
        <h3 className="article-h3">{heading}</h3>
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
    publisher: { '@type': 'Organization', name: 'Lumyn Technologies', logo: { '@type': 'ImageObject', url: `${SITE}/favicon-192x192.png` } },
    datePublished: item.date,
    mainEntityOfPage: url,
    image: `${SITE}${item.image}`,
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
  return <SiteShell><main className="article-page wrap">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    <Link href="/articles" className="back-link"><ArrowLeft size={16} /> Back to articles</Link>
    <div className="article-header">
      <span className="section-label">{item.category} / {formatDate(item.date)}</span>
      <h1>{item.title}</h1>
      <p>{item.excerpt}</p>
      <div className="byline"><span>By {item.author}</span><span>{item.readTime}</span><button className="share-btn"><Share2 size={16} /> Share</button></div>
    </div>
    <img className="article-hero" src={item.image} alt={item.title} />
    <div className="article-body">{item.content.map((paragraph, i) => <BodyParagraph key={i} text={paragraph} />)}
      <h2>Build what comes next</h2>
      <p>Want to explore what these ideas could mean for your business? <Link href="/contact">Start a conversation with our team.</Link></p>
    </div>
  </main></SiteShell>
}