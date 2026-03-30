import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '../public/blog')

const articles = [
  {
    slug: 'best-iptv-service-2026',
    title: 'Best IPTV Service in 2026',
    subtitle: 'Why Apollo TV Tops the List',
    icon: '🏆',
    grad1: '#1a0533', grad2: '#2d1060', grad3: '#0a0a1a',
    accent1: '#a855f7', accent2: '#7c3aed',
    category: 'IPTV Reviews',
  },
  {
    slug: 'apollo-tv-firestick',
    title: 'Install Apollo TV on Firestick',
    subtitle: 'Step-by-Step Guide 2026',
    icon: '🔥',
    grad1: '#1a0a00', grad2: '#3d1500', grad3: '#0a0a0a',
    accent1: '#f97316', accent2: '#ea580c',
    category: 'Setup Guides',
  },
  {
    slug: 'sites-like-apollo-tv',
    title: 'Best Sites Like Apollo TV',
    subtitle: 'Top IPTV Alternatives 2026',
    icon: '🔍',
    grad1: '#001a2e', grad2: '#003366', grad3: '#000d1a',
    accent1: '#3b82f6', accent2: '#1d4ed8',
    category: 'IPTV Reviews',
  },
  {
    slug: 'apollo-tv-online',
    title: 'Apollo TV Online',
    subtitle: 'Watch Streaming Anywhere in 2026',
    icon: '🌐',
    grad1: '#001a1a', grad2: '#00334d', grad3: '#000d0d',
    accent1: '#06b6d4', accent2: '#0891b2',
    category: 'IPTV Guides',
  },
  {
    slug: 'apollo-tv-smart-tv',
    title: 'Apollo TV on Smart TV',
    subtitle: 'Complete Installation Guide 2026',
    icon: '📺',
    grad1: '#0a1a00', grad2: '#1a3300', grad3: '#050d00',
    accent1: '#22c55e', accent2: '#16a34a',
    category: 'Setup Guides',
  },
  {
    slug: 'apollo-streaming-tv',
    title: 'Apollo Streaming TV',
    subtitle: 'Features, Setup and How It Works',
    icon: '▶️',
    grad1: '#1a001a', grad2: '#330033', grad3: '#0d000d',
    accent1: '#ec4899', accent2: '#db2777',
    category: 'IPTV Guides',
  },
  {
    slug: 'apollo-tv-on-samsung-tv',
    title: 'Apollo TV on Samsung TV',
    subtitle: 'Installation & Setup Guide 2026',
    icon: '📱',
    grad1: '#001a33', grad2: '#00264d', grad3: '#000d1a',
    accent1: '#38bdf8', accent2: '#0ea5e9',
    category: 'Setup Guides',
  },
  {
    slug: 'apollo-tv-on-lg-tv',
    title: 'Apollo TV on LG TV',
    subtitle: 'Easy Setup Guide 2026',
    icon: '🖥️',
    grad1: '#1a0a1a', grad2: '#2d1540', grad3: '#0d050d',
    accent1: '#c084fc', accent2: '#a855f7',
    category: 'Setup Guides',
  },
  {
    slug: 'apollo-cable-tv',
    title: 'Apollo TV vs Cable TV',
    subtitle: '2026 Comparison — Save Up to $1,700/yr',
    icon: '⚡',
    grad1: '#1a1a00', grad2: '#333300', grad3: '#0d0d00',
    accent1: '#facc15', accent2: '#eab308',
    category: 'IPTV Reviews',
  },
  {
    slug: 'apollo-tv-global',
    title: 'Apollo TV Global Access',
    subtitle: 'Watch From Anywhere in the World',
    icon: '🌍',
    grad1: '#001433', grad2: '#002966', grad3: '#000a1a',
    accent1: '#60a5fa', accent2: '#3b82f6',
    category: 'IPTV Guides',
  },
  {
    slug: 'apollo-tv-review',
    title: 'Apollo TV Review 2026',
    subtitle: 'Is It Worth It? Honest Rating',
    icon: '⭐',
    grad1: '#1a0a00', grad2: '#2d1a00', grad3: '#0d0500',
    accent1: '#fb923c', accent2: '#f97316',
    category: 'IPTV Reviews',
  },
]

