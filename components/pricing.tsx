import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Star, ShieldCheck, RefreshCcw, Headphones, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

const trustBadges = [
  { icon: ShieldCheck, label: "Secure Payment" },
  { icon: RefreshCcw, label: "7-Day Money Back" },
  { icon: Headphones, label: "24/7 Support" },
  { icon: Lock, label: "Privacy Protected" },
]

const plans = [
  {
    name: "1 Month Plan",
    duration: "1 Month",
    price: "$18",
    period: "/ 1 Month",
    popular: false,
    waMessage: "Hello%2C%20I%20want%20to%20subscribe%20for%201%20Month",
    features: [
      "40,000+ Live Channels",
      "100,000+ VOD Library",
      "HD & FHD Quality",
      "Anti-freeze Technology",
      "1 Device Connection",
      "24/7 Customer Support",
    ],
  },
  {
    name: "3 Months Plan",
    duration: "3 Months",
    price: "$45",
    period: "/ 3 Months",
    popular: false,
    waMessage: "Hello%2C%20I%20want%20to%20subscribe%20for%203%20Months",
    features: [
      "40,000+ Live Channels",
      "100,000+ VOD Library",
      "HD, FHD & 4K Quality",
      "Anti-freeze Technology",
      "2 Device Connections",
      "24/7 Priority Support",
    ],
  },
  {
    name: "12 Months Plan",
    duration: "12 Months",
    price: "$99",
    period: "/ 1 Year",
    popular: true,
    waMessage: "Hello%2C%20I%20want%20to%20subscribe%20for%201%20Year",
    features: [
      "40,000+ Live Channels",
      "100,000+ VOD Library",
      "HD, FHD & 4K Quality",
      "Anti-freeze Technology",
      "4 Device Connections",
      "24/7 VIP Support",
      "Free Setup Assistance",
    ],
  },
  {
    name: "6 Months Plan",
    duration: "6 Months",
    price: "$65",
    period: "/ 6 Months",
    popular: false,
    waMessage: "Hello%2C%20I%20want%20to%20subscribe%20for%206%20Months",
    features: [
      "40,000+ Live Channels",
      "100,000+ VOD Library",
      "HD, FHD & 4K Quality",
      "Anti-freeze Technology",
      "3 Device Connections",
      "24/7 Priority Support",
    ],
  },
]

function PaymentIcons() {
  return (
    <div className="flex items-center justify-center gap-2 mt-3">
      {/* PayPal */}
      <svg viewBox="0 0 60 16" className="h-4 w-auto opacity-70" aria-label="PayPal">
        <text y="13" fontSize="11" fontWeight="bold" fill="#003087">Pay</text>
        <text x="20" y="13" fontSize="11" fontWeight="bold" fill="#009cde">Pal</text>
      </svg>

      {/* Visa */}
      <svg viewBox="0 0 50 16" className="h-4 w-auto opacity-70" aria-label="Visa">
        <text y="13" fontSize="13" fontWeight="900" fill="#1a1f71" fontStyle="italic">VISA</text>
      </svg>

      {/* Mastercard circles */}
      <svg viewBox="0 0 30 20" className="h-4 w-auto opacity-70" aria-label="Mastercard">
        <circle cx="10" cy="10" r="9" fill="#eb001b" />
        <circle cx="20" cy="10" r="9" fill="#f79e1b" />
        <path d="M15 4.5a9 9 0 0 1 0 11 9 9 0 0 1 0-11z" fill="#ff5f00" />
      </svg>

      {/* Crypto generic icon */}
      <svg viewBox="0 0 20 20" className="h-4 w-auto opacity-70" aria-label="Crypto">
        <circle cx="10" cy="10" r="9" fill="#f7931a" />
        <text x="5" y="14" fontSize="10" fontWeight="bold" fill="white">₿</text>
      </svg>
    </div>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Select the subscription that fits your needs. All plans include our
            premium features with a money-back guarantee.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name + plan.duration}
              className={cn(
                "relative bg-card/50 backdrop-blur-sm border rounded-2xl p-6 flex flex-col transition-all duration-300 hover:scale-105",
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-border hover:border-primary/50"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    <Star className="w-3 h-3 fill-current" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.duration}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground"> {plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div>
                <Button
                  asChild
                  className={cn(
                    "w-full",
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  <Link href={`https://wa.me/212622892003?text=${plan.waMessage}`} target="_blank" rel="noopener noreferrer">
                    Get Started
                  </Link>
                </Button>
                <PaymentIcons />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {trustBadges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-muted-foreground text-sm">
              <Icon className="w-4 h-4 text-primary" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
