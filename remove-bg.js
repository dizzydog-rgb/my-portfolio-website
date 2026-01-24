import { removeBackground } from '@imgly/background-removal-node'
import { Buffer } from 'node:buffer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { createRequire } from 'module'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const require = createRequire(import.meta.url)

// 針對新版 Jimp 的解構載入
const jimpModule = require('jimp')
const Jimp = jimpModule.Jimp || jimpModule

async function processImages() {
  const inputDir = path.join(__dirname, 'images-processing/raw')
  const outputDir = path.join(__dirname, 'images-processing/no-bg')
  const finalDir = path.join(__dirname, 'images-processing/processed')

  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true })
  if (!fs.existsSync(finalDir)) fs.mkdirSync(finalDir, { recursive: true })

  const files = fs.readdirSync(inputDir)

  for (const file of files) {
    if (!file.match(/\.(jpg|jpeg|png|webp)$/i)) continue

    console.log(`🚀 正在處理: ${file}...`)
    try {
      const inputPath = path.join(inputDir, file)
      const inputUrl = pathToFileURL(inputPath).href

      // 1. AI 去背
      const config = { model: 'medium', output: { format: 'image/png', quality: 0.8 } }
      const blob = await removeBackground(inputUrl, config)
      const buffer = Buffer.from(await blob.arrayBuffer())

      // 2. Jimp 裁切階段 (增加容差度版本)
      console.log(`  🎨 正在自動裁切邊界 (含容差處理)...`)
      const image = await Jimp.read(buffer)

      // 使用自定義設定進行裁切
      console.log(`  📊 裁切前尺寸: ${image.width}x${image.height}`)
      image.autocrop({
        leaveBorder: 0, // 不保留任何邊距
        tolerance: 0.2, // ✨ 關鍵：給予 2% 的容差，忽略邊緣微小的髒像素
        cropOnlyFrames: false,
      })
      console.log(`  📊 裁切後尺寸: ${image.width}x${image.height}`)

      // 新版取得 Buffer 的方式
      const processedBuffer = await image.getBuffer('image/png')

      // 3. 寫入檔案
      const fileName = file.replace(/\.[^.]+$/, '.png')
      fs.writeFileSync(path.join(outputDir, fileName), processedBuffer)
      fs.writeFileSync(path.join(finalDir, fileName), processedBuffer)

      console.log(`✅ 已完成: ${fileName}`)
    } catch (err) {
      console.error(`❌ 處理 ${file} 失敗:`, err.message)
    }
  }
  console.log('\n🎉 所有資產處理完畢！')
}

processImages()
