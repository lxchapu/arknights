<script lang="ts" setup>
import VoiceBox from './voice-box.vue'
import NewsBanner from './news-banner.vue'
import IconFriend from '@/components/icons/Friend.vue'
import IconArchive from '@/components/icons/Archive.vue'

defineProps<{
  voice: string
}>()
defineEmits<{
  (e: 'clear-voice'): void
}>()
</script>

<template>
  <div class="left-menu">
    <VoiceBox v-show="voice" :text="voice" @click="$emit('clear-voice')" />
    <div class="flex">
      <NewsBanner />
      <div>
        <div class="button friend-button">
          <IconFriend class="icon" />
          <span class="text">好友</span>
        </div>
        <div class="button archive-button">
          <IconArchive class="icon" />
          <span class="text">档案</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left-menu {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  transform-origin: left center;
  transform: perspective(600px) rotateY(10deg);
}

.news-banner {
  margin-right: 10px;
  pointer-events: auto;
}

.button {
  width: 150px;
  padding: 6px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  pointer-events: auto;
  cursor: pointer;
  transition: background-color 0.2s;

  .text {
    font-family: 'FZSong';
    font-size: 32px;
  }

  .icon {
    font-size: 46px;
  }
}

.friend-button {
  color: white;
  background-color: rgba(50, 50, 50, 0.9);
  box-shadow: 0 0 10px 0 #222222;
  margin-bottom: 4px;

  &:hover {
    background-color: rgb(50, 50, 50);
  }
}
.archive-button {
  color: #323232;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 10px 0 #aaaaaa;

  &:hover {
    background-color: white;
  }

  .icon {
    color: rgba(0, 0, 0, 0.38);
  }
}
</style>
