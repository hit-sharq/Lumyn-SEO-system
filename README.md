# Lumyn Technologies – News & Articles Content Management System

## 📚 Overview

A professional, SEO-optimized content management system for publishing news and articles. Built with Next.js 16, Tailwind CSS, and TypeScript. Designed to boost SEO rankings through proper content structure, metadata management, and modern web standards.

---

## ✨ Key Features

### 📰 Content Management
- **Organized Structure**: Separate `/articles` and `/news` directories for easy content updates
- **Dynamic Content Pages**: Automatically generated article/news pages with full metadata
- **Rich Article Cards**: Grid layouts with images, excerpts, read-more links, and share buttons
- **Category Tagging**: Articles grouped by category for better navigation
- **Featured Articles**: Highlight top articles on homepage

### 🔍 SEO Optimization
- **Meta Tags**: Title, description, keywords for every page
- **Open Graph Tags**: Social media preview cards (Twitter, Facebook, LinkedIn)
- **Structured Data (Schema.org)**: JSON-LD for articles, organization, breadcrumbs
- **Sitemap Support**: XML sitemap for search engines
- **Responsive Meta Viewport**: Mobile-first indexing support
- **Canonical URLs**: Prevent duplicate content issues
- **Optimized Headlines**: Proper H1, H2, H3 hierarchy

### 🎨 Design System
- **Lumyn-Inspired Dark Modern Theme**: Enterprise-grade aesthetic
- **Responsive Layout**: Mobile, tablet, desktop optimization
- **Performance**: Image optimization, lazy loading, code splitting
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Smooth Animations**: Hover effects, scroll reveals, transitions

### 📄 Page Structure
- **Homepage**: Hero, featured articles section, trending topics, CTA
- **Articles Listing**: Paginated grid with filters and search
- **News Listing**: Breaking news section with timestamps
- **Article Detail**: Full article with author, date, tags, related articles
- **Category Pages**: Filter by topic/category
- **Contact/Newsletter**: Email signup integration

### 🛠️ Developer Features
- **TypeScript**: Full type safety
- **Component Structure**: Reusable UI components
- **Image Management**: `/public/images` and `/public/svg` folders
- **Data Models**: Structured content format
- **Admin Panel**: Create/edit/delete articles (expandable)
- **Social Sharing**: Share buttons with pre-filled content

---

## 📁 Project Structure

```
lumyn-cms/
├── app/
│   ├── layout.tsx                 # Root layout with Header/Footer
│   ├── globals.css                # Global styles
│   ├── page.tsx                   # Homepage
│   ├── articles/                  # Articles section
│   │   ├── page.tsx              # Articles listing
│   │   ├── [slug]/               # Individual article
│   │   │   └── page.tsx
│   │   └── sitemap.ts            # Dynamic sitemap
│   ├── news/                      # News section
│   │   ├── page.tsx              # News listing
│   │   ├── [slug]/               # Individual news item
│   │   │   └── page.tsx
│   │   └── sitemap.ts            # Dynamic sitemap
│   ├── category/                 # Category filter pages
│   │   └── [category]/
│   │       └── page.tsx
│   ├── api/                      # API routes
│   │   ├── articles/
│   │   │   ├── route.ts          # GET/POST articles
│   │   │   └── [id]/
│   │   │       └── route.ts      # GET/PUT/DELETE single article
│   │   └── news/
│   │       ├── route.ts
│   │       └── [id]/
│   │           └── route.ts
│   └── admin/                    # Admin section (optional)
│       ├── layout.tsx
│       ├── page.tsx
│       ├── articles/
│       │   ├── page.tsx
│       │   └── [id]/page.tsx
│       └── news/
│           ├── page.tsx
│           └── [id]/page.tsx
├── components/
│   ├── Header.tsx                # Main navigation header
│   ├── Footer.tsx                # Footer with links
│   ├── ArticleCard.tsx           # Article card component
│   ├── NewsCard.tsx              # News card component
│   ├── ShareButtons.tsx          # Social share component
│   ├── SearchBar.tsx             # Article search
│   ├── CategoryFilter.tsx        # Category filtering
│   ├── RelatedArticles.tsx       # Related articles section
│   └── ui/                       # shadcn/ui components
│       └── ...
├── lib/
│   ├── data/                     # Data management
│   │   ├── articles.ts           # Article data
│   │   └── news.ts               # News data
│   ├── seo.ts                    # SEO utilities
│   ├── schema.ts                 # JSON-LD schema generation
│   └── utils.ts
├── public/
│   ├── images/                   # Article images
│   │   └── .gitkeep
│   ├── svg/                      # SVG icons/logos
│   │   ├── logo.svg
│   │   ├── share-linkedin.svg
│   │   ├── share-twitter.svg
│   │   └── ...
│   └── ...
├── types/
│   └── index.ts                  # TypeScript types
├── styles/
│   └── animations.css            # Animation utilities
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
cd lumyn-cms

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000
```

### Create Your First Article

1. **Add article data** to `lib/data/articles.ts`:
```typescript
export const articles = [
  {
    id: "why-seo-matters",
    title: "Why SEO Matters for Your Business",
    slug: "why-seo-matters",
    excerpt: "A comprehensive guide to improving your search rankings...",
    content: "Full article content here...",
    category: "SEO",
    author: "John Doe",
    date: "2026-09-21",
    image: "/images/seo-guide.jpg",
    tags: ["SEO", "Marketing", "Growth"],
    readTime: "5 min read"
  }
];
```

2. **Add images** to `/public/images/`
3. **Visit** `/articles` to see your content

---

## 🔧 Configuration

### SEO Settings
Edit `app/layout.tsx` to customize:
- Site title and description
- Meta keywords
- Open Graph defaults
- Twitter card settings