function wrapText(text, maxChars) {
  const words = text.split(' ')
  const lines = []
  let current = ''
  for (const word of words) {
    if ((current + ' ' + word).trim().length <= maxChars) {
      current = (current + ' ' + word).trim()
    } else {
      if (current) lines.push(current)
      current = word
    }
  }
  if (current) lines.push(current)
  return lines
}

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

async function generateImage(article) {
  const { slug, accent1, accent2, grad1, grad2, grad3 } = article
  const title = escapeXml(article.title)
  const subtitle = escapeXml(article.subtitle)
  const category = escapeXml(article.category)
  const W = 1200, H = 630

  const titleLines = wrapText(title, 28)
  const titleY = titleLines.length === 1 ? 310 : 285
  const titleSVG = titleLines.map((line, i) =>
    `<text x="80" y="${titleY + i * 72}" font-family="Arial,Helvetica,sans-serif" font-size="60" font-weight="bold" fill="white" filter="url(#shadow)">${line}</text>`
  ).join('\n  ')

  const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${grad1}"/>
      <stop offset="55%" style="stop-color:${grad2}"/>
      <stop offset="100%" style="stop-color:${grad3}"/>
    </linearGradient>
    <linearGradient id="acc" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${accent1}"/>
      <stop offset="100%" style="stop-color:${accent2}"/>
    </linearGradient>
    <filter id="shadow">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="rgba(0,0,0,0.5)"/>
    </filter>
    <filter id="glow">
      <feGaussianBlur stdDeviation="20" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- Decorative circles -->
  <circle cx="1050" cy="80" r="280" fill="${accent1}" opacity="0.07" filter="url(#glow)"/>
  <circle cx="150" cy="520" r="200" fill="${accent2}" opacity="0.06" filter="url(#glow)"/>
  <circle cx="600" cy="315" r="350" fill="${accent1}" opacity="0.03"/>

  <!-- Grid lines -->
  <line x1="0" y1="0" x2="${W}" y2="${H}" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
  <line x1="${W}" y1="0" x2="0" y2="${H}" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>

  <!-- Left accent bar -->
  <rect x="0" y="0" width="6" height="${H}" fill="url(#acc)"/>

  <!-- Category badge -->
  <rect x="80" y="60" width="${category.length * 11 + 32}" height="38" rx="19" fill="${accent1}" opacity="0.18"/>
  <rect x="80" y="60" width="${category.length * 11 + 32}" height="38" rx="19" fill="none" stroke="${accent1}" stroke-width="1.5" opacity="0.5"/>
  <text x="${80 + (category.length * 11 + 32) / 2}" y="84" font-family="Arial,Helvetica,sans-serif" font-size="15" font-weight="600" fill="${accent1}" text-anchor="middle">${category}</text>

  <!-- Title -->
  ${titleSVG}

  <!-- Subtitle -->
  <text x="80" y="${titleY + titleLines.length * 72 + 24}" font-family="Arial,Helvetica,sans-serif" font-size="28" fill="rgba(255,255,255,0.55)">${subtitle.length > 45 ? subtitle.substring(0, 45) + '...' : subtitle}</text>

  <!-- Divider -->
  <rect x="80" y="${titleY + titleLines.length * 72 + 60}" width="80" height="4" rx="2" fill="url(#acc)"/>

  <!-- Bottom branding -->
  <rect x="0" y="${H - 70}" width="${W}" height="70" fill="rgba(0,0,0,0.3)"/>
  <circle cx="80" cy="${H - 35}" r="18" fill="url(#acc)" opacity="0.9"/>
  <text x="80" y="${H - 29}" font-family="Arial,Helvetica,sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">A</text>
  <text x="110" y="${H - 30}" font-family="Arial,Helvetica,sans-serif" font-size="18" font-weight="bold" fill="white">Apollo TV IPTV</text>
  <text x="110" y="${H - 12}" font-family="Arial,Helvetica,sans-serif" font-size="13" fill="rgba(255,255,255,0.45)">apollotviptv.com — 40,000+ Channels</text>
</svg>`

  await sharp(Buffer.from(svg))
    .png({ quality: 90 })
    .toFile(`${OUT_DIR}/${slug}.png`)

  console.log(`✓ Generated: ${slug}.png`)
}

async function main() {
  for (const article of articles) {
    await generateImage(article)
  }
  console.log('\n✅ All 11 blog images generated!')
}

main().catch(console.error)
