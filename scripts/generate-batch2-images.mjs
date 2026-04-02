import fs from 'fs'
import path from 'path'
import https from 'https'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '../public/blog')

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

const articles = [
  {
    slug: 'iptv-sports',
    prompt: 'dramatic stadium packed with fans watching live football match on giant screen, IPTV sports streaming interface overlay, multiple sports channels visible, vibrant atmosphere, cinematic lighting, ultra realistic 4k',
  },
  {
    slug: 'apollo-iptv-app',
    prompt: 'modern smartphone and tablet displaying a sleek IPTV streaming app interface with live channels grid, dark theme UI, floating above a desk with smart TV in background, professional tech photography, ultra realistic',
  },
  {
    slug: 'iptv-subscription-provider',
    prompt: 'collage of multiple streaming service subscription cards and remote controls on dark surface, comparing IPTV providers concept, neon accent lighting, professional product photography, ultra realistic',
  },
  {
    slug: 'iptv-buffering-fix',
    prompt: 'person fixing internet router and modem at home, smooth 4K streaming on TV in background, technical setup concept, warm lighting, ultra realistic photography',
  },
]

// Try multiple free providers in order
const providers = [
  {
    name: 'Pollinations.ai',
    getUrl: (prompt) => `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1200&height=630&nologo=true&enhance=true`,
    type: 'direct',
  },
  {
    name: 'Pollinations.ai (model:flux)',
    getUrl: (prompt) => `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1200&height=630&model=flux&nologo=true`,
    type: 'direct',
  },
  {
    name: 'Picsum (placeholder fallback)',
    getUrl: (prompt, index) => `https://picsum.photos/seed/${index}/1200/630`,
    type: 'direct',
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

async function generateImage(article, index) {
  for (const provider of providers) {
    console.log(`  Trying ${provider.name} for ${article.slug}...`)
    const filePath = path.join(OUT_DIR, `${article.slug}.jpg`)
    try {
      const url = provider.getUrl(article.prompt, index)
      await downloadFile(url, filePath)
      const stats = fs.statSync(filePath)
      if (stats.size < 5000) throw new Error('File too small')
      console.log(`  ✓ Saved: ${article.slug}.jpg (${Math.round(stats.size / 1024)}KB) via ${provider.name}`)
      return true
    } catch (err) {
      console.error(`  ✗ ${provider.name} failed: ${err.message}`)
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath)
      await new Promise(r => setTimeout(r, 2000))
    }
  }
  console.error(`✗ All providers failed for: ${article.slug}`)
  return false
}

async function main() {
  console.log('Generating 4 AI images with fallback providers...\n')
  for (let i = 0; i < articles.length; i++) {
    console.log(`\nGenerating: ${articles[i].slug}`)
    await generateImage(articles[i], i + 10)
    await new Promise(r => setTimeout(r, 3000))
  }
  console.log('\n✅ Done!')
}

main()
