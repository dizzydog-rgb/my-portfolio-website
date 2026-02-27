<template>
  <div class="hero-wrapper">
    <section class="hero" ref="heroRef">
      <div class="hero__content">
        <h1 class="hero__title">FRONTEND <br />DEVELOPER</h1>
        <BaseButton class="hero__button" @click="goProject"
          ><span>CONTACT ME</span><img src="@/assets/icons/arrow-top-right.svg" alt="arrow"
        /></BaseButton>
      </div>
    </section>
    <section class="ukiyo-stage" ref="stageRef">
      <div class="layer layer--mountains">
        <img
          v-for="n in 4"
          :key="'mtn' + n"
          :src="getImg('mountain', n)"
          :class="[`mtn-img`, `mtn-${n}`]"
        />
      </div>

      <div class="layer layer--waves">
        <img
          v-for="n in 3"
          :key="'wave' + n"
          :src="getImg('wave', n)"
          :class="[`wave-img`, `wave-${n}`]"
        />
      </div>

      <div class="layer layer--people">
        <div class="kabuki--group">
          <img
            v-for="n in 4"
            :key="'ppl' + n"
            :src="getImg('kabuki', n)"
            :class="[`kabuki-img`, `kabuki-${n}`]"
          />
        </div>
        <div class="bijin--group">
          <img
            v-for="n in 5"
            :key="'ppl' + n"
            :src="getImg('bijin', n)"
            :class="[`bijin-img`, `bijin-${n}`]"
          />
        </div>
      </div>

      <div class="stage-overlay"></div>

      <div class="layer layer--monsters">
        <div v-for="n in 10" :key="'mon' + n" class="monster-wrapper">
          <img :src="getImg('monster', n)" :class="[`monster-img`, `monster-${n}`]" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import BaseButton from '../base/BaseButton.vue'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

const heroRef = ref(null)

/**
 * @param {string} name - 類別名稱 (如 'mountain')
 * @param {number} n - 編號 (如 1, 2, 3)
 * @return {string} - 回傳完整圖片路徑 URL
 * 圖片放在: src/assets/images/mountain-1.webp
 */
const getImg = (name, n) => {
  return new URL(`../../assets/images/${name}-${n}.webp`, import.meta.url).href
}

