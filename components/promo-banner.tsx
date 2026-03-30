"use client"

import { useState, useEffect } from "react"
import { Timer, Percent } from "lucide-react"

// Fixed promo end date — update this when you want to change the offer deadline
const PROMO_END_DATE = new Date("2026-12-31T23:59:59Z")

function getTimeLeft() {
  const diff = Math.max(0, PROMO_END_DATE.getTime() - Date.now())
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { days, hours, minutes, seconds }
}

export function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => num.toString().padStart(2, "0")

  return (
    <section className="bg-primary py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2">
            <Percent className="w-5 h-5 text-primary-foreground" />
            <span className="text-primary-foreground font-bold text-sm sm:text-lg">
              LIMITED TIME OFFER: 40% OFF
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Timer className="w-5 h-5 text-primary-foreground" />
            <div className="flex items-center gap-1 text-primary-foreground font-mono">
              <TimeBlock value={formatNumber(timeLeft.days)} label="D" />
              <span className="text-lg font-bold">:</span>
              <TimeBlock value={formatNumber(timeLeft.hours)} label="H" />
              <span className="text-lg font-bold">:</span>
              <TimeBlock value={formatNumber(timeLeft.minutes)} label="M" />
              <span className="text-lg font-bold">:</span>
              <TimeBlock value={formatNumber(timeLeft.seconds)} label="S" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TimeBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-0.5">
      <span className="bg-primary-foreground/20 rounded px-1.5 sm:px-2 py-1 text-sm sm:text-lg font-bold">
        {value}
      </span>
      <span className="text-xs">{label}</span>
    </div>
  )
}
