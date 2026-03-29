import { Star } from "lucide-react"

const testimonials = [
  {
    name: "James R.",
    country: "🇬🇧 United Kingdom",
    rating: 5,
    text: "Switched from cable 6 months ago and never looked back. 40,000 channels and everything streams in perfect 4K. The anti-freeze tech actually works!",
  },
  {
    name: "Mohammed A.",
    country: "🇸🇦 Saudi Arabia",
    rating: 5,
    text: "Best IPTV I've tried. Arabic channels load instantly, sports streams are smooth even during live matches. Customer support replied within minutes.",
  },
  {
    name: "Carlos M.",
    country: "🇲🇽 Mexico",
    rating: 5,
    text: "Amazing value for money. The Platinum plan gives me 4 devices — the whole family is happy. Setup took less than 5 minutes with their guide.",
  },
  {
    name: "Sofia L.",
    country: "🇫🇷 France",
    rating: 5,
    text: "I was skeptical at first, but the 7-day trial convinced me immediately. French channels, sports, cinema — all flawless quality.",
  },
  {
    name: "Ahmed K.",
    country: "🇪🇬 Egypt",
    rating: 5,
    text: "Tried 4 other IPTV services before finding Apollo TV. This is on a completely different level. Zero buffering on Sports channels during World Cup.",
  },
  {
    name: "David T.",
    country: "🇺🇸 United States",
    rating: 5,
    text: "The VOD library alone is amazing — over 100,000 movies and series. Everything I want to watch is in one place, and the value is unbeatable.",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Loved by Subscribers Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers streaming with Apollo TV every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card/50 border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/40 transition-colors"
            >
              <StarRating rating={t.rating} />
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-foreground text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.country}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
