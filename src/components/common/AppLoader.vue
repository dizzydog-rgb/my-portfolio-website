<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
const props = defineProps({
  isFinished: {
    type: Boolean,
    default: false,
  },
})

// 定義發送的事件
const emit = defineEmits(['loader-finished'])

const progress = ref(0)
let interval = null
let startTime = 0

// 模擬進度條
const startProgress = () => {
  startTime = Date.now()
  interval = setInterval(() => {
    if (progress.value < 90) {
      const next = progress.value + Math.random() * 5 + 2
      progress.value = Math.min(next, 90) // 確保不超過 90
    } else {
      // 只要到 90 就停止計時器，等待父組件的「載入完成」信號來把進度條推到 100%
      clearInterval(interval)
    }
  }, 50)
}

// 監聽父組件傳來的「載入完成」信號
watch(
  () => props.isFinished,
  async (newVal) => {
    if (newVal) {
      // --- 核心邏輯：計算經過多少時間 ---
      const currentTime = Date.now()
      const elapsedTime = currentTime - startTime
      const minWaitTime = 1800 // 設定最小等待 1.8 秒
      const remainingTime = Math.max(0, minWaitTime - elapsedTime)

      // 等待剩下的時間，把進度條推到 100%
      setTimeout(() => {
        if (interval) clearInterval(interval)
        progress.value = 100

        // 100% 數字出現後，再留一點時間讓 CSS 動畫跑完
        setTimeout(() => {
          emit('loader-finished')
        }, 500)
      }, remainingTime)
    }
  },
)

onMounted(() => {
  startProgress()
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="loader-overlay">
    <div class="loader-content">
      <div class="loader-image">
        <figure><img src="@/assets/images/choju-1.png" alt="" /></figure>
        <figure><img src="@/assets/images/choju-1.png" alt="" /></figure>
        <figure><img src="@/assets/images/choju-1.png" alt="" /></figure>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progress + '%' }"></div>
      </div>
      <p class="progress-text">{{ Math.floor(progress) }}%</p>
    </div>
  </div>
</template>

<style scoped>
.loader-overlay {
  position: fixed;
  inset: 0;
  background: #0f0f0f;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader-content {
  text-align: center;
  width: min(20vw, 200px);
}

.loader-image {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
.loader-image figure {
  width: 33.3%;
  animation: bounce 1.5s infinite ease-in-out;
}
.loader-image figure:nth-child(2) {
  animation-delay: 0.2s;
}
.loader-image figure:nth-child(3) {
  animation-delay: 0.4s;
}

.progress-bar {
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-fill {
  height: 100%;
  background: #ffffff;
  transition: width 0.2s ease-out;
}

.progress-text {
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-family: monospace;
}
</style>
