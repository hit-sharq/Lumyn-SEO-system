import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://lumyn.co.ke'),
  title: { default: 'Lumyn Technologies | Building Tomorrow’s Technology', template: '%s | Lumyn Technologies' },
  description: 'Lumyn Technologies is a Nairobi-based digital innovation studio building enterprise-grade software, products, and experiences.',
  keywords: ['Lumyn Technologies', 'software development Kenya', 'digital innovation Nairobi', 'M-Pesa integration', 'AI products'],
  openGraph: { title: 'Lumyn Technologies | Building Tomorrow’s Technology', description: 'Digital products and platforms for businesses ready to move faster than their market.', url: 'https://lumyn.co.ke', siteName: 'Lumyn Technologies', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Lumyn Technologies', description: 'Building tomorrow’s technology.' },
  generator: 'Next.js',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
