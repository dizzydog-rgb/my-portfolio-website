<script setup>
  import { ref } from 'vue'
  import BaseButton from './BaseButton.vue'

  const count = ref(0)

  const updateCount = (value) => {
    if(value === 0) count.value = 0
    else count.value += value
  }
</script>

<template>
  <div class="my-counter">
    <h1>CLICK THIS COUNTER !</h1>
    <p>您已經點擊了 {{ count }} 次</p>
    <div class="btns">
      <BaseButton @click="updateCount(1)">點我增加計數</BaseButton>
      <BaseButton type="reset" @click="updateCount(0)">點我歸零</BaseButton>
    </div>
  </div>
</template>

<style scoped>
.my-counter {
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
.my-counter h1 {
  font-family: 'Courier New', Courier, monospace;
  color: red;
  line-height: 1.2;
}
.my-counter p {
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


</style>
