import Link from "next/link"
import { Zap } from "lucide-react"

export const metadata = {
  title: "Refund Policy | Apollo TV IPTV — 7-Day Money-Back Guarantee",
  description: "Apollo TV IPTV 7-day money-back guarantee. Learn refund eligibility, how to request a refund, and what is covered for subscribers.",
  alternates: { canonical: "https://apollotviptv.com/refund" },
  openGraph: {
    title: "Refund Policy | Apollo TV IPTV — 7-Day Money-Back Guarantee",
    description: "Apollo TV IPTV 7-day money-back guarantee. Learn how to request a refund and what is covered.",
    url: "https://apollotviptv.com/refund",
    siteName: "Apollo TV IPTV",
    type: "website",
    images: [{ url: "https://apollotviptv.com/og-image.png", width: 1200, height: 630, alt: "Apollo TV IPTV Refund Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | Apollo TV IPTV",
    description: "Apollo TV IPTV 7-day money-back guarantee — learn how to request a refund.",
    images: ["https://apollotviptv.com/og-image.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Refund Policy | Apollo TV IPTV",
  url: "https://apollotviptv.com/refund",
  isPartOf: { "@id": "https://apollotviptv.com/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://apollotviptv.com" },
      { "@type": "ListItem", position: 2, name: "Refund Policy", item: "https://apollotviptv.com/refund" },
    ],
  },
}

export default function RefundPage() {
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
        <h1 className="text-3xl font-bold text-foreground mb-2">Apollo TV IPTV — Refund Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: March 26, 2026</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7-Day Money-Back Guarantee</h2>
            <p>
              We stand behind our service with a 7-day money-back guarantee. If you are not
              satisfied with your subscription within 7 days of purchase, contact us and we will
              issue a full refund — no questions asked.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Eligibility</h2>
            <p>To be eligible for a refund:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Your request must be submitted within 7 days of the original purchase date</li>
              <li>Your account must not have violated our Terms of Service</li>
              <li>The refund request must come from the contact used to purchase (email or WhatsApp)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Non-Refundable Situations</h2>
            <p>Refunds will not be issued in the following cases:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Requests made after 7 days from the purchase date</li>
              <li>Subscription suspended for violation of Terms of Service</li>
              <li>Issues caused by your internet connection or device incompatibility</li>
              <li>Renewal purchases (only initial purchases are covered)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">How to Request a Refund</h2>
            <p>To request a refund, contact our support team within 7 days of purchase:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                WhatsApp:{" "}
                <Link
                  href="https://wa.me/212622892003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  +212 622 892 003
                </Link>
              </li>
              <li>
                Email:{" "}
                <Link
                  href="mailto:apollotvip@gmail.com"
                  className="text-primary hover:underline"
                >
                  apollotvip@gmail.com
                </Link>
              </li>
            </ul>
            <p className="mt-3">
              Please include your order details and the reason for your refund request. We process
              refunds within 3–5 business days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Service Issues</h2>
            <p>
              If you experience technical issues with the service, please contact our support team
              first — we can often resolve problems quickly. If we are unable to resolve your issue,
              you may be eligible for an extended refund window at our discretion.
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
