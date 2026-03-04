<template>
  <div class="social-link">
    <a :href="href" target="_blank">
      <div>
        <img :src="iconSrc" :alt="label" />
        <span>{{ label }}</span>
      </div>
      <img src="@/assets/icons/arrow-outward.svg" alt="arrow" />
    </a>
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
    required: true,
  },
})

// 處理動態圖片路徑 (Vite 專用寫法)
const iconSrc = computed(() => {
  return new URL(`../../assets/icons/${props.iconName}.svg`, import.meta.url).href
})
</script>

<style scoped>
.social-link a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  border: 3px solid var(--SubColor);
  border-radius: 50px;
  padding: 12px 20px;
}
.social-link a > div {
  display: flex;
  align-items: center;
  gap: 20px;
}
.social-link a > div img {
  max-width: 24px;
}
.social-link a span {
  font-size: var(--f20);
  font-family: var(--SFontSans);
  color: var(--SubColor);
}

.social-link a,
.social-link a span,
.social-link a img {
  transition: 0.5s;
}
.social-link a:hover {
  background: var(--MainColor);
  border-color: var(--MainColor);
}
.social-link a:hover span {
  color: #ffffff;
}
.social-link a:hover img {
  filter: brightness(0) invert(1);
}
.social-link a:hover > img {
  transform: rotate(45deg);
}
</style>
