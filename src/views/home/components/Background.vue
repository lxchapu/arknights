<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, shallowRef, CSSProperties } from 'vue'
import { random } from 'lodash-es'

/**
 * 粒子
 */
interface Dust {
  x: number
  y: number
  opacity: number
  radius: number
  color: string
  vectorX: number
  vectorY: number
  vectorOpacity: number
}
// 常量
const MAX_DUST_NUM = 200
const CANVAS_WIDTH = 1920
const CANVAS_HEIGHT = 1080
const backgroundELe = ref<HTMLElement>()
const canvasEle = ref<HTMLCanvasElement>()
const canvasStyle = shallowRef<CSSProperties>()
const dustList: Dust[] = []
let canvasCtx: CanvasRenderingContext2D | null = null
let animationReq: number | null = null

/**
 * 更新画布大小
 */
function resize() {
  if (backgroundELe.value) {
    const { offsetHeight, offsetWidth } = backgroundELe.value
    if (offsetWidth / offsetHeight > 16 / 9) {
      canvasStyle.value = {
        width: '100%',
        top: '50%',
        transform: 'translateY(-50%)',
      }
    } else {
      canvasStyle.value = {
        height: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
      }
    }
  }
}

/**
 * 一个动画帧
 */
function step(timestamp: number) {
  if (!canvasCtx) return
  // 清空画布
  canvasCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  // 添加一个新的粒子
  if (dustList.length < MAX_DUST_NUM) {
    const dust = randomDust()
    dustList.push(dust)
  }
  for (let i = 0; i < dustList.length; i++) {
    const dust = dustList[i]

    // 重新计算所有粒子的状态
    dust.x += dust.vectorX
    dust.y += dust.vectorY
    if (dust.opacity < 1) {
      dust.opacity += dust.vectorOpacity
      if (dust.opacity > 1) {
        dust.opacity = 1
      }
    }
    if (dust.x < -dust.radius) {
      dust.x = CANVAS_WIDTH + dust.radius
    }
    if (dust.y < -dust.radius) {
      dust.y = CANVAS_HEIGHT + dust.radius
    }
    if (dust.y > CANVAS_HEIGHT + dust.radius) {
      dust.y = -dust.radius
    }
    // 绘制粒子
    canvasCtx.beginPath()
    canvasCtx.arc(dust.x, dust.y, dust.radius, 0, 2 * Math.PI)
    canvasCtx.fillStyle = dust.color
    canvasCtx.globalAlpha = dust.opacity
    canvasCtx.fill()
  }
  animationReq = requestAnimationFrame(step)
}

/**
 * 随机生成一个粒子
 */
function randomDust(): Dust {
  return {
    x: random(0, CANVAS_WIDTH),
    y: random(0, CANVAS_HEIGHT),
    radius: random(1, 2.5),
    opacity: 0,
    color: '#888',
    vectorX: random(-0.05, -0.8),
    vectorY: random(-0.4, 0.4),
    vectorOpacity: random(0.01, 0.02),
  }
}

onMounted(() => {
  resize()
  addEventListener('resize', resize)
  if (canvasEle.value) {
    canvasCtx = canvasEle.value.getContext('2d')
    animationReq = requestAnimationFrame(step)
  }
})

onBeforeUnmount(() => {
  removeEventListener('resize', resize)
  if (animationReq) {
    cancelAnimationFrame(animationReq)
  }
})
</script>

<template>
  <div class="backrgound" ref="backgroundELe">
    <canvas
      class="absolute block"
      ref="canvasEle"
      :width="CANVAS_WIDTH"
      :height="CANVAS_HEIGHT"
      :style="canvasStyle"
    ></canvas>
    <div class="mask"></div>
  </div>
</template>

<style lang="scss" scoped>
.backrgound {
  position: absolute;
  width: 110%;
  height: 110%;
  left: -5%;
  top: -5%;
  background-image: url('https://s2.loli.net/2024/03/10/oNEztc1JnGpvWOZ.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.mask {
  width: 100%;
  height: 100%;
  background: radial-gradient(farthest-corner at 65% 50%, transparent 65%, rgba(0, 0, 0, 0.75));
}
</style>
