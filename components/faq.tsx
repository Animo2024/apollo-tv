"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What devices are compatible with Apollo TV IPTV?",
    answer: "Apollo TV IPTV is compatible with a wide range of devices including Android TV, Amazon FireStick, Apple TV, Smart TVs, Android and iOS smartphones, tablets, Windows PC, Mac, and most streaming devices. If your device can run an IPTV app, it will likely work with our service.",
  },
  {
    question: "How do I set up Apollo TV on my device?",
    answer: "Setting up is simple! After purchasing a subscription, you'll receive login credentials via email. Download a compatible IPTV player app on your device (we recommend IPTV Smarters or TiviMate), enter your credentials, and you're ready to stream. Our 24/7 support team can also assist you with setup if needed.",
  },
  {
    question: "What internet speed do I need for smooth streaming?",
    answer: "For HD streaming, we recommend at least 10 Mbps. For Full HD (1080p), 15-20 Mbps is ideal. For 4K content, you'll need at least 25-30 Mbps. Our anti-freeze technology helps optimize streams even on slower connections, but faster internet always provides the best experience.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Yes! We offer a 7-day money-back guarantee on all our subscription plans. If you're not completely satisfied with our service within the first 7 days, contact our support team for a full refund. No questions asked.",
  },
  {
    question: "Can I use one subscription on multiple devices?",
    answer: "Yes, depending on your plan. Our 1 Month Plan supports 1 device, 3 Months Plan supports 2 devices, 6 Months Plan supports 3 devices, and our 12 Months Plan supports up to 4 devices simultaneously. Multi-connection plans support up to 5 devices.",
  },
  {
    question: "Does Apollo Group IPTV work on FireStick?",
    answer: "Yes! Apollo TV IPTV works perfectly on Amazon FireStick. Simply use the Downloader app to install IPTV Smarters Pro or any compatible apollo smarters app, then log in with your apollo iptv subscription credentials. Full setup instructions are available on our Setup Guide page.",
  },
  {
    question: "Can I try Apollo IPTV before buying a subscription?",
    answer: "Yes — we offer a free 24-hour apollo iptv test so you can experience the full service before committing. Contact us on WhatsApp and we'll set it up for you instantly. All plans also come with a 7-day money-back guarantee.",
  },
  {
    question: "How much does an Apollo subscription cost per month?",
    answer: "Apollo TV subscription starts at $18 per month for the 1 Month Plan. We also offer longer plans at better value: 3 Months for $45, 6 Months for $65, and 12 Months for $99. All plans include full access to 40,000+ channels and 100,000+ VODs.",
  },
  {
    question: "What movies and series does Apollo TV offer?",
    answer: "Apollo TV offers a massive VOD library with 100,000+ movies and TV series across all genres.\n\nEnjoy the latest releases, popular titles, and complete series collections — all available in one place without needing multiple subscriptions.",
  },
  {
    question: "How much is the Apollo Group TV subscription?",
    answer: "Apollo Group TV subscription plans range from $18/month up to $99/year. We offer flexible plans to fit any budget, with longer subscriptions providing the best value per month.",
  },
  {
    question: "Can I pay for Apollo TV with a credit card?",
    answer: "Yes, Apollo TV accepts credit card payments (Visa, Mastercard) as well as PayPal and other online payment methods. All payments are processed securely.",
  },
  {
    question: "What are some alternatives to Apollo Group TV?",
    answer: "Popular alternatives include IPTV services like IPTV Smarters, Helix TV, and Xtream Codes, which offer similar live TV channels and on-demand content. However, Apollo TV IPTV stands out with 40,000+ channels, anti-freeze technology, and 24/7 support — making it one of the best choices in 2026.",
  },
  {
    question: "What channels do I get with Apollo TV?",
    answer: "Apollo TV gives you access to a wide range of live TV channels including sports, news, entertainment, movies, kids, and international content.\n\nEnjoy a large video-on-demand library with thousands of movies and TV series, updated regularly for the best viewing experience.\n\nStream your favorite content anytime, anywhere with high-quality performance and reliable uptime across multiple devices.",
  },
  {
    question: "What does Apollo TV allow me to access?",
    answer: "Apollo TV IPTV gives you full access to live TV channels from around the world, a massive VOD library with 100,000+ movies and series, catch-up TV, an Electronic Program Guide (EPG), and 4K/UHD streaming — all on up to 5 devices simultaneously.",
  },
]

const leftFaqs = faqs.filter((_, i) => i % 2 === 0)
const rightFaqs = faqs.filter((_, i) => i % 2 !== 0)

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Apollo IPTV — Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Everything you need to know about your apollo iptv subscription. Can&apos;t find an answer? Contact our 24/7 support team.
          </p>
        </div>

        {/* Two-column FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <Accordion type="single" collapsible className="space-y-4">
            {leftFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`left-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-6 font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer.split("\n\n").map((p, i) => <p key={i} className={i > 0 ? "mt-3" : ""}>{p}</p>)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Right Column */}
          <Accordion type="single" collapsible className="space-y-4">
            {rightFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`right-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-6 font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer.split("\n\n").map((p, i) => <p key={i} className={i > 0 ? "mt-3" : ""}>{p}</p>)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
