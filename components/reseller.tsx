import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, DollarSign, LayoutDashboard, Headphones, TrendingUp, Users } from "lucide-react"

const perks = [
  {
    icon: DollarSign,
    title: "Wholesale IPTV Pricing",
    desc: "Get the best reseller rates in the industry. Buy credits at wholesale prices and set your own margins for maximum profit.",
  },
  {
    icon: LayoutDashboard,
    title: "Dedicated Reseller Panel",
    desc: "Manage all your clients from one powerful dashboard. Create, renew, and suspend accounts in seconds.",
  },
  {
    icon: Headphones,
    title: "24/7 Priority Support",
    desc: "As an Apollo TV reseller, you get dedicated priority support around the clock — so your clients are always happy.",
  },
  {
    icon: TrendingUp,
    title: "Fastest-Growing Program in 2026",
    desc: "Join the fastest-growing Apollo TV IPTV reseller network and scale your business with zero technical headaches.",
  },
  {
    icon: Users,
    title: "Unlimited Clients",
    desc: "No cap on the number of clients you can manage. Grow your reseller business as big as you want.",
  },
]

export function Reseller() {
  return (
    <section id="reseller" className="py-20 bg-secondary/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <span className="text-sm text-primary font-medium">Reseller Program 2026</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Start Your Own IPTV Business with{" "}
            <span className="text-primary">Apollo TV Reseller Program</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Start your own IPTV reseller business with Apollo TV IPTV. Get{" "}
            <strong className="text-foreground">wholesale IPTV pricing</strong>, a dedicated
            reseller panel to manage all your IPTV clients, and{" "}
            <strong className="text-foreground">24/7 priority support</strong>. Join the
            fastest-growing Apollo IPTV reseller program in 2026 and turn streaming into a
            profitable business — no technical experience required.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {perks.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-card/50 border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg px-5 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
          >
            <Link
              href="https://wa.me/212622892003?text=I%20want%20to%20Become%20an%20apollo%20iptv%20Reseller%20program"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Become an Apollo IPTV Reseller
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Our team will get back to you within minutes via WhatsApp.
          </p>
        </div>
      </div>
    </section>
  )
}
