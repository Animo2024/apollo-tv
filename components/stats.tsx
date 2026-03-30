"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Tv, Film, Star } from "lucide-react"

const stats = [
  { icon: Users, value: 10000, suffix: "+", label: "Active Subscribers" },
  { icon: Tv, value: 40000, suffix: "+", label: "Live Channels" },
  { icon: Film, value: 100000, suffix: "+", label: "VOD Titles" },
  { icon: Star, value: 99.9, suffix: "%", label: "Uptime Guaranteed", decimals: 1 },
]

function useCountUp(target: number, duration: number, decimals = 0, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(parseFloat(start.toFixed(decimals)))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration, decimals])

  return count
}

function StatCard({ icon: Icon, value, suffix, label, decimals = 0, active }: {
  icon: React.ElementType
  value: number
  suffix: string
  label: string
  decimals?: number
  active: boolean
}) {
  const count = useCountUp(value, 2000, decimals, active)
  return (
    <div className="flex flex-col items-center gap-2 p-3 sm:p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/50 transition-colors">
      <Icon className="w-8 h-8 text-primary mb-1" />
      <div className="text-2xl sm:text-4xl font-bold text-foreground">
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-16 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  )
}
