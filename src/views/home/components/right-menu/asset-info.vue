<script lang="ts" setup>
import { useUserStore } from '@/store'
import IconAdd from '@/components/icons/Add.vue'

const userStore = useUserStore()
</script>

<template>
  <div class="asset-info">
    <div class="item">
      <img class="icon" src="@/assets/images/money.png" alt="money" />
      <span class="number">{{ userStore.asset.money }}</span>
    </div>
    <div class="item">
      <img class="icon" src="@/assets/images/gem.png" alt="gem" />
      <span class="number">{{ userStore.asset.gem }}</span>
      <IconAdd class="button" />
    </div>
    <div class="item">
      <img class="icon" src="@/assets/images/stone.png" alt="stone" />
      <span class="number">{{ userStore.asset.stone }}</span>
      <IconAdd class="button" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.asset-info {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  pointer-events: auto;
}
.asset-info::before {
  content: '';
  position: absolute;
  top: 7px;
  left: -80px;
  right: 0;
  bottom: 7px;
  background-color: rgba(0, 0, 0, 0.2);
}

.item {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 30px;
  color: white;
  text-shadow: 4px 3px 2px #333;
  margin-right: 20px;

  .icon {
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-right: 16px;
    filter: drop-shadow(4px 3px 2px #333);
  }

  .number {
    margin-right: 4px;
  }

  .button {
    filter: drop-shadow(4px 3px 2px #333);
  }
}
</style>
