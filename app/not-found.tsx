import Link from "next/link"
import { Zap, Home, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
        <Zap className="w-9 h-9 text-primary" />
      </div>

      <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-foreground mb-3">Page Not Found</h2>
      <p className="text-muted-foreground max-w-sm mb-10 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
        <Button asChild variant="outline" className="border-border text-foreground hover:bg-secondary">
          <Link href="https://wa.me/212622892003" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4 mr-2" />
            Contact Support
          </Link>
        </Button>
      </div>
    </div>
  )
}
