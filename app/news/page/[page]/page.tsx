import { SiteShell } from '@/components/site-shell'
import { ContentCard } from '@/components/content-card'
import { news } from '@/lib/content'
import { paginate, getTotalPages, getPaginationData } from '@/lib/pagination'

const SITE = 'https://blogs.lumyn.co.ke'

export const metadata = { 
  title: 'News | Lumyn Technologies Blog', 
  description: 'Company news, events, launches, and updates from Lumyn Technologies.',
  openGraph: { title: 'News | Lumyn Technologies Blog', description: 'Company news, events, launches, and updates from Lumyn Technologies.', url: `${SITE}/news`, siteName: 'Lumyn Technologies Blog', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'News | Lumyn Technologies Blog', description: 'Company news, events, launches, and updates from Lumyn Technologies.' },
}

interface NewsPageProps {
  params: Promise<{ page?: string }>
}

export async function generateStaticParams() {
  const totalPages = getTotalPages(news.length)
  return Array.from({ length: totalPages }, (_, i) => ({ page: String(i + 1) }))
}

export default async function NewsPage({ params }: NewsPageProps) {
  const resolvedParams = await params
  const page = Number(resolvedParams.page) || 1
  const totalPages = getTotalPages(news.length)
  const currentPage = Math.min(Math.max(1, page), totalPages)
  
  const paginatedNews = paginate(news, currentPage)
  const pagination = getPaginationData(currentPage, totalPages)
  
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    listItem: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'News', item: `${SITE}/news` },
    ],
  }
  
  return (
    <SiteShell>
      <main className="listing-page wrap">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <div className="listing-intro">
          <span className="section-label">Newsroom / 01</span>
          <h1>What's<br /><em>happening.</em></h1>
          <p>Announcements, events, and updates from the Lumyn team and the communities we build with.</p>
        </div>
        <div className="listing-bar">
          <span>{news.length} updates</span>
          <span>Company · Events · Community</span>
        </div>
        <div className="card-grid">
          {paginatedNews.map((item) => <ContentCard key={item.slug} item={item} />)}
        </div>
        {totalPages > 1 && (
          <nav className="pagination" aria-label="News pagination">
            {pagination.hasPrev && (
              <a href={currentPage === 2 ? '/news' : `/news/page/${pagination.prevPage}`} className="page-link prev" rel="prev">
                ← Previous
              </a>
            )}
            <div className="page-numbers" aria-label="Page numbers">
              {pagination.pages.map((item, idx) => 
                item === 'ellipsis' ? (
                  <span key={`ellipsis-${idx}`} className="page-ellipsis" aria-hidden="true">…</span>
                ) : (
                  <a
                    key={item}
                    href={item === 1 ? '/news' : `/news/page/${item}`}
                    className={`page-link ${item === currentPage ? 'current' : ''}`}
                    aria-current={item === currentPage ? 'page' : undefined}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
            {pagination.hasNext && (
              <a href={`/news/page/${pagination.nextPage}`} className="page-link next" rel="next">
                Next →
              </a>
            )}
          </nav>
        )}
      </main>
    </SiteShell>
  )
}