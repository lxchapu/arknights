<script lang="ts" setup>
import Parallax from 'parallax-js'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Background from './components/Background.vue'
import Doctor from './components/Doctor.vue'
import Character from './components/Character.vue'
import UserInfo from './components/UserInfo.vue'
import HeaderMenu from './components/HeaderMenu.vue'
import LeftMenu from './components/left-menu/index.vue'
import RightMenu from './components/RightMenu.vue'
import { random } from 'lodash-es'

const sceneEle = ref<HTMLElement>()
// 视差实例
let parallaxInst: Parallax | undefined = undefined

const voiceList = [
  '博士？这么好的天气，再稍微睡一会儿好吗~',
  '嗯？马上要出发？我刚刚起床......顺便问一下，这里是博士的办公室吗？为什么我会在这里呢？',
  '为什么我要眯起眼睛？因为不想让人看到我的眼睛，谁都不让~♪',
  '我总是不小心受伤呢~不过芙蓉会治好我的，所以我才不怕~啊，不过“治愈料理”是另一回事，那个真是可怕的体验啊......',
  '博士~！我床头多了十个闹钟~！真是过分的恶作剧~到底是谁放的呢？',
  '博士，来玩个游戏吧？头上~放一个红苹果~',
  '我总是在找寻让人开心的事情~也是为了缓和矿石病的痛苦吧。能看到大家开开心心的模样，也是一件快乐的事呀~',
  '总有一天，罗德岛的旅途会结束的。要是能和大家一起，在温暖的天气里香甜地睡一觉，做一场醒不来的梦，该有多好啊~这是我最大的梦想哦~',
  '博士竟然睡得比我还安稳呢......',
  '呼......',
  '嗯？我成长了吗~',
  '博士~啊呼~',
]

const currentVoice = ref('')

/**
 * 点击干员
 */
function handleClickCharacter() {
  const sand = random(voiceList.length - 1)
  currentVoice.value = voiceList[sand]
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
    <div class="layer pointer-events-none" data-depth="0.4">
      <LeftMenu
        :voice="currentVoice"
        @clear-voice="
          () => {
            currentVoice = ''
          }
        "
      />
      <RightMenu />
    </div>
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
