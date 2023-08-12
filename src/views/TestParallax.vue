<script lang="ts" setup>
import Parallax from 'parallax-js'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const sceneRef = ref<HTMLElement>()
// 视差实例
let parallaxInst: Parallax | undefined = undefined

onMounted(() => {
  if (sceneRef.value) {
    parallaxInst = new Parallax(sceneRef.value)
  }
})

onBeforeUnmount(() => {
  parallaxInst?.destroy()
})
</script>

<template>
  <!-- 场景 -->
  <div
    ref="sceneRef"
    class="absolute w-full h-full bg-yellow overflow-hidden"
    data-relative-input="true"
  >
    <div class="absolute w-100 h-100 bg-red" data-depth="0.2">My first Layer!</div>
    <div class="absolute w-full h-50 bg-green" data-depth="0.6">My second Layer!</div>
  </div>
</template>
