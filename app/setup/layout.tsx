import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apollo TV Setup Guide | FireStick, Android, iOS & All Devices",
  description: "Set up Apollo TV IPTV on FireStick, Smart TV, Android, iOS, PC & more. Step-by-step guides for every device. Get streaming in minutes.",
  alternates: { canonical: "https://apollotviptv.com/setup" },
  openGraph: {
    title: "Apollo TV Setup Guide | FireStick, Android, iOS & All Devices",
    description: "Set up Apollo TV IPTV on FireStick, Smart TV, Android, iOS, PC & more. Step-by-step guides for every device.",
    url: "https://apollotviptv.com/setup",
    siteName: "Apollo TV IPTV",
    type: "website",
    images: [{ url: "https://apollotviptv.com/og-image.png", width: 1200, height: 630, alt: "Apollo TV IPTV Setup Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apollo TV Setup Guide | All Devices",
    description: "Set up Apollo TV IPTV on any device — step-by-step for FireStick, Smart TV, Android, iOS & more.",
    images: ["https://apollotviptv.com/og-image.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://apollotviptv.com/setup",
  name: "Apollo TV IPTV Setup Guide",
  description: "Step-by-step setup guide for Apollo TV IPTV on all devices including FireStick, Smart TV, Android, iOS, PC and more.",
  url: "https://apollotviptv.com/setup",
  isPartOf: { "@id": "https://apollotviptv.com/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://apollotviptv.com" },
      { "@type": "ListItem", position: 2, name: "Setup Guide", item: "https://apollotviptv.com/setup" },
    ],
  },
}

export default function SetupLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
