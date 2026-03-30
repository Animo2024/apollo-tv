import fs from 'fs'
import path from 'path'
import https from 'https'
import http from 'http'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '../public/blog')

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

const articles = [
  {
    slug: 'best-iptv-service-2026',
    prompt: 'cinematic modern living room with large 4K smart TV showing hundreds of live TV channels streaming interface, futuristic glowing screen, dark ambient lighting, ultra realistic, 4k',
  },
  {
    slug: 'apollo-tv-firestick',
    prompt: 'Amazon Fire TV Stick plugged into modern television showing streaming app with live channels, dark studio background, professional product photography, ultra realistic, 4k',
  },
  {
    slug: 'sites-like-apollo-tv',
    prompt: 'futuristic digital collage of multiple TV screens showing different streaming services floating in dark tech background, neon glowing lights, cinematic comparison concept art, 4k',
  },
  {
    slug: 'apollo-tv-online',
    prompt: 'person using laptop watching live TV streaming online in bright modern home office, multiple device screens showing live channels, professional photography, ultra realistic',
  },
  {
    slug: 'apollo-tv-smart-tv',
    prompt: 'sleek modern smart TV mounted on living room wall displaying beautiful streaming interface with many channels, minimalist interior design, warm lighting, ultra realistic photography',
  },
  {
    slug: 'apollo-streaming-tv',
    prompt: 'dynamic digital art of TV signals flowing through fiber optic cables into modern television, blue purple glowing light trails, dark background, cinematic tech concept art, 4k',
  },
  {
    slug: 'apollo-tv-on-samsung-tv',
    prompt: 'Samsung QLED television in elegant modern living room displaying vibrant streaming interface, premium home entertainment setup, soft ambient lighting, ultra realistic product photography',
  },
  {
    slug: 'apollo-tv-on-lg-tv',
    prompt: 'LG OLED television showing live sports on streaming app in dark home cinema room, dramatic lighting, premium setup, ultra realistic photography, 4k',
  },
  {
    slug: 'apollo-cable-tv',
    prompt: 'split comparison scene old tangled cable TV setup versus clean modern smart TV streaming setup, conceptual photo, professional lighting, ultra realistic',
  },
  {
    slug: 'apollo-tv-global',
    prompt: 'glowing digital globe with satellite signals and streaming data connecting countries worldwide, international TV channels floating around earth, dark space background, cinematic digital art',
  },
  {
    slug: 'apollo-tv-review',
    prompt: 'professional home theater setup with modern 4K television showing premium IPTV streaming interface, five gold stars floating, clean studio background, professional photography, ultra realistic',
  },
]

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    const protocol = url.startsWith('https') ? https : http

    function request(currentUrl, redirects = 0) {
      if (redirects > 5) return reject(new Error('Too many redirects'))
      protocol.get(currentUrl, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          return request(res.headers.location, redirects + 1)
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`Status ${res.statusCode}`))
        }
        res.pipe(file)
        file.on('finish', () => { file.close(); resolve() })
        file.on('error', reject)
      }).on('error', reject)
    }

    request(url)
  })
}

async function generateImage(article) {
  console.log(`Generating: ${article.slug}...`)

  const encodedPrompt = encodeURIComponent(article.prompt)
  const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1200&height=630&nologo=true&enhance=true`
  const filePath = path.join(OUT_DIR, `${article.slug}.jpg`)

  try {
    await downloadFile(url, filePath)
    const stats = fs.statSync(filePath)
    if (stats.size < 5000) throw new Error('File too small, likely failed')
    console.log(`✓ Saved: ${article.slug}.jpg (${Math.round(stats.size / 1024)}KB)`)
  } catch (err) {
    console.error(`✗ Failed: ${article.slug} — ${err.message}`)
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath)
  }

  // Wait between requests
  await new Promise(r => setTimeout(r, 3000))
}

async function main() {
  console.log('Generating 11 AI images via Pollinations.ai (free)...\n')
  for (const article of articles) {
    await generateImage(article)
  }
  console.log('\n✅ All done! Check public/blog/')
}

main()
