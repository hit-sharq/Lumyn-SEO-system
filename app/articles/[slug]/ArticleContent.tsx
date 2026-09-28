'use client'

import { TableOfContents, useTableOfContents } from '@/components/table-of-contents'
import Link from 'next/link'
import { content, authors } from '@/lib/content'
import { RelatedArticles } from '@/components/related-articles'

const OPEN_TAG = String.fromCharCode(60) + 'strong>'
const CLOSE_TAG = String.fromCharCode(60, 47, 115, 116, 114, 111, 110, 103, 62)

function BodyParagraph({ text, headingId }: { text: string; headingId?: string }) {
  const idx = text.indexOf(CLOSE_TAG)
  if (text.startsWith(OPEN_TAG) && idx > -1) {
    const heading = text.slice(OPEN_TAG.length, idx)
    const rest = text.slice(idx + CLOSE_TAG.length)
    return (
      <div>
        <h3 id={headingId} className="article-h3">{heading}</h3>
        {rest && <p className="article-lead" dangerouslySetInnerHTML={{ __html: rest }} />}
      </div>
    )
  }
  return <p dangerouslySetInnerHTML={{ __html: text }} />
}

function AuthorBio({ authorName }: { authorName: string }) {
  const author = authors[authorName]
  if (!author) return null

  return (
    <div className="author-bio">
      <div className="author-bio-header">
        <div className="author-avatar">
          {author.avatar ? (
            <img src={author.avatar} alt={author.name} />
          ) : (
            <span>{author.name.charAt(0)}</span>
          )}
        </div>
        <div className="author-info">
          <h4>{author.name}</h4>
          <p className="author-role">{author.role}</p>
        </div>
      </div>
      <p className="author-bio-text">{author.bio}</p>
      <div className="author-expertise">
        {author.expertise.map((skill, i) => (
          <span key={i} className="expertise-tag">{skill}</span>
        ))}
      </div>
      {author.twitter && (
        <a href={author.twitter} target="_blank" rel="noopener" className="author-link">
          Twitter
        </a>
      )}
      {author.linkedin && (
        <a href={author.linkedin} target="_blank" rel="noopener" className="author-link">
          LinkedIn
        </a>
      )}
    </div>
  )
}

function ComparisonTable({ table }: { table: NonNullable<typeof content[0]['comparisonTable']> }) {
  return (
    <div className="comparison-table-wrapper">
      <table className="comparison-table">
        <caption>{table.caption}</caption>
        <thead>
          <tr>
            {table.headers.map((header, i) => (
              <th key={i} scope="col">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => {
                const isHeader = cellIndex === 0
                const cellContent = typeof cell === 'object' ? cell.value : cell
                const highlight = typeof cell === 'object' && cell.highlight
                return (
                  <td key={cellIndex} className={highlight ? 'highlight' : ''}>
                    {isHeader ? <strong>{cellContent}</strong> : cellContent}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Table',
            caption: table.caption,
            headerRow: table.headers,
            rows: table.rows.map(row => row.map(cell => typeof cell === 'object' ? cell.value : cell)),
          }),
        }}
      />
    </div>
  )
}

export function ArticleContent({ item }: { item: typeof content[0] }) {
  const headings = useTableOfContents(item.content)
  let headingIndex = 0

  return (
    <div className="article-layout">
      <aside className="article-sidebar">
        {headings.length >= 3 && <TableOfContents headings={headings} />}
      </aside>
      <div className="article-main">
        <div className="article-body">
          {item.content.map((paragraph, i) => {
            const isHeading = paragraph.startsWith(OPEN_TAG) && paragraph.indexOf(CLOSE_TAG) > -1
            const headingId = isHeading ? headings[headingIndex++]?.id : undefined
            return <BodyParagraph key={i} text={paragraph} headingId={headingId} />
          })}
          {item.comparisonTable && <ComparisonTable table={item.comparisonTable} />}
          <h2>Build what comes next</h2>
          <p>Want to explore what these ideas could mean for your business? <Link href="/contact">Start a conversation with our team.</Link></p>
        </div>
        <AuthorBio authorName={item.author} />
        <RelatedArticles currentSlug={item.slug} currentCluster={item.cluster} currentRelatedSlugs={item.relatedSlugs || []} />
      </div>
    </div>
  )
}