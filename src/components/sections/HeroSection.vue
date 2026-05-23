<template>
  <div class="hero-wrapper" ref="mainContainer">
    <section class="hero" ref="heroRef">
      <div class="hero__content">
        <h1 class="hero__title">FRONTEND <br />DEVELOPER</h1>
        <div class="button__container">
          <BaseButton class="hero__button" @click="goProject"
            ><span>CONTACT ME</span><img src="@/assets/icons/arrow-top-right.svg" alt="arrow"
          /></BaseButton>
        </div>
      </div>
    </section>
    <section class="ukiyo-stage" ref="stageRef">
      <div class="layer layer--mountains">
        <img
          v-for="n in 3"
          :key="'mtn' + n"
          :src="getImg('mountain', n)"
          :class="[`mtn-img`, `mtn-${n}`]"
          :alt="`Mountain ukiyo-e ${n}`"
          width="1920"
          height="1071"
          :fetchpriority="n === 1 ? 'high' : undefined"
        />
      </div>

      <div class="layer layer--waves">
        <img
          v-for="n in 2"
          :key="'wave' + n"
          :src="getImg('wave', n)"
          :class="[`wave-img`, `wave-${n}`]"
          :alt="`Wave ukiyo-e ${n}`"
          width="2315"
          height="628"
        />
      </div>

      <div class="layer layer--people">
        <div class="kabuki--group">
          <img
            v-for="n in 4"
            :key="'ppl' + n"
            :src="getImg('kabuki', n)"
            :class="[`kabuki-img`, `kabuki-${n}`]"
            :alt="`Kabuki ukiyo-e ${n}`"
            width="800"
            height="1179"
          />
        </div>
        <div class="bijin--group">
          <img
            v-for="n in 5"
            :key="'ppl' + n"
            :src="getImg('bijin', n)"
            :class="[`bijin-img`, `bijin-${n}`]"
            :alt="`Bijin ukiyo-e ${n}`"
            width="800"
            height="1097"
          />
        </div>
      </div>

      <div class="stage-overlay"></div>

      <div class="layer layer--monsters">
        <div v-for="n in 10" :key="'mon' + n" class="monster-wrapper">
          <img
            :src="getImg('monster', n)"
            :class="[`monster-img`, `monster-${n}`]"
            :alt="`Monster ukiyo-e ${n}`"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import BaseButton from '../base/BaseButton.vue'

const props = defineProps({
  isStart: {
    type: Boolean,
    default: false,
  },
})

const goProject = () => {
  const user = 'yisheng.chen.jackie'
  const domain = 'gmail.com'
  window.location.href = `mailto:${user}@${domain}`
}

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

const heroRef = ref(null)
const mainContainer = ref(null) // 新增此行
let ctx // GSAP 上下文變數

/**
 * @param {string} name - 類別名稱 (如 'mountain')
 * @param {number} n - 編號 (如 1, 2, 3)
 * @return {string} - 回傳完整圖片路徑 URL
 * 圖片放在: src/assets/images/mountain-1.webp
 */
const getImg = (name, n) => {
  return new URL(`../../assets/images/${name}-${n}.webp`, import.meta.url).href
}

const emit = defineEmits(['heroImagesLoaded'])

