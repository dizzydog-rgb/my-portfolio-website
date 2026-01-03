<script setup>
import BaseCounter from './components/base/BaseCounter.vue'
import TwoTwo from './components/base/TwoTwo.vue';
</script>

<template>
  <main>
    <HeroSection />

    <section class="demo-section">
      <div>
        <h2>計數器展示</h2>
        <BaseCounter />
        <BaseCounter />
      </div>
      <div>
        <h2>兔兔展示</h2>
        <TwoTwo />
      </div>
    </section>
  </main>
</template>

<style scoped></style>
