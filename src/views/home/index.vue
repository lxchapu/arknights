<script lang="ts" setup>
import Parallax from 'parallax-js'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import Background from './components/Background.vue'
import Doctor from './components/Doctor.vue'
import Character from './components/Character.vue'
import UserInfo from './components/UserInfo.vue'
import HeaderMenu from './components/HeaderMenu.vue'
import LeftMenu from './components/left-menu/index.vue'
import RightMenu from './components/right-menu/index.vue'
import { random } from 'lodash-es'
import { Howl, Howler } from 'howler'

const sceneEle = ref<HTMLElement>()
// 视差实例
let parallaxInst: Parallax | undefined = undefined
// 干员音效实例
let charSandInst: Howl | null = null

const voiceList = [
  {
    title: '任命助理',
    detail: '博士？这么好的天气，再稍微睡一会儿好吗~',
    audio: '/voice/char_kroos/CN_001.wav',
  },
  {
    title: '交谈1',
    detail: '嗯？马上要出发？我刚刚起床……顺便问一下，这里是博士的办公室吗？为什么我会在这里呢？',
    audio: '/voice/char_kroos/CN_002.wav',
  },
  {
    title: '交谈2',
    detail: '为什么我要眯起眼睛？因为不想让人看到我的眼睛，谁都不让~♪',
    audio: '/voice/char_kroos/CN_003.wav',
  },
  {
    title: '交谈3',
    detail:
      '我总是不小心受伤呢~但芙蓉会治好我的，所以我才不怕~啊，不过“治愈料理”是另一回事，那个真是可怕的体验啊……',
    audio: '/voice/char_kroos/CN_004.wav',
  },
  {
    title: '晋升后交谈1',
    detail: '博士~！我床头多了十个闹钟~！真是过分的恶作剧~到底是谁放的呢？',
    audio: '/voice/char_kroos/CN_005.wav',
  },
  {
    title: '信赖提升后交谈1',
    detail: '博士，来玩个游戏吧？头上~放一个红苹果~',
    audio: '/voice/char_kroos/CN_006.wav',
  },
  {
    title: '信赖提升后交谈2',
    detail:
      '我总是在找寻让人开心的事情~也是为了缓和矿石病的痛苦吧。能看到大家开开心心的模样，也是一件快乐的事呀~',
    audio: '/voice/char_kroos/CN_007.wav',
  },
  {
    title: '信赖提升后交谈3',
    detail:
      '总有一天，罗德岛的旅途会结束的。要是能和大家一起，在温暖的天气里香甜地睡一觉，做一场醒不来的梦，该有多好啊~这是我最大的梦想哦~',
    audio: '/voice/char_kroos/CN_008.wav',
  },
  {
    title: '闲置',
    detail: '博士竟然睡得比我还安稳呢……',
    audio: '/voice/char_kroos/CN_009.wav',
  },
  {
    title: '干员报到',
    detail: '嗨~嗨~我是克洛丝哦~我还不成熟，从今天开始会加油的~',
    audio: '/voice/char_kroos/CN_010.wav',
  },
  {
    title: '观看作战记录',
    detail: '谢谢啦~',
    audio: '/voice/char_kroos/CN_011.wav',
  },
  {
    title: '精英化晋升1',
    detail: '晋升啦~做了个好梦呢~嗯？不是在梦中吗？',
    audio: '/voice/char_kroos/CN_012.wav',
  },
  {
    title: '编入队伍',
    detail: '那个，集合地点在哪呢？',
    audio: '/voice/char_kroos/CN_013.wav',
  },
  {
    title: '任命队长',
    detail: '晋升啦~做了个好梦呢~嗯？不是在梦中吗？',
    audio: '/voice/char_kroos/CN_014.wav',
  },
  {
    title: '行动出发',
    detail: '大家~嗯，可以放松一下哦~',
    audio: '/voice/char_kroos/CN_015.wav',
  },
  {
    title: '行动开始',
    detail: '为什么，大家不能好好相处呢……？',
    audio: '/voice/char_kroos/CN_016.wav',
  },
  {
    title: '选中干员1',
    detail: '好~',
    audio: '/voice/char_kroos/CN_017.wav',
  },
  {
    title: '选中干员2',
    detail: '慢慢来就好哦~',
    audio: '/voice/char_kroos/CN_018.wav',
  },
  {
    title: '部署1',
    detail: '嗯嗯，听着呢~',
    audio: '/voice/char_kroos/CN_019.wav',
  },
  {
    title: '部署2',
    detail: '战斗的时候可是不会睡着的~',
    audio: '/voice/char_kroos/CN_020.wav',
  },
  {
    title: '作战中1',
    detail: '你在这里~',
    audio: '/voice/char_kroos/CN_021.wav',
  },
  {
    title: '作战中2',
    detail: '在~这~里~哦',
    audio: '/voice/char_kroos/CN_022.wav',
  },
  {
    title: '作战中3',
    detail: '瞄准~！',
    audio: '/voice/char_kroos/CN_023.wav',
  },
  {
    title: '完成高难行动',
    detail: '呼~好辛苦啊……',
    audio: '/voice/char_kroos/CN_024.wav',
  },
  {
    title: '3星结束行动',
    detail: '我觉得还可以哦！',
    audio: '/voice/char_kroos/CN_025.wav',
  },
  {
    title: '非3星结束行动',
    detail: '嗯，稍微有点遗憾……',
    audio: '/voice/char_kroos/CN_026.wav',
  },
  {
    title: '行动失败',
    detail: '对、对不起……下次我会更加努力的……！',
    audio: '/voice/char_kroos/CN_027.wav',
  },
  {
    title: '进驻设施',
    detail: '在这里能睡个好觉吗？',
    audio: '/voice/char_kroos/CN_028.wav',
  },
  {
    title: '戳一下',
    detail: '呼……',
    audio: '/voice/char_kroos/CN_029.wav',
  },
  {
    title: '信赖触摸',
    detail: '嗯？我成长了吗~',
    audio: '/voice/char_kroos/CN_030.wav',
  },
  {
    title: '标题',
    detail: '明日方舟。',
    audio: '/voice/char_kroos/CN_031.wav',
  },
  {
    title: '问候',
    detail: '博士~啊呼~',
    audio: '/voice/char_kroos/CN_032.wav',
  },
]

const currentVoice = ref(-1)

const voiceText = computed(() => {
  if (currentVoice.value > -1) {
    return voiceList[currentVoice.value].detail
  }
  return ''
})

// 自动播放背景音乐
new Howl({
  src: ['/music/sys.mp3'],
  volume: 0.7,
  loop: true,
  autoplay: true,
})

/**
 * 点击干员
 */
function handleClickCharacter() {
  const len = currentVoice.value > -1 ? voiceList.length - 1 : voiceList.length
  let index = random(len - 1)
  if (index >= currentVoice.value) {
    index += 1
  }
  if (charSandInst) {
    charSandInst.unload()
  }
  currentVoice.value = index
  charSandInst = new Howl({
    src: [voiceList[index].audio],
  })
  charSandInst.play()
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
  Howler.unload()
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
        :voice="voiceText"
        @clear-voice="
          () => {
            currentVoice = -1
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
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
