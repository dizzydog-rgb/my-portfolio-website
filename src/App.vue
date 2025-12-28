<script setup>
import { ref } from 'vue'

const count = ref(0)

const incrementCount = () => {
  count.value = count.value + 1
}
const zeroCount = () => {
  count.value = 0
}
</script>

<template>
  <div class="myCounter">
    <h1>CLICK THIS COUNTER !</h1>
    <p>您已經點擊了 {{ count }} 次</p>
    <div class="btns">
      <button @click="incrementCount">點我增加計數</button>
      <button @click="zeroCount">點我歸零</button>
    </div>
  </div>
  <div class="rabbit">
    <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="dynamicGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="12" result="coloredBlur" />
        </filter>

        <linearGradient id="woodGradientDynamic" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #d98d48; stop-opacity: 1" />
          <stop offset="100%" style="stop-color: #703e18; stop-opacity: 1" />
        </linearGradient>

        <radialGradient id="innerLightDynamic" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stop-color="#FFF3A3" class="inner-light-stop" />
          <stop offset="80%" stop-color="#FFD700" stop-opacity="0" />
        </radialGradient>
      </defs>

      <g class="halo-effect" filter="url(#dynamicGlow)">
        <ellipse cx="100" cy="110" rx="75" ry="65" fill="#FFD700" />
      </g>

      <g transform="translate(10, 10)">
        <path
          d="M35,145 Q15,145 15,125 L25,105 Q90,120 155,105 L165,125 Q165,145 145,145 Z"
          fill="#5C3415"
          stroke="#3E230A"
          stroke-width="2"
        />

        <path
          d="M50,105 C50,70 70,50 100,50 C130,50 150,70 150,105 C150,130 130,140 100,140 C70,140 50,130 50,105 Z"
          fill="url(#woodGradientDynamic)"
          stroke="#3E230A"
          stroke-width="2"
        />
        <path
          d="M70,60 Q55,15 85,10 Q105,15 98,55 Z"
          fill="url(#woodGradientDynamic)"
          stroke="#3E230A"
          stroke-width="2"
        />
        <path
          d="M130,60 Q145,15 115,10 Q95,15 102,55 Z"
          fill="url(#woodGradientDynamic)"
          stroke="#3E230A"
          stroke-width="2"
        />

        <ellipse
          cx="100"
          cy="100"
          rx="45"
          ry="35"
          fill="url(#innerLightDynamic)"
          style="mix-blend-mode: overlay"
        />

        <circle cx="82" cy="85" r="6" fill="#3E230A" />
        <circle cx="118" cy="85" r="6" fill="#3E230A" />
        <path
          d="M100,105 Q100,118 88,118 M100,105 Q100,118 112,118"
          stroke="#3E230A"
          stroke-width="2.5"
          fill="none"
          stroke-linecap="round"
        />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.myCounter {
  width: 600px;
  height: 300px;
  margin: 0 auto;
  border: 5px solid purple;
  background: linear-gradient(to bottom, blue 0, yellow 100%);
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.myCounter h1 {
  font-family: 'Courier New', Courier, monospace;
  color: red;
  line-height: 1.2;
}
.myCounter p {
  font-size: 50px;
  font-weight: bold;
  color: pink;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 40px;
}
.btns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}
.btns button {
  padding: 10px 20px;
  background-color: #2ecc71;
  color: white;
  font-weight: bold;
  letter-spacing: 0.1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.5s;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
.btns button:hover {
  transform: translateY(-4px);
  background: #ffffff;
  color: #2ecc71;
}
.btns button:active {
  transform: translateY(2px);
  box-shadow: none;
}

.rabbit {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
:global(.halo-effect) {
  transform-origin: center;
  animation: pulseGlow 3s ease-in-out infinite;
}

:global(.inner-light-stop) {
  animation: innerPulse 3s ease-in-out infinite;
}

/* 定義呼吸燈動畫 */
@keyframes pulseGlow {
  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.1);
  }
}

@keyframes innerPulse {
  0%,
  100% {
    stop-opacity: 0.4;
  }
  50% {
    stop-opacity: 0.9;
  }
}

/* 應用動畫到 SVG 元素 */
.halo-effect {
  /* 設置變換原點在中心，確保縮放時居中 */
  transform-origin: center;
  animation: pulseGlow 3s ease-in-out infinite;
}

.inner-light-stop {
  animation: innerPulse 3s ease-in-out infinite;
}
</style>
