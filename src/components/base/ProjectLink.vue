<template>
  <div class="social-link">
    <a :href="href" target="_blank">
      <div>
        <img v-if="iconName" :src="iconSrc" :alt="label" />
        <span>
          <span class="label-inner">{{ label }}</span>
        </span>
      </div>
      <img src="@/assets/icons/arrow-outward.svg" alt="arrow" />
    </a>
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  // 傳入圖示名稱，例如 "github-icon"
  iconName: {
    type: String,
    required: false,
  },
})

// 處理動態圖片路徑 (Vite 專用寫法)
const iconSrc = computed(() => {
  return new URL(`../../assets/icons/${props.iconName}.svg`, import.meta.url).href
})
</script>

<style scoped>
.social-link a {
  max-width: 140px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 6px;
  text-decoration: none;
  padding: 12px 6px;
}
.social-link a > div {
  display: flex;
  align-items: center;
  gap: 10px;
}
.social-link a > img {
  max-width: 16px;
  position: relative;
  top: 2px;
}
.social-link a span {
  font-size: 14px;
  line-height: 1.2;
  font-family: var(--SFontSans);
  color: var(--SubColor);
}

.social-link a img {
  transition: 0.2s;
}
.social-link a:hover > img {
  transform: rotate(45deg);
  animation: arrow-move 1s 0.2s infinite;
}
@keyframes arrow-move {
  0% {
    transform: translateX(0) rotate(45deg);
  }
  50% {
    transform: translateX(4px) rotate(45deg);
  }
  100% {
    transform: translateX(0) rotate(45deg);
  }
}
</style>
