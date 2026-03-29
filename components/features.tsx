import { Zap, MonitorPlay, ShieldCheck, Headphones } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Zero Buffering",
    description: "Our advanced anti-freeze technology ensures smooth streaming with no interruptions, even during peak hours.",
  },
  {
    icon: MonitorPlay,
    title: "Ultra-HD Quality",
    description: "Experience crystal-clear 4K streaming with HDR support for the best possible picture quality.",
  },
  {
    icon: ShieldCheck,
    title: "Money-Back Guarantee",
    description: "Not satisfied? Get a full refund within 7 days. We're confident you'll love our service.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to help you with any questions or issues.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Apollo TV IPTV is the Best IPTV Service in 2026
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Apollo TV IPTV delivers a premium IPTV service built on enterprise-grade technology — faster, more reliable, and more complete than any other IPTV subscription.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card/50 border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
