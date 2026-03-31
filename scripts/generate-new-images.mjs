import fs from 'fs'
import path from 'path'
import https from 'https'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '../public/blog')

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

const articles = [
  {
    slug: 'apollo-iptv-free',
    prompt: 'person happily watching free streaming TV trial on laptop at home, modern living room, celebration expression, free trial banner on screen, warm lighting, ultra realistic photography',
  },
  {
    slug: 'apollo-group-tv-legal',
    prompt: 'legal justice scales balanced with a television streaming device and gavel on desk, law concept with technology, professional studio lighting, dark background with blue accents, ultra realistic',
  },
  {
    slug: 'apollo-tv-usa',
    prompt: 'American flag reflection on a modern 4K smart TV showing US sports channels CNN Fox News ESPN in a cozy American living room, patriotic colors, ultra realistic photography',
  },
  {
    slug: 'apollo-group-iptv',
    prompt: 'premium IPTV service dashboard showing thousands of international channels on a futuristic TV interface, dark theme with neon highlights, multiple device screens showing different content, cinematic digital art',
  },
]

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    function request(currentUrl, redirects = 0) {
      if (redirects > 5) return reject(new Error('Too many redirects'))
      https.get(currentUrl, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) return request(res.headers.location, redirects + 1)
        if (res.statusCode !== 200) return reject(new Error(`Status ${res.statusCode}`))
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
    if (stats.size < 5000) throw new Error('File too small')
    console.log(`✓ Saved: ${article.slug}.jpg (${Math.round(stats.size / 1024)}KB)`)
  } catch (err) {
    console.error(`✗ Failed: ${article.slug} — ${err.message}`)
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath)
  }
  await new Promise(r => setTimeout(r, 3000))
}

async function main() {
  console.log('Generating 4 AI images...\n')
  for (const article of articles) await generateImage(article)
  console.log('\n✅ Done!')
}

main()
