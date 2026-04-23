import fs from 'fs'
import path from 'path'
import https from 'https'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '../public/blog')

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

const articles = [
  {
    slug: 'apollo-iptv-app',
    prompt: 'modern smartphone and tablet displaying sleek IPTV streaming app interface with live channels grid, dark theme UI, smart TV in background, professional tech photography, ultra realistic 4k',
  },
  {
    slug: 'iptv-subscription-provider',
    prompt: 'collage of streaming service subscription cards and remote controls on dark surface, comparing IPTV providers concept, neon accent lighting, professional product photography, ultra realistic 4k',
  },
  {
    slug: 'best-american-iptv',
    prompt: 'USA flag backdrop with smart TV showing live American sports channels ESPN NFL NBA, streaming interface overlay, modern living room setup, cinematic lighting, ultra realistic 4k photography',
  },
  {
    slug: 'best-canadian-iptv',
    prompt: 'Canada flag backdrop with smart TV showing live Canadian channels NHL hockey TSN CBC, streaming interface overlay, cozy modern living room, cinematic lighting, ultra realistic 4k photography',
  },
  {
    slug: 'apollogroup-tv-roku',
    prompt: 'Roku streaming stick plugged into modern 4K TV showing IPTV channel grid interface, dark home theater setup, remote control in foreground, professional tech photography, ultra realistic',
  },
  {
    slug: 'apollo-iptv-channels',
    prompt: 'massive TV channel grid mosaic showing sports news entertainment icons from around the world, colorful grid layout on large screen, modern digital concept, ultra realistic 4k',
  },
  {
    slug: 'buy-apollo-iptv',
    prompt: 'person completing online IPTV subscription purchase on laptop, credit card and smartphone nearby, secure checkout concept, dark modern desk setup, professional photography, ultra realistic 4k',
  },
]

const providers = [
  {
    name: 'Pollinations.ai',
    getUrl: (prompt) => `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1200&height=630&nologo=true&enhance=true`,
  },
  {
    name: 'Pollinations.ai flux',
    getUrl: (prompt) => `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1200&height=630&model=flux&nologo=true`,
  },
]

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const tmpDest = dest + '.tmp'
    const file = fs.createWriteStream(tmpDest)
    function request(currentUrl, redirects = 0) {
      if (redirects > 5) { file.destroy(); return reject(new Error('Too many redirects')) }
      https.get(currentUrl, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          res.resume()
          return request(res.headers.location, redirects + 1)
        }
        if (res.statusCode !== 200) {
          res.resume()
          file.destroy()
          return reject(new Error(`Status ${res.statusCode}`))
        }
        res.pipe(file)
        file.on('finish', () => {
          file.close(() => {
            try {
              if (fs.existsSync(dest)) fs.unlinkSync(dest)
              fs.renameSync(tmpDest, dest)
              resolve()
            } catch (e) { reject(e) }
          })
        })
        file.on('error', (e) => { file.destroy(); reject(e) })
      }).on('error', (e) => { file.destroy(); reject(e) })
    }
    request(url)
  })
}

async function generateImage(article) {
  const filePath = path.join(OUT_DIR, `${article.slug}.jpg`)
  for (const provider of providers) {
    console.log(`  Trying ${provider.name} for ${article.slug}...`)
    try {
      const url = provider.getUrl(article.prompt)
      await downloadFile(url, filePath)
      const stats = fs.statSync(filePath)
      if (stats.size < 5000) throw new Error('File too small')
      console.log(`  ✓ Saved: ${article.slug}.jpg (${Math.round(stats.size / 1024)}KB)`)
      return true
    } catch (err) {
      console.error(`  ✗ ${provider.name} failed: ${err.message}`)
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath)
      await new Promise(r => setTimeout(r, 3000))
    }
  }
  console.error(`✗ All providers failed for: ${article.slug}`)
  return false
}

async function main() {
  console.log(`Generating ${articles.length} AI images...\n`)
  for (const article of articles) {
    console.log(`\nGenerating: ${article.slug}`)
    await generateImage(article)
    await new Promise(r => setTimeout(r, 4000))
  }
  console.log('\n✅ Done!')
}

main()
