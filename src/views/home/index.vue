<script lang="ts" setup>
import Background from './components/Background.vue'
import Parallax from 'parallax-js'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const sceneEle = ref<HTMLElement>()
// 视差实例
let parallaxInst: Parallax | undefined = undefined

onMounted(() => {
  if (sceneEle.value) {
    parallaxInst = new Parallax(sceneEle.value)
  }
})

onBeforeUnmount(() => {
  parallaxInst?.destroy()
})
</script>

<template>
  <div class="scene" ref="sceneEle" data-relative-input="true">
    <div class="layer" data-depth="0"></div>
    <!-- 背景 -->
    <div class="layer" data-depth="0.1">
      <Background />
    </div>
    <!-- 博士 -->
    <div class="layer" data-depth="0.15"></div>
    <!-- 干员 -->
    <div class="layer" data-depth="0.2"></div>
    <!-- 用户信息 -->
    <div class="layer" data-depth="0.05"></div>
    <!-- 左右菜单 -->
    <div class="layer" data-depth="0.4"></div>
  </div>
  <div></div>
</template>

<style lang="scss" scoped>
.scene {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #eeeedf;
}

.layer {
  width: 100%;
  height: 100%;
}
</style>
