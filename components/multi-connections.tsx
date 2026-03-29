import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tv2, Smartphone, Laptop, Tablet, Monitor, MessageCircle } from "lucide-react"

const devices = [
  { icon: Tv2, label: "Smart TV" },
  { icon: Smartphone, label: "Mobile" },
  { icon: Laptop, label: "Laptop" },
  { icon: Tablet, label: "Tablet" },
  { icon: Monitor, label: "PC / Mac" },
]

function TvIllustration() {
  return (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md mx-auto" role="img" aria-label="Apollo TV IPTV streaming on multiple devices simultaneously">
      {/* Glow */}
      <ellipse cx="240" cy="290" rx="160" ry="24" fill="currentColor" className="text-primary/10" />

      {/* TV body */}
      <rect x="40" y="30" width="400" height="260" rx="18" fill="#1a1f3a" stroke="currentColor" strokeWidth="2" className="text-primary/30" />

      {/* Screen */}
      <rect x="58" y="48" width="364" height="224" rx="8" fill="#0d1120" />

      {/* Screen content — channel grid */}
      <rect x="70" y="58" width="160" height="100" rx="6" fill="#1e2a4a" />
      <rect x="70" y="58" width="160" height="100" rx="6" fill="url(#grad1)" />
      <text x="150" y="115" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">🎬 Movie Night</text>

      <rect x="242" y="58" width="168" height="100" rx="6" fill="#1e2a4a" />
      <rect x="242" y="58" width="168" height="100" rx="6" fill="url(#grad2)" />
      <text x="326" y="115" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">⚽ Live Sports</text>

      <rect x="70" y="168" width="100" height="92" rx="6" fill="#1a2540" />
      <text x="120" y="218" textAnchor="middle" fill="#94a3b8" fontSize="10">📺 News</text>

      <rect x="180" y="168" width="100" height="92" rx="6" fill="#1a2540" />
      <text x="230" y="218" textAnchor="middle" fill="#94a3b8" fontSize="10">🎵 Music</text>

      <rect x="290" y="168" width="120" height="92" rx="6" fill="#1a2540" />
      <text x="350" y="218" textAnchor="middle" fill="#94a3b8" fontSize="10">🎮 Gaming</text>

      {/* Status bar */}
      <rect x="58" y="244" width="364" height="28" rx="0" fill="#111827" />
      <circle cx="78" cy="258" r="5" fill="#22c55e" />
      <text x="90" y="262" fill="#94a3b8" fontSize="9">LIVE</text>
      <text x="340" y="262" fill="#94a3b8" fontSize="9">40,000+ Channels</text>

      {/* TV stand */}
      <rect x="210" y="290" width="60" height="14" rx="4" fill="#1a1f3a" stroke="currentColor" strokeWidth="1.5" className="text-primary/20" />
      <rect x="180" y="303" width="120" height="10" rx="5" fill="#1a1f3a" stroke="currentColor" strokeWidth="1.5" className="text-primary/20" />

      {/* Device badges floating around TV */}
      <g>
        <rect x="0" y="80" width="52" height="28" rx="8" fill="#1e2a4a" stroke="currentColor" strokeWidth="1" className="text-primary/40" />
        <text x="26" y="98" textAnchor="middle" fill="white" fontSize="9">📱 Mobile</text>
      </g>
      <g>
        <rect x="428" y="80" width="52" height="28" rx="8" fill="#1e2a4a" stroke="currentColor" strokeWidth="1" className="text-primary/40" />
        <text x="454" y="98" textAnchor="middle" fill="white" fontSize="9">💻 PC</text>
      </g>
      <g>
        <rect x="0" y="170" width="52" height="28" rx="8" fill="#1e2a4a" stroke="currentColor" strokeWidth="1" className="text-primary/40" />
        <text x="26" y="188" textAnchor="middle" fill="white" fontSize="9">📺 TV</text>
      </g>
      <g>
        <rect x="428" y="170" width="52" height="28" rx="8" fill="#1e2a4a" stroke="currentColor" strokeWidth="1" className="text-primary/40" />
        <text x="454" y="188" textAnchor="middle" fill="white" fontSize="9">⌚ More</text>
      </g>

      {/* Connection lines */}
      <line x1="52" y1="94" x2="58" y2="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" className="text-primary/30" />
      <line x1="428" y1="94" x2="422" y2="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" className="text-primary/30" />
      <line x1="52" y1="184" x2="58" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" className="text-primary/30" />
      <line x1="428" y1="184" x2="422" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" className="text-primary/30" />

      <defs>
        <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#16a34a" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function MultiConnections() {
  return (
    <section id="multi-connections" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-primary font-medium">Up to 5 Devices Simultaneously</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5 text-balance">
              Multi-Connection IPTV Streaming{" "}
              <span className="text-primary">with Apollo TV IPTV</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              Enjoy ultimate flexibility with Apollo TV IPTV multi-connection plans, designed for
              seamless streaming across multiple devices. Whether you&apos;re at home or on the go,
              you can watch your favorite channels on up to{" "}
              <span className="text-foreground font-semibold">5 devices simultaneously</span> — no
              interruptions, no limits. Share premium entertainment with your family or friends and
              experience smooth, high-quality streaming anytime, anywhere.
            </p>

            {/* Device Icons */}
            <div className="flex items-center gap-4 mb-10 flex-wrap">
              {devices.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl border border-border bg-card/50 flex items-center justify-center hover:border-primary/50 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            >
              <Link
                href="https://wa.me/212622892003?text=Hi%20I%20Want%20multi-screen%20Packages"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Started Multi-Connections
              </Link>
            </Button>
          </div>

          {/* Right — TV Illustration */}
          <div className="flex items-center justify-center">
            <TvIllustration />
          </div>

        </div>
      </div>
    </section>
  )
}
