import { SiteShell } from '@/components/site-shell'

export default function AdvertisePage() {
  return (
    <SiteShell>
      <div style={{ padding: '100px 32px', maxWidth: '1280px', margin: '0 auto' }}>
        <h1>Advertise on the Lumyn Blog</h1>
        <p>The Lumyn blog reaches Kenyan business owners, engineers, and product teams.</p>
        <h2>Recent sponsored articles</h2>
        <ul>
          <li><a href="/articles/crypto-law-kenya-business-guide">Crypto and Digital Currency Law in Kenya</a></li>
          <li><a href="/articles/business-banking-kenya-sme-2026">Business Banking for Kenyan SMEs</a></li>
          <li><a href="/articles/pakakumi-kenya-crash-game-platform">Pakakumi: Kenya's Crash Game</a></li>
        </ul>
      </div>
    </SiteShell>
  )
}
