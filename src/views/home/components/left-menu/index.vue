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
    <div class="banner-container">
      <NewsBanner />
      <div class="button friend-button">
        <IconFriend class="icon" fill="white" width="50px" />
        <span class="text">好友</span>
      </div>
      <div class="button archive-button">
        <IconArchive class="icon" fill="rgba(0,0,0,0.38)" width="50px" />
        <span class="text">档案</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left-menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 600px;
  height: 100%;
  transform-origin: left center;
  transform: perspective(600px) rotateY(13deg);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  pointer-events: none;
}

.banner-container {
  display: grid;
  gap: 4px 10px;
  margin: 10px;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 1fr 1fr;
}

.news-banner {
  grid-row: 1 / 3;
}

.button {
  position: relative;
  flex-grow: 1;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 5px;
  pointer-events: auto;

  .text {
    font-family: 'FZSong';
    font-size: 35px;
  }
}

.friend-button {
  color: #ffffff;
  background-color: rgba(50, 50, 50, 0.9);
  box-shadow: 0 0 10px 0 #222222;
}
.archive-button {
  color: #323232;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 10px 0 #aaaaaa;
}
</style>
