import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://blogs.lumyn.co.ke'),
  title: { default: 'Lumyn Technologies Blog | Digital Products, Engineering & Strategy', template: '%s | Lumyn Technologies Blog' },
  description: 'Practical perspectives on product, engineering, design, and digital growth from Lumyn Technologies. Building for Kenya\'s digital economy.',
  keywords: ['Lumyn Technologies', 'software development Kenya', 'digital innovation Nairobi', 'M-Pesa integration', 'Kenyan tech blog', 'product engineering', 'digital transformation Kenya'],
  openGraph: { title: 'Lumyn Technologies Blog', description: 'Practical perspectives on product, engineering, design, and digital growth from Lumyn Technologies.', url: 'https://blogs.lumyn.co.ke', siteName: 'Lumyn Technologies Blog', type: 'website', locale: 'en_KE' },
  twitter: { card: 'summary_large_image', title: 'Lumyn Technologies Blog', description: 'Practical perspectives on product, engineering, design, and digital growth from Lumyn Technologies.' },
  generator: 'Next.js',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://blogs.lumyn.co.ke',
    types: { 'application/rss+xml': '/feed.xml' },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lumyn Technologies',
    url: 'https://www.lumyn.co.ke',
    logo: 'https://www.lumyn.co.ke/favicon-192x192.png',
    description: 'Lumyn Technologies is a Nairobi-based digital innovation studio building enterprise-grade software, products, and experiences.',
    address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
    contactPoint: { '@type': 'ContactPoint', email: 'info@lumyn.co.ke', contactType: 'customer service' },
    sameAs: ['https://twitter.com/lumyntech', 'https://linkedin.com/company/lumyn-technologies', 'https://github.com/lumyn'],
  }
  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Lumyn Technologies Blog',
    url: 'https://blogs.lumyn.co.ke',
    description: 'Practical perspectives on product, engineering, design, and digital growth from Lumyn Technologies.',
    publisher: { '@type': 'Organization', name: 'Lumyn Technologies', logo: { '@type': 'ImageObject', url: 'https://www.lumyn.co.ke/favicon-192x192.png' } },
    mainEntityOfPage: 'https://blogs.lumyn.co.ke',
    inLanguage: 'en-KE',
  }
  return (
    <html lang="en-KE" suppressHydrationWarning>
      <head />
      <body className="antialiased" suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} suppressHydrationWarning={false} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }} suppressHydrationWarning={false} />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}