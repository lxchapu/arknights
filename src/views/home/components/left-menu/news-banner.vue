<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const activityList = [
  {
    name: '多利的任务单',
    bannerImg: '/images/activity/多利的任务单.jpg',
  },
  {
    name: '火山旅梦',
    bannerImg: '/images/activity/火山旅梦.jpg',
  },
  {
    name: '绿野幻梦',
    bannerImg: '/images/activity/绿野幻梦.jpg',
  },
  {
    name: '夏日嘉年华',
    bannerImg: '/images/activity/夏日嘉年华.jpg',
  },
  {
    name: '氤氲奇境',
    bannerImg: '/images/activity/氤氲奇境.jpg',
  },
  {
    name: '引领者试炼',
    bannerImg: '/images/activity/引领者试炼.jpg',
  },
  {
    name: '云间清醒梦',
    bannerImg: '/images/activity/云间清醒梦.jpg',
  },
]
</script>

<template>
  <div class="news-banner">
    <img class="label" src="@/assets/images/news-label.png" alt="news label" />
    <Swiper
      loop
      :space-between="30"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :pagination="{
        clickable: true,
      }"
      :speed="800"
      :modules="[Autoplay, Pagination]"
    >
      <SwiperSlide v-for="item in activityList" :key="item.name">
        <img class="banner-image" :src="item.bannerImg" :alt="item.name" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
.news-banner {
  position: relative;
  width: 290px;
  pointer-events: auto;
}

.label {
  position: absolute;
  z-index: 10;
  top: -4px;
  left: -5px;
  width: 40%;
}

.banner-image {
  display: block;
  width: 100%;
  height: 110px;
  object-fit: cover;
}

.swiper {
  :deep(.swiper-pagination) {
    display: flex;
    margin-top: 5px;
    position: static;
  }

  :deep(.swiper-pagination-bullet) {
    margin: 0;
    height: 5px;
    flex-grow: 1;
    border-radius: 0;
    opacity: 1;
    background-color: #ffffff;

    &:not(:last-child) {
      margin-right: 6px;
    }
  }

  :deep(.swiper-pagination-bullet-active) {
    background-color: #ff9919;
  }
}
</style>