### Theme Colors
Update colors in `app/globals.css`:
- Primary color: `--signal: #ff4d00`
- Background: `--white: #ffffff`
- Text: `--black: #0a0a0a`

---

## 📝 Article Data Model

```typescript
interface Article {
  id: string;                    // Unique identifier
  slug: string;                  // URL-friendly version
  title: string;                 // Article title (for H1 and meta)
  excerpt: string;              // Short description (for preview)
  content: string;              // Full article content
  category: string;             // Article category
  author: string;               // Author name
  date: string;                 // Publication date (YYYY-MM-DD)
  image: string;                // Featured image path
  tags: string[];               // Topic tags for filtering
  readTime: string;             // Estimated read time
  metaDescription?: string;     // Custom meta description
  ogImage?: string;             // OpenGraph image (defaults to image)
}
```

---

## 🎯 SEO Best Practices Implemented

### ✅ On-Page SEO
- **Title Tags**: Unique, descriptive, 50-60 characters
- **Meta Descriptions**: Compelling, 150-160 characters
- **Header Structure**: Proper H1 → H2 → H3 hierarchy
- **Image Alt Text**: Descriptive alt tags for accessibility
- **Internal Linking**: Related articles and category pages
- **Keyword Optimization**: Natural keyword placement

### ✅ Technical SEO
- **Meta Robots**: Crawlable index tags
- **Canonical URLs**: Prevent duplicate content
- **Structured Data**: JSON-LD for articles and organization
- **Sitemap**: Auto-generated XML sitemap for robots.txt
- **Mobile Optimization**: Responsive design
- **Page Speed**: Optimized images and code splitting
- **Security**: HTTPS by default on Vercel

### ✅ Social SEO
- **Open Graph Tags**: Facebook, LinkedIn, Pinterest previews
- **Twitter Cards**: Twitter-specific card type
- **Sharing Buttons**: One-click social sharing
- **Social Meta**: Author, date, category for social context

### ✅ Content SEO
- **Fresh Content**: Regular article publication
- **Content Quality**: Well-structured, comprehensive articles
- **Word Count**: Recommended 1,500+ words for blog posts
- **Internal Links**: Reference related articles
- **External Links**: Authoritative sources cited
- **Readability**: Short paragraphs, bullet points, subheadings

---

## 📊 Content Guidelines

### Article Structure
```
Title (H1)
├─ Meta Description (160 chars)
├─ Hero Image (1200x630px recommended)
├─ Author & Date
├─ Table of Contents (optional)
├─ Introduction (50-100 words)
├─ Main Content
│  ├─ Section 1 (H2)
│  ├─ Section 2 (H2)
│  └─ Section 3 (H2)
├─ Key Takeaways
├─ Call-to-Action
└─ Related Articles
```

### Image Requirements
- **Featured Image**: 1200×630px (1.9:1 ratio for OG)
- **Thumbnail**: 400×250px (16:10 ratio)
- **Inline Images**: Max width 800px
- **Format**: WebP preferred, JPEG fallback
- **Alt Text**: Descriptive, includes keywords

---

## 🔗 API Routes

### Articles API
```
GET    /api/articles           # List all articles
POST   /api/articles           # Create new article
GET    /api/articles/[id]      # Get single article
PUT    /api/articles/[id]      # Update article
DELETE /api/articles/[id]      # Delete article
```

### News API
```
GET    /api/news               # List all news
POST   /api/news               # Create new item
GET    /api/news/[id]          # Get single item
PUT    /api/news/[id]          # Update item
DELETE /api/news/[id]          # Delete item
```

---

## 📱 Social Sharing

### Share Button Integration
```typescript
// Share button generates URLs like:
// Twitter:    https://twitter.com/intent/tweet?text=...&url=...
// LinkedIn:   https://www.linkedin.com/sharing/share-offsite/?url=...
// Facebook:   https://www.facebook.com/sharer/sharer.php?u=...
// Email:      mailto:?subject=...&body=...
```

---

## 🎨 UI Components

### ArticleCard Component
- Image with hover zoom effect
- Category badge
- Title and excerpt
- Author and read time
- Tags
- "Read More" link
- Share button

### NewsCard Component
- Compact breaking news format
- Timestamp with relative time
- Quick excerpt
- Direct link
- "Share" quick button

### ShareButtons Component
- Twitter, LinkedIn, Facebook, Email
- Copy link to clipboard
- Dynamic share text generation

---

## 🚀 Deployment

### Deploy to Vercel

```bash
# Push to GitHub
git add .
git commit -m "Initial commit: News & Articles CMS"
git push origin main

# Deploy on Vercel dashboard
# https://vercel.com/new
```

### Environment Variables
No environment variables needed for basic setup. Optional:
```
NEXT_PUBLIC_SITE_URL=https://lumyn.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

---

## 📈 Growth Tips

1. **Publish Regularly**: 1-2 articles per week for algorithm boost
2. **Keyword Research**: Target 20-100 search volume keywords
3. **Link Building**: Internal linking to related articles
4. **Update Old Content**: Refresh popular articles annually
5. **Promote on Social**: Share articles on company social media
6. **Newsletter**: Email subscribers about new content
7. **Schema Markup**: Google rewards structured data

---

## 🤝 Contributing

Feel free to expand this system with:
- Database integration (Supabase, PostgreSQL)
- Admin dashboard UI improvements
- Comment system
- Author profiles
- Advanced analytics
- AMP versions
- Multilingual support

---

## 📄 License

MIT License - See LICENSE file for details

---

## 🆘 Support

For questions or issues:
1. Check the documentation above
2. Review component usage in `/components`
3. Check example articles in `/lib/data`

---

**Built with ❤️ for Lumyn Technologies**  
*Bringing enterprise-grade content management to your digital presence.*
