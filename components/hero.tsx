import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, MessageCircle, Tv, Film, Sparkles } from "lucide-react"

const stats = [
  { icon: Tv, value: "40,000+", label: "Live Channels" },
  { icon: Film, value: "100,000+", label: "VOD Content" },
  { icon: Sparkles, value: "4K", label: "Ultra HD Quality" },
]

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
          <span className="inline-flex rounded-full h-2 w-2 bg-primary"></span>
          <span className="text-sm text-primary font-medium">#1 Apollo Group IPTV Service in 2026</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          Apollo TV IPTV — #1 Rated
          <span className="block text-primary">IPTV Subscription 2026</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
          The best <strong className="text-foreground">apollo iptv service</strong> with 40,000+ live channels, 100,000+ VODs, and crystal-clear 4K streaming. Works on FireStick, Smart TV, Android, iOS & more — instant activation included.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
            <Link href="/#pricing">
              <Play className="w-5 h-5 mr-2" />
              View Pricing
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-green-600 text-white hover:bg-green-700 text-lg px-8 py-6">
            <Link href="https://wa.me/212622892003" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Free Trial
            </Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mb-16">No credit card required · Try apollo iptv test free for 24h · Cancel anytime</p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card/80 border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
