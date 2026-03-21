<template>
  <section class="product" ref="productRef">
    <div class="product__content">
      <div class="product__fixed">
        <div class="product__title">
          <div>
            <span>01</span>
            <h6>Design and Frontend Developer</h6>
          </div>
          <h2>Jackie's portfolio website</h2>
        </div>
        <div class="product__title">
          <div>
            <span>02</span>
            <h6>Design and Fullend Developer</h6>
          </div>
          <h2>Orderly & Steady</h2>
        </div>
        <div class="product__title">
          <div>
            <span>03</span>
            <h6>Team Leader and Frontend Developer</h6>
          </div>
          <h2>Chill Around</h2>
        </div>
      </div>
      <div class="product__img">
        <div class="product__item">
          <figure>
            <img src="https://picsum.photos/id/23/850/450" alt="My portfolio website" />
            <figcaption>
              Supported marketing efforts as a generalist designer, contributing to design during
              their second funding round which raised over $2M.
            </figcaption>
            <div class="link__group">
              <ProjectLink
                class="link project_link"
                href="https://github.com/dizzydog-rgb/my-portfolio-website"
                label="View Project"
              />
              <ProjectLink
                class="link project_link"
                href="https://github.com/dizzydog-rgb/my-portfolio-website"
                label="View Github"
              />
            </div>
          </figure>
          <ul class="carousel__text">
            <li><span>Vue.js</span><span>GSAP</span> <span>RWD</span><span>SCSS</span></li>
            <li><span>Vue.js</span><span>GSAP</span> <span>RWD</span><span>SCSS</span></li>
          </ul>
          <div class="product__title__mobile">
            <div>
              <span>01</span>
              <h6>Design and Frontend Developer</h6>
            </div>
            <h2>Jackie's portfolio website</h2>
            <p>
              A responsive product showcase component displaying three portfolio projects with
              scroll-triggered animations. Features a sticky left sidebar with project titles that
              glow when their corresponding images enter the viewport, plus auto-scrolling tech
              stack carousels and adaptive mobile layouts.
            </p>
          </div>
        </div>
        <div class="product__item">
          <figure>
            <img src="https://picsum.photos/id/237/850/450" alt="Orderly & Steady" />
            <figcaption>
              A Vue/Node.js/MySQL web app using AI to classify food (Protein, Starch, Veggies). It
              scores diets based on optimal intake order (Veggies → Protein → Starch) to regulate
              blood sugar, with full Vitest coverage for reliability.
            </figcaption>
            <div class="link__group">
              <ProjectLink
                class="link project_link"
                href="https://github.com/dizzydog-rgb/my-portfolio-website"
                label="View Project"
              />
              <ProjectLink
                class="link project_link"
                href="https://github.com/dizzydog-rgb/my-portfolio-website"
                label="View Github"
              />
            </div>
          </figure>
          <ul class="carousel__text">
            <li>
              <span>Vue.js</span> <span>Node.js</span> <span>MySQL</span
              ><span style="min-width: 160px">AI-Driven</span>
            </li>
            <li>
              <span>Vue.js</span> <span>Node.js</span> <span>MySQL</span><span>AI-Driven</span>
            </li>
          </ul>
          <div class="product__title__mobile">
            <div>
              <span>02</span>
              <h6>Design and Fullend Developer</h6>
            </div>
            <h2>Orderly & Steady</h2>
            <p>
              A responsive product showcase component displaying three portfolio projects with
              scroll-triggered animations. Features a sticky left sidebar with project titles that
              glow when their corresponding images enter the viewport, plus auto-scrolling tech
              stack carousels and adaptive mobile layouts.
            </p>
          </div>
        </div>
        <div class="product__item">
          <figure>
            <img src="https://picsum.photos/id/236/850/450" alt="Chill Around" />
            <figcaption>
              Chill Around is a tourism platform enabling users to explore attractions and plan
              trips. It features an interactive UI for discovering local spots, categories, and
              detailed travel information, providing a seamless experience for travelers to organize
              their itineraries efficiently.
            </figcaption>
            <div class="link__group">
              <ProjectLink
                class="link project_link"
                href="https://github.com/dizzydog-rgb/my-portfolio-website"
                label="View Project"
              />
              <ProjectLink
                class="link project_link"
                href="https://github.com/dizzydog-rgb/my-portfolio-website"
                label="View Github"
              />
            </div>
          </figure>
          <ul class="carousel__text">
            <li>
              <span>Vue.js</span> <span>Node.js</span> <span>RWD</span> <span>RESTful API</span>
            </li>
            <li>
              <span>Vue.js</span> <span>Node.js</span> <span>RWD</span> <span>RESTful API</span>
            </li>
          </ul>
          <div class="product__title__mobile">
            <div>
              <span>03</span>
              <h6>Team Leader and Frontend Developer</h6>
            </div>
            <h2>Chill Around</h2>
            <p>
              Supported marketing efforts as a generalist designer, contributing to design during
              their second funding round which raised over $2M.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import ProjectLink from '../base/ProjectLink.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const titles = gsap.utils.toArray('.product__title')
  const images = gsap.utils.toArray('.product__item')

  if (titles.length === 0 || images.length === 0) return

  titles.forEach((t) => gsap.set(t, { opacity: 0.5, textShadow: '0 0 0px transparent' }))

  images.forEach((img, i) => {
    if (titles.length > 0 && images.length > 0) {
      ScrollTrigger.create({
        trigger: img,
        start: 'top 60%', // 當圖片頂部到達視窗下方 60%
        end: 'bottom 40%', // 當圖片底部離開視窗上方 40%
        refreshPriority: -1,
        onToggle: (self) => {
          if (self.isActive) {
            // 如果有舊的在亮，先關掉
            titles.forEach((t) => deactivateTitle(t))
            activateTitle(titles[i], i)
          } else {
            deactivateTitle(titles[i])

            if (i === 0 && self.direction === -1) {
              activateTitle(titles[0])
            }
          }
        },
      })
    }
  })
})

