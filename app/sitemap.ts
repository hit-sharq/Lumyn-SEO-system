import type { MetadataRoute } from 'next'
import { content } from '@/lib/content'

const siteUrl = 'https://blogs.lumyn.co.ke'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/articles`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/news`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ]

  const contentRoutes: MetadataRoute.Sitemap = content.map((item) => ({
    url: `${siteUrl}/${item.type === 'article' ? 'articles' : 'news'}/${item.slug}`,
    lastModified: new Date(item.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...contentRoutes]
}
