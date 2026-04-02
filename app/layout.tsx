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
  description: 'Apollo TV IPTV — 40,000+ live channels, 100,000+ VODs, 4K streaming, instant activation & 24/7 support. Best IPTV subscription in 2026.',
  keywords: 'apollo iptv subscription, apollo group iptv, apollo iptv service, apollo tv firestick, apollo iptv channels, iptv subscription 2026',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: { google: 'GTWrXznqC1SLBOwRAyorB6dnHbOjL61wIqFKwk8MvMk' },
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
      logo: {
        "@type": "ImageObject",
        url: "https://apollotviptv.com/logo.png",
        width: 240,
        height: 96,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+212622892003",
        contactType: "customer support",
        availableLanguage: ["English", "Arabic", "French"],
      },
      sameAs: ["https://apollotviptv.com"],
    },
    {
      "@type": "WebSite",
      "@id": "https://apollotviptv.com/#website",
      url: "https://apollotviptv.com",
      name: "Apollo TV IPTV",
      publisher: { "@id": "https://apollotviptv.com/#organization" },
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
