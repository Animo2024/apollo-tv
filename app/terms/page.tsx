import Link from "next/link"
import { Zap } from "lucide-react"

export const metadata = {
  title: "Terms of Service | Apollo TV IPTV",
  description: "Read the Terms of Service for Apollo TV IPTV. Subscription rules, acceptable use, payment terms, and your rights as an Apollo IPTV subscriber.",
  alternates: { canonical: "https://apollotviptv.com/terms" },
  openGraph: {
    title: "Terms of Service | Apollo TV IPTV",
    description: "Read the Terms of Service for Apollo TV IPTV — subscription rules, acceptable use, and your rights.",
    url: "https://apollotviptv.com/terms",
    siteName: "Apollo TV IPTV",
    type: "website",
    images: [{ url: "https://apollotviptv.com/og-image.png", width: 1200, height: 630, alt: "Apollo TV IPTV Terms of Service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Apollo TV IPTV",
    description: "Read the Terms of Service for Apollo TV IPTV — subscription rules and your rights.",
    images: ["https://apollotviptv.com/og-image.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Service | Apollo TV IPTV",
  url: "https://apollotviptv.com/terms",
  isPartOf: { "@id": "https://apollotviptv.com/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://apollotviptv.com" },
      { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://apollotviptv.com/terms" },
    ],
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="border-b border-border py-4 px-6">
        <Link href="/" className="inline-flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground">
            Apollo <span className="text-primary">TV</span>
          </span>
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-foreground mb-2">Apollo TV IPTV — Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: March 26, 2026</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>
              By subscribing to or using Apollo TV IPTV services, you agree to be bound by these
              Terms of Service. If you do not agree to these terms, do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Service Description</h2>
            <p>
              Apollo TV IPTV provides access to live television channels and video-on-demand content
              via internet protocol. The service is intended for personal, non-commercial use only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Subscription & Payment</h2>
            <p>
              Subscriptions are sold as one-time purchases for the duration selected (1, 3, 6, or 12
              months). Payment is processed before service activation. Prices are listed in USD and
              are subject to change with prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Share your subscription credentials with others outside your household</li>
              <li>Use the service for redistribution or public broadcasting</li>
              <li>Attempt to reverse-engineer or circumvent any technical measures</li>
              <li>Use the service for any unlawful purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Service Availability</h2>
            <p>
              We strive for 99.9% uptime but do not guarantee uninterrupted service. Scheduled
              maintenance, network issues, or events outside our control may cause temporary
              disruptions. No refunds are issued for brief service interruptions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your subscription without refund if you
              violate these terms, including unauthorized sharing or commercial use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Limitation of Liability</h2>
            <p>
              Apollo TV IPTV is not liable for any indirect, incidental, or consequential damages
              arising from your use of the service. Our total liability is limited to the amount paid
              for your current subscription period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Contact</h2>
            <p>
              For questions about these terms, contact us at{" "}
              <Link
                href="mailto:apollotvip@gmail.com"
                className="text-primary hover:underline"
              >
                apollotvip@gmail.com
              </Link>{" "}
              or via WhatsApp at{" "}
              <Link
                href="https://wa.me/212622892003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                +212 622 892 003
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/" className="text-primary hover:underline text-sm">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}
