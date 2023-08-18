<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
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
      <SwiperSlide>
        <img class="banner-image" src="@/assets/images/active1.jpg" alt="active1" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="banner-image" src="@/assets/images/active2.jpg" alt="active2" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="banner-image" src="@/assets/images/active3.jpg" alt="active3" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="banner-image" src="@/assets/images/active4.jpg" alt="active4" />
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
