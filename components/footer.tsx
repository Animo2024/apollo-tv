import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, ExternalLink } from "lucide-react"

const quickLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#channels", label: "Channels" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#multi-connections", label: "Multi Connections" },
  { href: "/setup", label: "Setup Guide" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
]

const legalLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/refund", label: "Refund Policy" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image src="/logo.png" alt="Apollo TV IPTV Logo" width={120} height={48} className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Premium IPTV service with 40,000+ channels and 100,000+ VODs. 
              Experience entertainment without limits.
            </p>
            <Link 
              href="https://apollotviptv.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary text-sm hover:underline"
            >
              apollotviptv.com
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="https://wa.me/212622892003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +212 622 892 003
                </Link>
              </li>
              <li>
                <Link 
                  href="mailto:apollotvip@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  apollotvip@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Apollo TV IPTV. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