onMounted(async () => {
  // 等待所有圖片載入完成
  await waitForImages()
  // 通知父組件 HomeView 的圖片已經載入完成
  emit('heroImagesLoaded')

  // 使用 gsap.context 包裹，並限制作用域在 heroRef 內，方便清理與防止全域污染
  ctx = gsap.context(() => {
    // 設置初始狀態
    gsap.set('.mtn-1', { yPercent: '100', xPercent: '0', opacity: 0 })
    gsap.set('.mtn-2', { yPercent: '100', xPercent: '50', opacity: 0 })
    gsap.set('.mtn-3', { yPercent: '100', xPercent: '0', opacity: 0 })
    gsap.set('.wave-1', { yPercent: '100', xPercent: '-20', opacity: 0 })
    gsap.set('.wave-2', { yPercent: '100', xPercent: '-50', opacity: 0 })
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

    // 響應式 - 定義安全區域與邊距
    const isMobile = window.innerWidth < 768
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024
    const isSmallMobile = window.innerWidth <= 480

    const marginX = isMobile ? 75 : isTablet ? 100 : 200
    const marginTop = isMobile ? 100 : 120
    const marginBottom = isMobile ? 100 : 150

    const monsterWidthOffset = window.innerWidth * 0.15 // 預留妖怪寬度
    const monsterHeightOffset = window.innerHeight * 0.15 // 預留妖怪高度

    const gridWidth = window.innerWidth - marginX * 2 - monsterWidthOffset
    const gridHeight = window.innerHeight - marginTop - marginBottom - monsterHeightOffset

    const spacingX = gridWidth / Math.max(columns - 1, 1)
    const spacingY = gridHeight / Math.max(rows - 1, 1)

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

    // 按鈕和標題的載入動畫
    const playEntranceAnim = () => {
      if (window.innerWidth <= 768) {
        gsap.set('.hero__title', { opacity: 0 })
      } else {
        gsap.fromTo(
          '.hero__title',
          { yPercent: 20, opacity: 0 },
          { yPercent: 0, opacity: 0.7, duration: 2, ease: 'power2.out' },
        )
      }
      gsap.fromTo(
        '.button__container',
        { xPercent: -100 },
        { xPercent: 0, duration: 2, ease: 'bounce.out' },
      )
    }
    watch(
      () => props.isStart,
      (newVal) => {
        if (newVal) {
          playEntranceAnim()
        }
      },
    )

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.value,
        start: 'top top',
        end: '+=6000', // 增加捲動長度，讓動畫慢慢跑
        refreshPriority: 1,
        scrub: 1.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    })

    // 1. 富士山組
    // .set 讓回溯時紅富士也能出現
    tl.set('.mtn-1', { opacity: 1, yPercent: 0 }, 0)
      .to('.mtn-2', { yPercent: 0, xPercent: 0, opacity: 1, duration: 2, ease: 'power2.out' })
      .to(
        '.mtn-3',
        { yPercent: 0, xPercent: 0, opacity: 1, duration: 2, ease: 'power2.out' },
        '+=0.5',
      )
      .to('.mtn-2', { opacity: 0, duration: 2, ease: 'power2.out' }, '-=1.5')
      // 2. 海浪組
      .to('.wave-1', { yPercent: 30, xPercent: 0, opacity: 1, stagger: 0.2, duration: 1 }, '-=0.5')
      .to(
        '.wave-1',
        {
          y: -40, // 向上跳動的高度
          duration: 2, // 跳動一次的速度
          repeat: 3, // 根據總時長重複次數 (3 / 0.5 = 6次)
          yoyo: true, // 往返運動
          ease: 'sine.inOut',
        },
        '<',
      )
      .to('.wave-2', { yPercent: 0, xPercent: 0, opacity: 1, stagger: 0.2, duration: 2 }, '-=1')
      .to(['.mtn-1', '.mtn-3'], { opacity: 0, duration: 2, ease: 'power2.out' }, '>')
      .to('.wave-1', { opacity: 0, duration: 2, ease: 'power2.out' }, '>')
      .to('.wave-2', { opacity: 0.8, duration: 2, ease: 'power2.out' }, '-=0.5')
    // 3. 歌舞伎演員組
    tl.to(
      '.kabuki-img',
      {
        opacity: 1,
        filter: 'blur(0px)',
        scale: 1,
        y: isSmallMobile ? -(window.innerHeight * 0.35) : -50,
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
        y: isSmallMobile ? -(window.innerHeight * 0.38) : -80,
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
    tl.to({}, { duration: 2 })
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
  }, mainContainer.value)
})

// 組件卸載時，自動清理所有 GSAP 動畫與 ScrollTrigger 資源，防止記憶體洩漏
onUnmounted(() => {
  if (ctx) ctx.revert()
})

// 等待所有圖片載入的函數
const waitForImages = () => {
  return new Promise((resolve) => {
    const images = document.querySelectorAll('.ukiyo-stage img')
    let loadedCount = 0
    const totalImages = images.length

    const timeout = setTimeout(() => {
      console.warn('圖片載入超時，繼續執行動畫')
      resolve()
    }, 3000) // 3秒超時

    if (totalImages === 0) {
      clearTimeout(timeout)
      resolve()
      return
    }

    const onLoad = (e) => {
      // 移除事件監聽器，避免重複觸發
      if (e && e.target) {
        e.target.removeEventListener('load', onLoad)
        e.target.removeEventListener('error', onLoad)
      }

      loadedCount++
      if (loadedCount === totalImages) {
        clearTimeout(timeout)
        resolve()
      }
    }

    images.forEach((img) => {
      if (img.complete) {
        onLoad()
      } else {
        img.addEventListener('load', onLoad)
        img.addEventListener('error', onLoad) // 即使載入失敗也繼續
      }
    })
  })
}
</script>

<style scoped>
.hero-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
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
  background-image: url(/src/assets/images/ukiyo-e-parpe-texture.webp);
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
.button__container {
  position: absolute;
  right: var(--containerPadding);
  top: 120px;
  z-index: 50;
}
.hero__button {
  font-size: var(--f40);
  color: var(--MainColor);
  font-family: var(--SFontSans);
  background: transparent;
  opacity: 1;
  box-shadow: none;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  padding: 10px 30px;
  transition: 0.5s;
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
  width: 100%;
  height: auto;
}
.mtn-2 {
  bottom: -120px;
}

.wave-img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
}

.kabuki-img,
.bijin-img {
  max-width: 30vw;
  height: auto;
  position: absolute;
  bottom: 0%;
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

@media (max-width: 1440px) {
}
@media (max-width: 1024px) {
  .monster-wrapper {
    width: 25%;
    max-width: 25%;
  }
  .monster-wrapper:nth-child(n + 7) {
    display: none;
  }
}
@media (max-width: 768px) {
  .monster-wrapper {
    width: 40%;
    max-width: 40%;
  }
}
@media (max-width: 480px) {
}
</style>
