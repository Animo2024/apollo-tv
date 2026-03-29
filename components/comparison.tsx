import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, X, ChevronRight } from "lucide-react"

const features = [
  { label: "Anti-Freeze IPTV Technology", apollo: "✓ Always smooth", others: "Often freezes" },
  { label: "4K / UHD IPTV Streaming Quality", apollo: "✓ Full 4K / UHD", others: "HD only or limited" },
  { label: "Instant IPTV Activation", apollo: "✓ Few minutes", others: "Up to 24–48h wait" },
  { label: "Electronic Program Guide (EPG)", apollo: "✓ Full EPG included", others: "Rarely included" },
  { label: "40,000+ Live IPTV Channels", apollo: "✓ 40,000+ channels", others: "5,000–15,000 avg" },
  { label: "100,000+ VOD Movies & Series", apollo: "✓ 100,000+ titles", others: "Limited library" },
  { label: "Catch-Up TV & Replay Feature", apollo: "✓ Included", others: "Not available" },
  { label: "24/7 Premium IPTV Support", apollo: "✓ 24/7 live support", others: "Slow or no support" },
  { label: "99.9% IPTV Server Uptime", apollo: "✓ 99.9% uptime", others: "Frequent downtime" },
  { label: "Multi-Device IPTV Streaming", apollo: "✓ Up to 5 devices", others: "1–2 devices only" },
  { label: "7-Day IPTV Money Back Guarantee", apollo: "✓ Full refund", others: "No refund policy" },
]

const advantages = [
  "Apollo TV IPTV uses enterprise-grade servers that eliminate buffering — even during peak hours and live sports events.",
  "Get access to every channel, VOD, and feature the moment your payment is confirmed — no waiting, no delays.",
  "Our dedicated 24/7 support team responds in minutes via WhatsApp, so you're never left without help.",
  "One subscription covers up to 5 devices simultaneously — perfect for the whole family.",
  "We back every plan with a 7-day money-back guarantee. If you're not satisfied, you get a full refund — no questions asked.",
]

export function Comparison() {
  return (
    <section id="comparison" className="py-20 bg-secondary/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* H2 Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Why Choose{" "}
            <span className="text-primary">Apollo TV IPTV</span>{" "}
            Over Other IPTV Providers?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Not all IPTV services are built the same. Apollo TV IPTV delivers a{" "}
            <strong className="text-foreground">premium IPTV service</strong> that combines
            cutting-edge technology, an unmatched channel library, and round-the-clock support —
            all at a price that beats the competition. If you&apos;re looking for the{" "}
            <strong className="text-foreground">best IPTV subscription in 2026</strong>, the
            comparison below makes the choice clear.
          </p>
        </div>

        {/* H3 Comparison Table */}
        <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
          Apollo TV IPTV vs Other IPTV Providers — Feature Comparison
        </h3>

        <div className="overflow-x-auto rounded-2xl border border-border mb-14">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-2 sm:px-5 py-3 sm:py-4 text-foreground font-semibold w-1/2">
                  Feature
                </th>
                <th className="px-2 sm:px-5 py-3 sm:py-4 text-center font-bold text-primary">
                  Apollo TV IPTV
                </th>
                <th className="px-2 sm:px-5 py-3 sm:py-4 text-center font-semibold text-muted-foreground">
                  Other Providers
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-card/30" : "bg-background"}
                >
                  <td className="px-2 sm:px-5 py-2 sm:py-3.5 text-muted-foreground font-medium">
                    {row.label}
                  </td>
                  <td className="px-2 sm:px-5 py-2 sm:py-3.5 text-center">
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 text-green-400 font-medium">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="hidden sm:inline">{row.apollo.replace("✓ ", "")}</span>
                    </span>
                  </td>
                  <td className="px-2 sm:px-5 py-2 sm:py-3.5 text-center">
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 text-red-400 font-medium">
                      <X className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="hidden sm:inline">{row.others}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* H3 Key Advantages */}
        <h3 className="text-xl font-semibold text-foreground mb-5 text-center">
          Key Advantages of Apollo TV IPTV
        </h3>

        <ul className="space-y-3 max-w-3xl mx-auto mb-12">
          {advantages.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to experience the{" "}
            <strong className="text-foreground">best IPTV service in 2026</strong>?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
          >
            <Link href="#pricing">
              Start Your Apollo TV IPTV Subscription Today
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
