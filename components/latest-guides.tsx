import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import { getAllPosts } from "@/lib/blog"

export function LatestGuides() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">IPTV Guides</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Latest Guides & Reviews</h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            View all guides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-card/50 border border-border rounded-2xl p-5 flex flex-col hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <span className="text-xs font-medium text-primary mb-3">{post.category}</span>
              <h3 className="text-base font-semibold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 flex-grow mb-4">
                {post.description}
              </p>
              <div className="flex items-center gap-1 text-primary text-sm font-medium mt-auto">
                Read guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
            View all guides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
