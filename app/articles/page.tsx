import { SiteShell } from '@/components/site-shell'
import { ContentCard } from '@/components/content-card'
import { articles } from '@/lib/content'
import { paginate, getTotalPages, getPaginationData, ITEMS_PER_PAGE } from '@/lib/pagination'

const SITE = 'https://blogs.lumyn.co.ke'

export const metadata = { 
  title: 'Articles | Lumyn Technologies Blog', 
  description: 'Perspectives on product, engineering, design, and digital growth from Lumyn Technologies. Building for Kenya\'s digital economy.',
  openGraph: { title: 'Articles | Lumyn Technologies Blog', description: 'Perspectives on product, engineering, design, and digital growth from Lumyn Technologies.', url: `${SITE}/articles`, siteName: 'Lumyn Technologies Blog', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Articles | Lumyn Technologies Blog', description: 'Perspectives on product, engineering, design, and digital growth from Lumyn Technologies.' },
}

const currentPage = 1
const totalPages = getTotalPages(articles.length)
const paginatedArticles = paginate(articles, currentPage)
const pagination = getPaginationData(currentPage, totalPages)

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  listItem: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: `${SITE}/articles` },
  ],
}
const blogLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Lumyn Technologies Blog',
  url: SITE,
  description: 'Practical perspectives on product, engineering, design, and digital growth from Lumyn Technologies.',
  blogPosts: articles.map(item => ({
    '@type': 'BlogPosting',
    headline: item.title,
    url: `${SITE}/articles/${item.slug}`,
    datePublished: item.date,
    author: { '@type': 'Organization', name: item.author },
    publisher: { '@type': 'Organization', name: 'Lumyn Technologies' },
  })),
}

export default function ArticlesPage() {
  return (
    <SiteShell>
      <main className="listing-page wrap">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }} />
        <div className="listing-intro">
          <span className="section-label">The journal / 01</span>
          <h1>Articles that<br /><em>move ideas</em> forward.</h1>
          <p>Practical perspectives from the people building digital products, platforms, and experiences at Lumyn.</p>
        </div>
        <div className="listing-bar">
          <span>{articles.length} stories</span>
          <span>Product · Engineering · Studio</span>
        </div>
        <div className="card-grid">
          {paginatedArticles.map((item) => <ContentCard key={item.slug} item={item} />)}
        </div>
        {totalPages > 1 && (
          <nav className="pagination" aria-label="Articles pagination">
            <div className="page-numbers" aria-label="Page numbers">
              {pagination.pages.map((item, idx) => 
                item === 'ellipsis' ? (
                  <span key={`ellipsis-${idx}`} className="page-ellipsis" aria-hidden="true">…</span>
                ) : (
                  <a
                    key={item}
                    href={item === 1 ? '/articles' : `/articles/page/${item}`}
                    className={`page-link ${item === currentPage ? 'current' : ''}`}
                    aria-current={item === currentPage ? 'page' : undefined}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
            {pagination.hasNext && (
              <a href={`/articles/page/${pagination.nextPage}`} className="page-link next" rel="next">
                Next →
              </a>
            )}
          </nav>
        )}
      </main>
    </SiteShell>
  )
}