onMounted(() => {
  gsap.set('.hero__title', { yPercent: '20', xPercent: '0', opacity: 1 })
  gsap.set('.mtn-1', { yPercent: '100', xPercent: '0', opacity: 0 })
  gsap.set('.mtn-2', { yPercent: '100', xPercent: '50', opacity: 0 })
  gsap.set('.mtn-3', { yPercent: '100', xPercent: '0', opacity: 0 })
  gsap.set('.wave-1', { yPercent: '100', xPercent: '-20', opacity: 0 })
  gsap.set('.wave-2', { yPercent: '0', xPercent: '-100', opacity: 1 })
  gsap.set('.wave-3', { yPercent: '100', xPercent: '-100', opacity: 0 })
  gsap.set('.wave-3', { yPercent: '100', xPercent: '-100', opacity: 0 })
  gsap.set('.kabuki-1, .kabuki-3, .bijin-1, .bijin-3', {
    xPercent: '-80',
    opacity: 0,
    filter: 'blur(10px)',
    scale: 0.7,
  })
  gsap.set('.kabuki-2, .kabuki-4, .bijin-2, .bijin-4', {
    xPercent: '80',
    opacity: 0,
    filter: 'blur(10px)',
    scale: 0.7,
  })
  gsap.set('.bijin-5', {
    xPercent: '0',
    opacity: 0,
    filter: 'blur(10px)',
    scale: 0.7,
  })
  gsap.set('.monster-wrapper', { yPercent: '0', xPercent: '0', opacity: 0 })
  gsap.set('.monster-img', { yPercent: '0', xPercent: '0', rotation: 0 })

  // 妖怪的網格
  const columns = 4
  const rows = 4
  const gridPoints = []

  // 定義安全區域與邊距
  const marginX = 200
  const marginTop = 120
  const marginBottom = 150
  const monsterWidthOffset = window.innerWidth * 0.15 // 預留妖怪寬度
  const monsterHeightOffset = window.innerHeight * 0.15 // 預留妖怪高度

  const gridWidth = window.innerWidth - marginX * 2 - monsterWidthOffset
  const gridHeight = window.innerHeight - marginTop - marginBottom - monsterHeightOffset

  const spacingX = gridWidth / (columns - 1)
  const spacingY = gridHeight / (rows - 1)

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      gridPoints.push({
        x: marginX + monsterWidthOffset / 2 + c * spacingX,
        y: marginTop + monsterHeightOffset / 2 + r * spacingY,
      })
    }
  }

  // 打亂順序
  gsap.utils.shuffle(gridPoints)

  // 產生在螢幕外的位置
  const getOffscreenPos = () => {
    const side = Math.floor(Math.random() * 4)
    const offset = 200

    switch (side) {
      case 0:
        return { x: Math.random() * window.innerWidth, y: -offset } // 上
      case 1:
        return { x: window.innerWidth + offset, y: Math.random() * window.innerHeight } // 右
      case 2:
        return { x: Math.random() * window.innerWidth, y: window.innerHeight + offset } // 下
      case 3:
        return { x: -offset, y: Math.random() * window.innerHeight } // 左
    }
  }

  // 紅富士先出現
  gsap.to('.mtn-1', {
    yPercent: 0,
    opacity: 1,
    duration: 2,
    ease: 'power2.out',
  })

  gsap.to('.hero__title', {
    yPercent: 0,
    opacity: 0.7,
    duration: 2,
    ease: 'power2.out',
  })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero-wrapper',
      start: 'top top',
      end: '+=6000', // 增加捲動長度，讓動畫慢慢跑
      scrub: 1.5,
      pin: true,
      pinSpacing: true,
      markers: true,
    },
  })

  // 1. 富士山組
  tl.to(
    '.mtn-2',
    { yPercent: 0, xPercent: 0, opacity: 1, duration: 2, ease: 'power2.out' },
    '-=1.5',
  )
    .to(
      '.mtn-3',
      { yPercent: 0, xPercent: 0, opacity: 1, duration: 2, ease: 'power2.out' },
      '-=0.5',
    )
    .to('.mtn-2', { opacity: 0, duration: 2, ease: 'power2.out' }, '-=1.5')
    // 2. 海浪與船組
    .to('.wave-1', { yPercent: 30, xPercent: 0, opacity: 1, stagger: 0.2, duration: 1 }, '-=0.5')
    .to(
      '.wave-1',
      {
        y: -40, // 向上跳動的高度
        duration: 1, // 跳動一次的速度
        repeat: 4, // 根據總時長重複次數 (4 / 0.5 = 8次)
        yoyo: true, // 往返運動
        ease: 'sine.inOut',
      },
      '<',
    )
    .to(
      '.wave-2',
      {
        opacity: 1,
        duration: 4,
        motionPath: {
          path: [
            { x: '0vw', y: 0 },
            { x: '25vw', y: -20 },
            { x: '50vw', y: -40 },
            { x: '75vw', y: -200 },
            { x: '100vw', y: -180 },
            { x: '120vw', y: -80 },
            { x: '150vw', y: -160 }, // 抵達終點
          ],
          curviness: 0.5, // 數值越高，轉彎越圓滑
          type: 'soft',
          autoRotate: false,
        },
        xPercent: -100, // 確保圖片屁股貼齊座標
        ease: 'none',
      },
      '<',
    )
    .to('.wave-3', { yPercent: 0, xPercent: 0, opacity: 1, stagger: 0.2, duration: 2 }, '-=1')
    .to(['.mtn-1', '.mtn-3'], { opacity: 0, duration: 2, ease: 'power2.out' }, '>')
    .to('.wave-1', { opacity: 0, duration: 2, ease: 'power2.out' }, '>')
    .to('.wave-3', { opacity: 0.8, duration: 2, ease: 'power2.out' }, '-=0.5')
  // 3. 歌舞伎演員組
  tl.to(
    '.kabuki-img',
    {
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
      y: -50,
      stagger: {
        each: 2,
        yoyo: true, // **關鍵：浮現後自動跑回 start 狀態 (消失)**
        repeat: 1,
        repeatDelay: 1.5,
      },
      duration: 2.4, // 出現的過程稍慢，顯得虛幻
      ease: 'circ.out', // 稍微帶點頓挫感的緩動
    },
    '+=0.5',
  )

  // 3. 美人組 (5人)
  tl.to(
    '.bijin-img',
    {
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1.05,
      y: -80,
      rotation: () => (Math.random() - 0.5) * 10,
      stagger: {
        each: 2.5,
        yoyo: true,
        repeat: 1,
        repeatDelay: 2,
      },
      duration: 3.5,
      ease: 'sine.inOut',
    },
    '-=2',
  )
  // 4. 變暗，妖怪出現
  tl.to('.stage-overlay', { opacity: 0.7, duration: 1, ease: 'power4.in' }, '-=1')
  tl.fromTo(
    '.monster-wrapper',
    {
      // 起點：從隨機螢幕外進來
      opacity: 0,
      scale: 0.3,
      rotation: 180,
      x: () => getOffscreenPos().x,
      y: () => getOffscreenPos().y,
    },
    {
      // 終點：根據 gridPoints 裡的預算結果
      opacity: 1,
      scale: 1,
      rotation: 0,
      x: (i) => gridPoints[i].x + gsap.utils.random(-30, 30),
      y: (i) => gridPoints[i].y + gsap.utils.random(-30, 30),
      xPercent: -50,
      yPercent: -50,
      stagger: { each: 0.2, from: 'random' },
      duration: 3,
      ease: 'elastic.out(1, 0.3)',
      onComplete() {
        // this 在 GSAP callback 裡指向 tween 本身
        const targets = this.targets()
        targets.forEach((el) => {
          const img = el.querySelector('.monster-img')
          gsap.to(img, {
            x: '+=random(-15, 15)',
            y: '+=random(-10, 10)',
            rotation: 'random(-5, 5)',
            duration: 'random(1.5, 3)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          })
        })
      },
    },
    '+=0.2',
  )
  tl.to(
    '.monster-img',
    {
      opacity: 0,
      scale: 0.8,
      filter: 'blur(10px)',
      duration: 2,
      stagger: {
        each: 0.1,
        from: 'edges',
      },
      ease: 'power2.inOut',
    },
    '+=1',
  )

  tl.to(
    '.stage-overlay',
    {
      opacity: 0,
      duration: 2,
    },
    '<',
  )
})
</script>

