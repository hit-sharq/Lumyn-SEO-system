import Link from 'next/link'
import { content, getContent } from '@/lib/content'

interface RelatedArticlesProps {
  currentSlug: string
  currentCluster?: string
  currentRelatedSlugs?: string[]
}

export function RelatedArticles({ currentSlug, currentCluster, currentRelatedSlugs = [] }: RelatedArticlesProps) {
  // First priority: explicitly defined related slugs
  const explicitRelated = currentRelatedSlugs
    .map((slug) => getContent(slug))
    .filter((item): item is typeof content[0] => item !== undefined && item.slug !== currentSlug)

  // Second priority: same cluster articles
  const clusterRelated = currentCluster
    ? content.filter(
        (item) =>
          item.type === 'article' &&
          item.cluster === currentCluster &&
          item.slug !== currentSlug &&
          !currentRelatedSlugs.includes(item.slug)
      )
    : []

  // Combine and limit to 3
  const allRelated = [...explicitRelated, ...clusterRelated].slice(0, 3)

  if (allRelated.length === 0) return null

  return (
    <section className="related-articles" aria-labelledby="related-heading">
      <h2 id="related-heading" className="related-title">Read next</h2>
      <div className="related-grid">
        {allRelated.map((item) => (
          <Link key={item.slug} href={`/articles/${item.slug}`} className="related-card">
            <div className="related-card-image">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
            <div className="related-card-body">
              <span className="related-category">{item.category}</span>
              <h3 className="related-card-title">{item.title}</h3>
              <p className="related-card-excerpt">{item.excerpt}</p>
              <div className="related-card-meta">
                <span>{item.readTime}</span>
                <span>By {item.author}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}