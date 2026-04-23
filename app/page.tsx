import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Channels } from "@/components/channels"
import { PromoBanner } from "@/components/promo-banner"
import { Features } from "@/components/features"
import { Comparison } from "@/components/comparison"
import { Pricing } from "@/components/pricing"
import { MultiConnections } from "@/components/multi-connections"
import { Testimonials } from "@/components/testimonials"
import { Devices } from "@/components/devices"
import { HowItWorks } from "@/components/how-it-works"
import { Reseller } from "@/components/reseller"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { EmailButton } from "@/components/email-button"
import { CookieConsent } from "@/components/cookie-consent"
import { BackToTop } from "@/components/back-to-top"
import { SalesNotification } from "@/components/sales-notification"
import { LatestGuides } from "@/components/latest-guides"

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://apollotviptv.com/#product",
      name: "Apollo TV IPTV",
      description: "Best IPTV subscription service with 40,000+ live channels, 100,000+ VODs, 4K streaming, anti-freeze technology and 24/7 support. Plans from $7.42/month.",
      brand: { "@type": "Brand", name: "Apollo TV IPTV" },
      url: "https://apollotviptv.com",
      image: "https://apollotviptv.com/og-image.png",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "7.42",
        highPrice: "18",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://apollotviptv.com/#pricing",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "127",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "James R." },
          datePublished: "2026-03-10",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "40,000 channels and everything streams in perfect 4K. The anti-freeze tech actually works — no buffering during the Super Bowl.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Mohammed A." },
          datePublished: "2026-03-15",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "Best IPTV I've tried. Arabic channels load instantly, sports streams are smooth even during live matches.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Sarah T." },
          datePublished: "2026-02-28",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "Switched from cable and saving over $100 a month. The channel selection is insane and support replied in under 2 minutes.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Carlos M." },
          datePublished: "2026-03-20",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "6 months in and not a single issue. Sports streams are flawless even during Champions League final.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "David K." },
          datePublished: "2026-03-25",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "Set up on Firestick in 10 minutes. 4K quality is outstanding and the VOD library is huge.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Fatima B." },
          datePublished: "2026-04-01",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "Perfect for our family. We get French, Arabic and English channels all in one subscription. Worth every penny.",
        },
      ],
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
            review: {
              "@type": "Review",
              author: { "@type": "Person", name: "James R." },
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
              reviewBody: "40,000 channels and everything streams in perfect 4K. The anti-freeze tech actually works!",
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
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "6",
            },
            review: {
              "@type": "Review",
              author: { "@type": "Person", name: "Sarah T." },
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
              reviewBody: "Great value for 3 months. 2 connections work perfectly for me and my partner.",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
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
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "6",
            },
            review: {
              "@type": "Review",
              author: { "@type": "Person", name: "Carlos M." },
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
              reviewBody: "6 months in and not a single issue. Sports streams are flawless even during Champions League.",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Product",
            name: "Apollo TV IPTV — 12 Months Plan",
            description: "40,000+ live channels, 100,000+ VODs, 4K quality, 4 device connections, free setup assistance.",
            offers: {
              "@type": "Offer",
              price: "89",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://apollotviptv.com/#pricing",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "6",
            },
            review: {
              "@type": "Review",
              author: { "@type": "Person", name: "Mohammed A." },
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
              reviewBody: "Best IPTV I've tried. Arabic channels load instantly, sports streams are smooth even during live matches.",
            },
          },
        },
      ],
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
        { "@type": "Question", name: "How much does an Apollo TV IPTV subscription cost?", acceptedAnswer: { "@type": "Answer", text: "Plans start at $18/month. We also offer 3 Months for $45, 6 Months for $65, and 12 Months for $89." } },
        { "@type": "Question", name: "Does Apollo TV include Amazon Prime?", acceptedAnswer: { "@type": "Answer", text: "No. Apollo TV IPTV provides live TV channels and VOD content. Amazon Prime, Netflix, and Disney+ must be purchased separately." } },
        { "@type": "Question", name: "Can I pay for Apollo TV IPTV with a credit card?", acceptedAnswer: { "@type": "Answer", text: "Yes, Apollo TV IPTV accepts Visa, Mastercard, PayPal and other online payment methods." } },
        { "@type": "Question", name: "What channels do I get with Apollo TV IPTV?", acceptedAnswer: { "@type": "Answer", text: "You get 40,000+ live channels including sports (beIN Sports, Sky Sports, ESPN), news (CNN, BBC, Al Jazeera), entertainment, movies, kids, and international channels from 195+ countries." } },
        { "@type": "Question", name: "What does Apollo TV IPTV allow me to access?", acceptedAnswer: { "@type": "Answer", text: "Full access to live TV channels worldwide, 100,000+ VOD movies and series, catch-up TV, EPG, and 4K/UHD streaming on up to 5 devices simultaneously." } },
        { "@type": "Question", name: "How much is the Apollo Group TV subscription?", acceptedAnswer: { "@type": "Answer", text: "Apollo Group TV subscription ranges from $18/month to $89/year depending on the plan." } },
        { "@type": "Question", name: "What are some alternatives to Apollo Group TV?", acceptedAnswer: { "@type": "Answer", text: "Alternatives include IPTV Smarters, Helix TV, and Xtream Codes. However, Apollo TV IPTV offers 40,000+ channels, anti-freeze technology, and 24/7 support." } },
      ],
    },
  ],
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />
      <Header />
      <Hero />
      <Stats />
      <Channels />
      <PromoBanner />
      <Features />
      <Comparison />
      <Pricing />
      <MultiConnections />
      <Testimonials />
      <Devices />
      <HowItWorks />
      <Reseller />
      <FAQ />
      <LatestGuides />
      <Footer />
      <WhatsAppButton />
      <EmailButton />
      <BackToTop />
      <CookieConsent />
      <SalesNotification displayDuration={11000} />
    </main>
  )
}
