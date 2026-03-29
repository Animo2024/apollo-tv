import Link from "next/link"
import { Zap } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | Apollo TV IPTV",
  description: "Apollo TV IPTV Privacy Policy — how we collect, use, and protect your personal data. Your privacy matters to us.",
  alternates: { canonical: "https://apollotviptv.com/privacy" },
  openGraph: {
    title: "Privacy Policy | Apollo TV IPTV",
    description: "Learn how Apollo TV IPTV collects, uses, and protects your personal data.",
    url: "https://apollotviptv.com/privacy",
    siteName: "Apollo TV IPTV",
    type: "website",
    images: [{ url: "https://apollotviptv.com/og-image.png", width: 1200, height: 630, alt: "Apollo TV IPTV Privacy Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Apollo TV IPTV",
    description: "Learn how Apollo TV IPTV collects, uses, and protects your personal data.",
    images: ["https://apollotviptv.com/og-image.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy | Apollo TV IPTV",
  url: "https://apollotviptv.com/privacy",
  isPartOf: { "@id": "https://apollotviptv.com/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://apollotviptv.com" },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://apollotviptv.com/privacy" },
    ],
  },
}

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold text-foreground mb-2">Apollo TV IPTV — Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: March 26, 2026</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
            <p>When you contact us or subscribe, we may collect:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Name and contact information (email, phone/WhatsApp)</li>
              <li>Payment confirmation details (we do not store card numbers)</li>
              <li>Device type for setup assistance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Activate and manage your subscription</li>
              <li>Provide customer support</li>
              <li>Send service-related notifications</li>
              <li>Improve our service quality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share
              data with trusted service providers who assist in operating our service, subject to
              confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Retention</h2>
            <p>
              We retain your information for as long as your subscription is active and for a
              reasonable period afterward to resolve disputes or comply with legal obligations. You
              may request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Cookies & Analytics</h2>
            <p>
              Our website uses Vercel Analytics to collect anonymous usage statistics (page views,
              device type, country). No personally identifiable information is collected through
              analytics. No third-party advertising cookies are used.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Security</h2>
            <p>
              We implement reasonable security measures to protect your information. However, no
              method of transmission over the internet is 100% secure. We encourage you to use
              secure channels when sharing sensitive information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of non-essential communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Contact</h2>
            <p>
              For privacy-related requests, contact us at{" "}
              <Link
                href="mailto:apollotvip@gmail.com"
                className="text-primary hover:underline"
              >
                apollotvip@gmail.com
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
