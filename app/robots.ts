import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://lumyn.co.ke/sitemap.xml',
    host: 'https://lumyn.co.ke',
  }
}
