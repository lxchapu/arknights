<script lang="ts" setup>
import { useUserStore } from '@/store'

const userStore = useUserStore()
</script>

<template>
  <div class="fight-row">
    <div class="sense">
      <img class="bg" src="@/assets/images/mind.png" alt="mind" />
      <div class="current">{{ userStore.asset.sense }}</div>
      <div class="max">理智/90</div>
    </div>
    <div class="fight">
      <div class="title">终端</div>
      <span class="tag">当前</span>
      <div class="level">{{ userStore.fightInfo.name }}</div>
    </div>
    <div class="mark">
      <img class="icon" src="@/assets/images/image1.png" alt="icon" />
      <img class="right-bottom" src="@/assets/images/image10.png" alt="right bottom" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fight-row {
  margin-bottom: 16px;
  position: relative;
  padding: 12px;
  width: 780px;
  height: 200px;
  color: #333;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  pointer-events: auto;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: white;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    bottom: -2px;
    left: 300px;
    height: 5px;
    width: 380px;
    background-color: #f85711;
  }
}

.sense {
  position: relative;
  width: 240px;
  margin-right: 20px;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .current {
    position: relative;
    font-size: 80px;
    line-height: 108px;
    padding-left: 48px;
    text-align: center;
    font-weight: bold;
    text-shadow: 5px 4px 2px #888;
    margin-bottom: 8px;
  }

  .max {
    position: relative;
    font-size: 32px;
    padding-left: 24px;
    text-align: center;
    color: white;
  }
}

.fight {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .title {
    font-size: 75px;
    font-family: 'FZSong';
    margin-bottom: 4px;
  }

  .tag {
    padding: 4px 6px;
    font-size: 24px;
    background-color: #333;
    color: white;
    border-radius: 4px;
    margin-bottom: 4px;
  }

  .level {
    font-size: 24px;
  }
}

.mark {
  position: absolute;
  inset: 0;
  .icon {
    position: absolute;
    left: 380px;
    top: 15px;
    width: 170px;
    height: 170px;
    filter: invert(20%) drop-shadow(30px 0 0 rgba(0, 0, 0, 0.1));
  }

  .right-bottom {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 128px;
    filter: invert(50%);
    opacity: 0.3;
  }
}
</style>
