import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { EmailButton } from "@/components/email-button"
import { ShareButtons } from "@/components/share-buttons"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Apollo TV IPTV`,
    description: post.description,
    ...(post.keywords ? { keywords: post.keywords } : {}),
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: { canonical: `https://apollotviptv.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://apollotviptv.com/blog/${slug}`,
      siteName: "Apollo TV IPTV",
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      section: post.category,
      tags: post.keywords?.split(",").map((k) => k.trim()) ?? [],
      images: [{ url: "https://apollotviptv.com/og-image.png", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["https://apollotviptv.com/og-image.png"],
    },
  }
}

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold text-foreground mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold text-foreground mt-6 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-muted-foreground leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-primary hover:underline font-medium" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-secondary text-primary px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-secondary rounded-xl p-2 sm:p-4 overflow-x-auto mb-4 text-xs sm:text-sm font-mono" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-8 rounded-xl border border-border shadow-sm">
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-primary/10 text-foreground" {...props} />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-border whitespace-nowrap" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 text-muted-foreground border-b border-border" {...props} />
  ),
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className="[&>tr:nth-child(even)]:bg-secondary/30 [&>tr:last-child>td]:border-b-0" {...props} />
  ),
  hr: () => <hr className="border-border my-8" />,
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        author: { "@type": "Organization", name: post.author, url: "https://apollotviptv.com" },
        publisher: { "@type": "Organization", name: "Apollo TV IPTV", url: "https://apollotviptv.com" },
        url: `https://apollotviptv.com/blog/${slug}`,
        mainEntityOfPage: { "@type": "WebPage", "@id": `https://apollotviptv.com/blog/${slug}` },
        image: { "@type": "ImageObject", url: "https://apollotviptv.com/og-image.png", width: 1200, height: 630 },
        inLanguage: "en-US",
        isPartOf: { "@type": "Blog", "@id": "https://apollotviptv.com/blog", name: "Apollo TV IPTV Blog" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://apollotviptv.com" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://apollotviptv.com/blog" },
          { "@type": "ListItem", position: 3, name: post.title, item: `https://apollotviptv.com/blog/${slug}` },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-1.5 mb-4">
            <Tag className="w-3.5 h-3.5 text-primary" />
            <span className="text-sm font-medium text-primary">{post.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight text-balance">
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-t border-b border-border py-4">
            <span className="font-medium text-foreground">{post.author}</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured AI Image */}
        <div className="mb-10 rounded-2xl overflow-hidden border border-border">
          <Image
            src={`/blog/${slug}.jpg`}
            alt={`${post.title} — Apollo TV IPTV`}
            width={1200}
            height={630}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* MDX Content */}
        <article className="prose-sm max-w-none">
          <MDXRemote source={post.content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </article>

        {/* Share Buttons */}
        <ShareButtons url={`https://apollotviptv.com/blog/${slug}`} title={post.title} />

        {/* CTA */}
        <div className="mt-14 p-6 bg-primary/10 border border-primary/20 rounded-2xl text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">Ready to Start Streaming?</h3>
          <p className="text-muted-foreground mb-4 text-sm">Get access to 40,000+ channels and 100,000+ VODs today.</p>
          <Link
            href="/#pricing"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View Plans & Pricing
          </Link>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <EmailButton />
    </div>
  )
}
