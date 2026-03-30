interface PostBannerProps {
  title: string
  category: string
  readTime: string
  className?: string
}

const categoryConfig: Record<string, { gradient: string; accent: string; icon: string }> = {
  "IPTV Reviews": {
    gradient: "from-violet-950 via-purple-900 to-indigo-950",
    accent: "from-purple-500/30 to-violet-500/10",
    icon: "⭐",
  },
  "Setup Guides": {
    gradient: "from-blue-950 via-cyan-900 to-teal-950",
    accent: "from-cyan-500/30 to-blue-500/10",
    icon: "⚙️",
  },
  "IPTV Guides": {
    gradient: "from-emerald-950 via-green-900 to-teal-950",
    accent: "from-emerald-500/30 to-green-500/10",
    icon: "📺",
  },
}

export function PostBanner({ title, category, readTime, className = "" }: PostBannerProps) {
  const config = categoryConfig[category] ?? {
    gradient: "from-slate-950 via-gray-900 to-zinc-950",
    accent: "from-primary/30 to-primary/10",
    icon: "📡",
  }

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br ${config.gradient} ${className}`}
      role="img"
      aria-label={`Featured image for: ${title}`}
    >
      {/* Decorative blobs */}
      <div className={`absolute inset-0 bg-gradient-to-tr ${config.accent} pointer-events-none`} />
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white/3 pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between p-6 sm:p-10 min-h-[200px] sm:min-h-[260px]">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
            {config.icon} {category}
          </span>
          <span className="text-white/50 text-xs">{readTime}</span>
        </div>

        {/* Title */}
        <div className="mt-6">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight line-clamp-3 drop-shadow-lg">
            {title}
          </h2>
          <div className="mt-4 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-white/40 rounded" />
            <span className="text-white/40 text-xs font-medium uppercase tracking-widest">Apollo TV IPTV</span>
          </div>
        </div>
      </div>
    </div>
  )
}
