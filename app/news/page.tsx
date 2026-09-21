import { SiteShell } from '@/components/site-shell'
import { ContentCard } from '@/components/content-card'
import { news } from '@/lib/content'
export const metadata = { title: 'News | Lumyn Technologies', description: 'Company news, events, launches, and updates from Lumyn Technologies.' }
export default function NewsPage() { return <SiteShell><main className="listing-page wrap"><div className="listing-intro"><span className="section-label">Newsroom / 01</span><h1>What&apos;s<br /><em>happening.</em></h1><p>Announcements, events, and updates from the Lumyn team and the communities we build with.</p></div><div className="listing-bar"><span>{news.length} updates</span><span>Company · Events · Community</span></div><div className="card-grid">{news.map((item) => <ContentCard key={item.slug} item={item} />)}</div></main></SiteShell> }
