import Link from "next/link"
import { Phone } from "lucide-react"

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/212622892003"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-1 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl"
      aria-label="Contact us on WhatsApp"
    >
      <Phone className="w-7 h-7" />
      <span className="absolute -top-2 -right-1 w-4 h-4 bg-primary rounded-full animate-ping" />
      <span className="absolute -top-2 -right-1 w-4 h-4 bg-primary rounded-full" />
    </Link>
  )
}
