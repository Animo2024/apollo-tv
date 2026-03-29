import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: 'Apollo TV IPTV | #1 IPTV Subscription — 40,000+ Channels',
  description: 'Apollo TV IPTV — 40,000+ live channels, 100,000+ VODs, 4K streaming, instant activation & 24/7 support. Best IPTV subscription in 2026. Try free trial today.',
  keywords: 'apollo iptv subscription, apollo group iptv, apollo iptv service, apollo tv firestick, apollo iptv channels, iptv subscription 2026',
  metadataBase: new URL('https://apollotviptv.com'),
  alternates: { canonical: 'https://apollotviptv.com' },
  openGraph: {
    title: 'Apollo TV IPTV | #1 IPTV Subscription — 40,000+ Channels',
    description: 'Apollo TV IPTV — 40,000+ live channels, 100,000+ VODs in 4K. Anti-freeze technology, 24/7 support & 7-day money-back guarantee.',
    url: 'https://apollotviptv.com',
    siteName: 'Apollo TV IPTV',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://apollotviptv.com/og-image.png', width: 1200, height: 630, alt: 'Apollo TV IPTV — #1 IPTV Subscription' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apollo TV IPTV | Best IPTV Service Rated #1',
    description: 'Apollo TV IPTV — 40,000+ channels, 100,000+ VODs in 4K. No lag, no limits.',
    images: ['https://apollotviptv.com/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://apollotviptv.com/#organization",
      name: "Apollo TV IPTV",
      url: "https://apollotviptv.com",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+212622892003",
        contactType: "customer support",
        availableLanguage: ["English", "Arabic", "French"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://apollotviptv.com/#website",
      url: "https://apollotviptv.com",
      name: "Apollo TV IPTV",
      publisher: { "@id": "https://apollotviptv.com/#organization" },
    },
    {
      "@type": "ItemList",
      name: "Apollo TV IPTV Subscription Plans",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Product",
            name: "Apollo TV IPTV — 1 Month Plan",
            description: "40,000+ live channels, 100,000+ VODs, HD & FHD quality, 1 device connection.",
            offers: {
              "@type": "Offer",
              price: "18",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://apollotviptv.com/#pricing",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "6",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Product",
            name: "Apollo TV IPTV — 3 Months Plan",
            description: "40,000+ live channels, 100,000+ VODs, 4K quality, 2 device connections.",
            offers: {
              "@type": "Offer",
              price: "45",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://apollotviptv.com/#pricing",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Product",
            name: "Apollo TV IPTV — 12 Months Plan",
            description: "40,000+ live channels, 100,000+ VODs, 4K quality, 4 device connections, free setup assistance.",
            offers: {
              "@type": "Offer",
              price: "99",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://apollotviptv.com/#pricing",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Product",
            name: "Apollo TV IPTV — 6 Months Plan",
            description: "40,000+ live channels, 100,000+ VODs, 4K quality, 3 device connections.",
            offers: {
              "@type": "Offer",
              price: "65",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://apollotviptv.com/#pricing",
            },
          },
        },
      ],
    },
    {
      "@type": "Review",
      itemReviewed: { "@type": "Product", name: "Apollo TV IPTV" },
      author: { "@type": "Person", name: "James R." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "40,000 channels and everything streams in perfect 4K. The anti-freeze tech actually works!",
    },
    {
      "@type": "Review",
      itemReviewed: { "@type": "Product", name: "Apollo TV IPTV" },
      author: { "@type": "Person", name: "Mohammed A." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Best IPTV I've tried. Arabic channels load instantly, sports streams are smooth even during live matches.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What devices are compatible with Apollo TV IPTV?", acceptedAnswer: { "@type": "Answer", text: "Apollo TV IPTV is compatible with Android TV, Amazon FireStick, Apple TV, Smart TVs, Android and iOS smartphones, tablets, Windows PC, Mac, and most streaming devices." } },
        { "@type": "Question", name: "How do I set up Apollo TV on my device?", acceptedAnswer: { "@type": "Answer", text: "After purchasing a subscription, download a compatible IPTV player app (IPTV Smarters or TiviMate), enter your credentials, and start streaming. Full setup guides are available on our Setup Guide page." } },
        { "@type": "Question", name: "What internet speed do I need for smooth streaming?", acceptedAnswer: { "@type": "Answer", text: "For HD streaming: 10 Mbps. For Full HD: 15-20 Mbps. For 4K: 25-30 Mbps." } },
        { "@type": "Question", name: "Do you offer a money-back guarantee?", acceptedAnswer: { "@type": "Answer", text: "Yes, we offer a 7-day money-back guarantee on all subscription plans." } },
        { "@type": "Question", name: "Can I use one subscription on multiple devices?", acceptedAnswer: { "@type": "Answer", text: "Yes. 1 Month Plan: 1 device, 3 Months: 2 devices, 6 Months: 3 devices, 12 Months: 4 devices. Multi-connection plans support up to 5 devices." } },
        { "@type": "Question", name: "Does Apollo TV IPTV work on FireStick?", acceptedAnswer: { "@type": "Answer", text: "Yes. Use the Downloader app with code 78522 to install IPTV Smarters Pro, then log in with your Apollo TV IPTV subscription credentials." } },
        { "@type": "Question", name: "Can I try Apollo TV IPTV before subscribing?", acceptedAnswer: { "@type": "Answer", text: "Yes, we offer a free 24-hour test. Contact us on WhatsApp and we'll activate it instantly. All plans also include a 7-day money-back guarantee." } },
        { "@type": "Question", name: "How much does an Apollo TV IPTV subscription cost?", acceptedAnswer: { "@type": "Answer", text: "Plans start at $18/month. We also offer 3 Months for $45, 6 Months for $65, and 12 Months for $99." } },
        { "@type": "Question", name: "Does Apollo TV include Amazon Prime?", acceptedAnswer: { "@type": "Answer", text: "No. Apollo TV IPTV provides live TV channels and VOD content. Amazon Prime, Netflix, and Disney+ must be purchased separately." } },
        { "@type": "Question", name: "Can I pay for Apollo TV IPTV with a credit card?", acceptedAnswer: { "@type": "Answer", text: "Yes, Apollo TV IPTV accepts Visa, Mastercard, PayPal and other online payment methods." } },
        { "@type": "Question", name: "What channels do I get with Apollo TV IPTV?", acceptedAnswer: { "@type": "Answer", text: "You get 40,000+ live channels including sports (beIN Sports, Sky Sports, ESPN), news (CNN, BBC, Al Jazeera), entertainment, movies, kids, and international channels from 195+ countries." } },
        { "@type": "Question", name: "What does Apollo TV IPTV allow me to access?", acceptedAnswer: { "@type": "Answer", text: "Full access to live TV channels worldwide, 100,000+ VOD movies and series, catch-up TV, EPG, and 4K/UHD streaming on up to 5 devices simultaneously." } },
        { "@type": "Question", name: "How much is the Apollo Group TV subscription?", acceptedAnswer: { "@type": "Answer", text: "Apollo Group TV subscription ranges from $18/month to $99/year depending on the plan." } },
        { "@type": "Question", name: "What are some alternatives to Apollo Group TV?", acceptedAnswer: { "@type": "Answer", text: "Alternatives include IPTV Smarters, Helix TV, and Xtream Codes. However, Apollo TV IPTV offers 40,000+ channels, anti-freeze technology, and 24/7 support." } },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
