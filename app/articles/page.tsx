import { SiteShell } from '@/components/site-shell'
import { ContentCard } from '@/components/content-card'
import { articles } from '@/lib/content'
export const metadata = { title: 'Articles | Lumyn Technologies', description: 'Perspectives on product, engineering, design, and digital growth from Lumyn Technologies.' }
export default function ArticlesPage() { return <SiteShell><main className="listing-page wrap"><div className="listing-intro"><span className="section-label">The journal / 01</span><h1>Articles that<br /><em>move ideas</em> forward.</h1><p>Practical perspectives from the people building digital products, platforms, and experiences at Lumyn.</p></div><div className="listing-bar"><span>{articles.length} stories</span><span>Product · Engineering · Studio</span></div><div className="card-grid">{articles.map((item) => <ContentCard key={item.slug} item={item} />)}</div></main></SiteShell> }
