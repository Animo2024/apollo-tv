"use client"

import { useState, useEffect, useRef } from "react"
import { X, ShoppingCart } from "lucide-react"

export interface SaleEntry {
  name: string
  location: string
  plan: string
  minutesAgo: number
  avatar?: string
}

const defaultSales: SaleEntry[] = [
  { name: "James R.", location: "New York, US", plan: "12 Months Plan", minutesAgo: 2 },
  { name: "Mohammed A.", location: "Dubai, UAE", plan: "6 Months Plan", minutesAgo: 5 },
  { name: "Carlos M.", location: "Madrid, Spain", plan: "3 Months Plan", minutesAgo: 1 },
  { name: "Sophie L.", location: "Paris, France", plan: "12 Months Plan", minutesAgo: 3 },
  { name: "Ahmed K.", location: "Cairo, Egypt", plan: "1 Month Plan", minutesAgo: 7 },
  { name: "Liam T.", location: "London, UK", plan: "6 Months Plan", minutesAgo: 4 },
  { name: "Yuki S.", location: "Tokyo, Japan", plan: "12 Months Plan", minutesAgo: 6 },
  { name: "Omar B.", location: "Casablanca, MA", plan: "3 Months Plan", minutesAgo: 2 },
  { name: "Isabella F.", location: "Rome, Italy", plan: "6 Months Plan", minutesAgo: 8 },
  { name: "Kevin O.", location: "Lagos, Nigeria", plan: "1 Month Plan", minutesAgo: 3 },
]

interface SalesNotificationProps {
  sales?: SaleEntry[]
  displayDuration?: number  // ms — how long popup stays visible
  cycleDuration?: number    // ms — interval between popups
}

export function SalesNotification({
  sales = defaultSales,
  displayDuration = 5000,
  cycleDuration = 8000,
}: SalesNotificationProps) {
  const [current, setCurrent] = useState<SaleEntry | null>(null)
  const [visible, setVisible] = useState(false)
  const indexRef = useRef(0)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const cycleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const showNext = () => {
    const entry = sales[indexRef.current % sales.length]
    indexRef.current += 1
    setCurrent(entry)
    setVisible(true)

    hideTimer.current = setTimeout(() => {
      setVisible(false)
    }, displayDuration)
  }

  useEffect(() => {
    // Initial delay before first popup
    const initial = setTimeout(() => {
      showNext()
      cycleTimer.current = setInterval(showNext, cycleDuration)
    }, 3000)

    return () => {
      clearTimeout(initial)
      if (hideTimer.current) clearTimeout(hideTimer.current)
      if (cycleTimer.current) clearInterval(cycleTimer.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const dismiss = () => {
    setVisible(false)
    if (hideTimer.current) clearTimeout(hideTimer.current)
  }

  if (!current) return null

  const initials = current.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  return (
    <>
      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-110%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes slideOutLeft {
          from { transform: translateX(0);    opacity: 1; }
          to   { transform: translateX(-110%); opacity: 0; }
        }
        .sales-popup-enter {
          animation: slideInLeft 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .sales-popup-exit {
          animation: slideOutLeft 0.35s ease-in forwards;
        }
      `}</style>

      <div
        key={current.name + indexRef.current}
        className={`fixed bottom-6 left-4 z-50 ${visible ? "sales-popup-enter" : "sales-popup-exit"}`}
      >
        <div className="flex items-center gap-3 bg-card border border-border rounded-xl shadow-xl px-4 py-3 max-w-[300px] w-full">
          {/* Avatar */}
          {current.avatar ? (
            <img
              src={current.avatar}
              alt={current.name}
              className="w-11 h-11 rounded-full object-cover flex-shrink-0"
            />
          ) : (
            <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold text-sm">{initials}</span>
            </div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1 mb-0.5">
              <ShoppingCart className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span className="text-xs text-primary font-semibold truncate">New Purchase</span>
            </div>
            <p className="text-sm text-foreground font-medium leading-tight truncate">
              {current.name}
            </p>
            <p className="text-xs text-muted-foreground leading-tight truncate">
              {current.location} · <span className="text-foreground/70">{current.plan}</span>
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {current.minutesAgo} minute{current.minutesAgo !== 1 ? "s" : ""} ago
            </p>
          </div>

          {/* Close */}
          <button
            onClick={dismiss}
            aria-label="Dismiss notification"
            className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 self-start mt-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </>
  )
}
