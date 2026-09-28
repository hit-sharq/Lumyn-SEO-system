import { SiteShell } from '@/components/site-shell'
import { ContentCard } from '@/components/content-card'
import { articles } from '@/lib/content'

const SITE = 'https://lumyn.co.ke'

export const metadata = { title: 'Articles | Lumyn Technologies', description: 'Perspectives on product, engineering, design, and digital growth from Lumyn Technologies.' }

export default function ArticlesPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    listItem: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: `${SITE}/articles` },
    ],
  }
  return <SiteShell><main className="listing-page wrap">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    <div className="listing-intro"><span className="section-label">The journal / 01</span><h1>Articles that<br /><em>move ideas</em> forward.</h1><p>Practical perspectives from the people building digital products, platforms, and experiences at Lumyn.</p></div>
    <div className="listing-bar"><span>{articles.length} stories</span><span>Product · Engineering · Studio</span></div>
    <div className="card-grid">{articles.map((item) => <ContentCard key={item.slug} item={item} />)}</div>
  </main></SiteShell>
}