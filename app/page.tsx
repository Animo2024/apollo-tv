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

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
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
      <Footer />
      <WhatsAppButton />
      <EmailButton />
      <BackToTop />
      <CookieConsent />
      <SalesNotification displayDuration={11000} />
    </main>
  )
}
