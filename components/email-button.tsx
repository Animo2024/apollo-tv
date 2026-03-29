import Link from "next/link"
import { Mail } from "lucide-react"

export function EmailButton() {
  return (
    <Link
      href="mailto:apollotvip@gmail.com"
      className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl"
      aria-label="Send us an email"
    >
      <Mail className="w-7 h-7" />
    </Link>
  )
}
