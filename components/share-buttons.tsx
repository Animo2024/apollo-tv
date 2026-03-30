"use client"

import { useState } from "react"
import { Twitter, Facebook, Link2, MessageCircle } from "lucide-react"

interface ShareButtonsProps {
  url: string
  title: string
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareLinks = [
    {
      label: "Twitter / X",
      icon: <Twitter className="w-4 h-4" />,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:bg-black hover:text-white hover:border-black",
    },
    {
      label: "Facebook",
      icon: <Facebook className="w-4 h-4" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2]",
    },
    {
      label: "WhatsApp",
      icon: <MessageCircle className="w-4 h-4" />,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: "hover:bg-[#25d366] hover:text-white hover:border-[#25d366]",
    },
    {
      label: "Reddit",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
        </svg>
      ),
      href: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      color: "hover:bg-[#ff4500] hover:text-white hover:border-[#ff4500]",
    },
  ]

  function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="mt-12 pt-8 border-t border-border">
      <p className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Share this article</p>
      <div className="flex flex-wrap gap-2">
        {shareLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${s.label}`}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-muted-foreground text-sm font-medium transition-all duration-200 ${s.color}`}
          >
            {s.icon}
            <span className="hidden sm:inline">{s.label}</span>
          </a>
        ))}

        <button
          onClick={copyLink}
          aria-label="Copy link"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-muted-foreground text-sm font-medium transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary"
        >
          <Link2 className="w-4 h-4" />
          <span className="hidden sm:inline">{copied ? "Copied!" : "Copy link"}</span>
        </button>
      </div>
    </div>
  )
}