<style scoped>
.hero-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.hero {
  width: 100vw;
  height: 100vh;
  padding-top: 75px;
  display: flex;
  justify-content: start;
  align-items: end;
  position: absolute;
  z-index: 60;
}
.hero-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(/src/assets/images/ukiyo-e-parpe-texture.png);
  background-size: cover;
  opacity: 0.7;
  z-index: -1;
}
.hero__title {
  font-size: var(--f120);
  line-height: 1.2;
  color: var(--MainColor);
  padding-left: var(--containerPadding);
  padding-bottom: 40px;
}
.hero__button {
  font-size: var(--f40);
  color: var(--MainColor);
  font-family: var(--SFontSans);
  background: transparent;
  opacity: 1;
  position: absolute;
  right: var(--containerPadding);
  top: 120px;
  z-index: 50;
  box-shadow: none;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  padding: 10px 30px;
}
.hero__button img {
  color: var(--MainColor);
  transition: 0.2s linear;
}

.hero__button:hover {
  background: var(--MainColor);
  color: #ffffff;
  transform: translate(0);
}
.hero__button:hover img {
  transform: rotate(45deg);
  filter: brightness(0) invert(1);
}

.ukiyo-stage {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.layer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

/* 層級排序 */
.layer--mountains {
  z-index: 10;
}
.layer--waves {
  z-index: 15;
}
.layer--people {
  z-index: 20;
} /* 人物夾在山與海之間 */
.stage-overlay {
  position: absolute;
  inset: 0;
  background: black;
  opacity: 0;
  z-index: 25;
}
.layer--monsters {
  z-index: 30;
}

/* 初始位移設定 */
.mtn-img {
  position: absolute;
  bottom: 0;
  left: 0;
}
.mtn-2 {
  bottom: -120px;
}

.wave-img {
  position: absolute;
  bottom: 0;
  left: 0;
}
.wave-2 {
  max-width: 50vw;
  transform: scaleX(-1);
}

.kabuki-img,
.bijin-img {
  max-width: 30vw;
  position: absolute;
  bottom: 10%;
  left: 35vw;
  transform: scale(0.9);

  transform-origin: center bottom;
  will-change: transform, opacity, filter;
}

.monster-wrapper {
  width: 20%;
  max-width: 20%;
  position: absolute;
  top: auto;
  left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.monster-img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