// --- active 樣式定義 ---
function activateTitle(el) {
  // 1. 透明度切換
  gsap.to(el, {
    opacity: 1,
    duration: 0.8,
    overwrite: 'auto',
  })

  // 2. 呼吸發光效果（textShadow）
  gsap.to(el, {
    textShadow: '0 0 10px #dd551f33, 0 0 15px #dd551f4D, 0 0 20px #dd551f80',
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    overwrite: 'auto',
  })
}

function deactivateTitle(el) {
  // 還原半透明與取消發光
  gsap.to(el, {
    opacity: 0.5,
    textShadow: '0 0 0px rgba(255,255,255,0)',
    duration: 0.5,
    overwrite: 'auto',
  })
}
</script>

<style scoped>
.product {
  background: #ffffff;
  position: relative;
  z-index: 1;
}
.product::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/ukiyo-e-parpe-texture.png');
  background-size: cover;
  opacity: 0.7;
  z-index: -1;
}
.product__content {
  max-width: 1700px;
  margin: 0 auto;
  padding: 0 var(--containerPadding) 120px;
  position: relative;
  display: grid;
  grid-template-columns: 7fr 8.5fr;
  align-items: start;
  gap: 5vw;
}
.product__fixed {
  margin-top: 100px;
  position: sticky;
  top: 200px;
  display: flex;
  flex-flow: column;
  justify-content: start;
  gap: 70px;
}
.product__fixed .product__title {
  opacity: 0.5;
  text-shadow: 0 0 0px transparent;
  will-change: opacity, text-shadow;
}
.product__fixed .product__title > div,
.product__item .product__title__mobile > div {
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--SubColor02);
}
.product__fixed .product__title span,
.product__item .product__title__mobile span {
  font-size: var(--f32);
  color: var(--SubColor);
  letter-spacing: 0.1em;
  line-height: 1.2;
}
.product__fixed .product__title h6,
.product__item .product__title__mobile h6 {
  font-size: var(--f20);
  color: var(--SubColor);
  font-family: var(--SFontSans);
  line-height: 1.2;
  white-space: nowrap;
}
.product__fixed h2,
.product__item .product__title__mobile h2 {
  font-size: var(--f46);
  color: var(--MainColor);
  font-style: italic;
  padding-top: 12px;
}

.product__item .product__title__mobile {
  display: none;
}

.product__img {
  display: flex;
  flex-flow: column;
  gap: 200px;
}
.product__img .product__item {
  position: relative;
}
.product__img .product__item figcaption,
.product__item .product__title__mobile p {
  padding: 20px 15px 0;
  color: var(--MainColor);
}

.product__item .link__group {
  display: flex;
  flex-flow: column;
  gap: 0px;
}

.product__img .product__item .carousel__text {
  width: 100%;
  position: absolute;
  top: 45%;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
}
.product__img .product__item:nth-of-type(2) .carousel__text {
  top: 40%;
}
.product__img .product__item .carousel__text li {
  flex: none;
  min-width: max-content;
  display: flex;
  justify-content: flex-start;
  gap: 2vw;
  padding-left: 3vw;
  font-size: var(--f50);
  color: var(--MainColor);
  line-height: 1.2;
  animation: carousel-right 10s linear infinite;
  white-space: nowrap;
}
.product__img .product__item .carousel__text li span {
  width: auto;
  flex-shrink: 0;
}
@keyframes carousel-right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@media (max-width: 1440px) {
}
@media (max-width: 1024px) {
  .product__content {
    grid-template-columns: 1fr;
  }
  .product__fixed {
    display: none;
  }
  .product__img {
    gap: 120px;
  }
  .product__item .product__title__mobile {
    display: block;
    padding-top: 20px;
  }
  .product__img .product__item figcaption {
    display: none;
  }
  .product__item .product__title__mobile p {
    padding: 12px 0 0;
  }
  .product__img .product__item .carousel__text {
    top: 33.3%;
  }
  .product__item {
    padding-bottom: 60px;
  }
  .product__item .link__group {
    position: absolute;
    bottom: 0;
  }
  .product__item .project_link :deep(a) {
    padding: 6px;
  }
}
@media (max-width: 768px) {
}
@media (max-width: 480px) {
  .product__content {
    padding-bottom: 90px;
  }
  .product__img {
    gap: 60px;
  }
  .product__item .product__title__mobile p {
    line-height: 1.6;
  }
}
</style>
