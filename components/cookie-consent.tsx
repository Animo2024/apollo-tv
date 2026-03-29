"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent")
    if (!accepted) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-sm text-muted-foreground flex-grow leading-relaxed">
          We use cookies to improve your experience and analyse site traffic. By clicking{" "}
          <strong className="text-foreground">Accept</strong>, you consent to our use of cookies.{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Learn more
          </Link>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0 w-full sm:w-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={decline}
            className="flex-1 sm:flex-none border-border text-muted-foreground hover:text-foreground"
          >
            Decline
          </Button>
          <Button
            size="sm"
            onClick={accept}
            className="flex-1 sm:flex-none bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}
