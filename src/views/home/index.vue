<script lang="ts" setup>
import Parallax from 'parallax-js'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Background from './components/Background.vue'
import Doctor from './components/Doctor.vue'
import Character from './components/Character.vue'
import UserInfo from './components/UserInfo.vue'
import HeaderMenu from './components/HeaderMenu.vue'

const sceneEle = ref<HTMLElement>()
// 视差实例
let parallaxInst: Parallax | undefined = undefined

/**
 * 点击干员
 */
function handleClickCharacter() {
  console.log('click character')
}

onMounted(() => {
  if (sceneEle.value) {
    parallaxInst = new Parallax(sceneEle.value, {
      pointerEvents: true,
      relativeInput: true,
      scalarX: 20,
      scalarY: 15,
    })
  }
})

onBeforeUnmount(() => {
  parallaxInst?.destroy()
})
</script>

<template>
  <div class="scene" ref="sceneEle">
    <div class="layer" data-depth="0"></div>
    <!-- 背景 -->
    <div class="layer" data-depth="0.1">
      <Background />
    </div>
    <!-- 博士 -->
    <div class="layer" data-depth="0.15">
      <Doctor />
    </div>
    <!-- 干员 -->
    <div class="layer" data-depth="0.2">
      <Character @click="handleClickCharacter" />
    </div>
    <!-- 用户信息 -->
    <div class="layer pointer-events-none" data-depth="0.05">
      <UserInfo />
    </div>
    <!-- 左右菜单 -->
    <div class="layer pointer-events-none" data-depth="0.4"></div>
  </div>
  <div class="fixed left-0 top-0">
    <HeaderMenu />
  </div>
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
