import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react"
import { getAllPosts } from "@/lib/blog"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { EmailButton } from "@/components/email-button"

export const metadata: Metadata = {
  title: "Apollo TV IPTV Blog — Tips, Guides & IPTV News",
  description: "Read the latest IPTV guides, setup tutorials, and tips from the Apollo TV team. Learn how to get the most from your IPTV subscription.",
  alternates: { canonical: "https://apollotviptv.com/blog" },
  openGraph: {
    title: "Apollo TV IPTV Blog — Tips, Guides & IPTV News",
    description: "IPTV guides, setup tutorials, and tips from the Apollo TV team.",
    url: "https://apollotviptv.com/blog",
    siteName: "Apollo TV IPTV",
    type: "website",
    images: [{ url: "https://apollotviptv.com/og-image.png", width: 1200, height: 630, alt: "Apollo TV IPTV Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apollo TV IPTV Blog",
    description: "IPTV guides, setup tutorials, and tips from the Apollo TV team.",
    images: ["https://apollotviptv.com/og-image.png"],
  },
}

const blogJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://apollotviptv.com/blog",
      name: "Apollo TV IPTV Blog",
      url: "https://apollotviptv.com/blog",
      description: "IPTV guides, setup tutorials, reviews, and tips for Apollo TV IPTV subscribers.",
      publisher: { "@type": "Organization", name: "Apollo TV IPTV", url: "https://apollotviptv.com" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://apollotviptv.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://apollotviptv.com/blog" },
      ],
    },
  ],
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Hero */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Apollo TV IPTV <span className="text-primary">Guides & Reviews (2026)</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            IPTV guides, setup tutorials, reviews, and tips to get the most from your subscription.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-card/50 border border-border rounded-2xl p-6 flex flex-col hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Category */}
              <div className="flex items-center gap-1.5 mb-4">
                <Tag className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-primary">{post.category}</span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow line-clamp-3">
                {post.description}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4 mt-auto">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 mt-3 text-primary text-sm font-medium">
                Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <EmailButton />
    </div>
  )
}
