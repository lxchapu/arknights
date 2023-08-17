<script lang="ts" setup></script>

<template>
  <div class="other-row">
    <div class="task">
      <div class="title">任务</div>
      <img class="icon" src="@/assets/images/image8.png" alt="icon" />
      <img class="right-bottom" src="@/assets/images/image10.png" alt="right bottom" />
    </div>
    <div class="hostel">
      <div class="title">基建</div>
      <div class="sub">BETA</div>
      <img class="icon" src="@/assets/images/image7.png" alt="icon" />
      <img class="right-bottom" src="@/assets/images/image10.png" alt="right bottom" />
    </div>
    <div class="depository">
      <div class="title">仓库</div>
      <img class="icon" src="@/assets/images/image9.png" alt="icon" />
      <img class="right-bottom" src="@/assets/images/image10.png" alt="right bottom" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.other-row {
  display: flex;
}

.task,
.hostel {
  position: relative;
  padding: 16px;
  width: 280px;
  height: 140px;
  background-color: rgba(255, 255, 255, 0.9);

  &:hover {
    background-color: white;
  }

  .title {
    font-family: 'FZSong';
    font-size: 60px;
    color: #333;
    line-height: 1;
  }

  .sub {
    font-family: 'NovecentoSansWide';
    color: #f85711;
    font-weight: bold;
  }

  .icon {
    position: absolute;
    right: 16px;
    top: 16px;
    width: 108px;
    height: 108px;
    filter: invert(15%);
  }
}

.right-bottom {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 128px;
  filter: invert(50%);
  opacity: 0.3;
}

.task {
  margin-right: 20px;

  &::before {
    position: absolute;
    z-index: 2;
    content: '';
    top: -2px;
    left: 20%;
    width: 60%;
    height: 5px;
    background-color: #f85711;
  }
}

.depository {
  position: relative;
  width: 120px;
  height: 140px;
  background-color: #323232;

  &:hover {
    background-color: #4b4b4b;
  }

  .title {
    padding-top: 20px;
    color: white;
    font-size: 40px;
    font-family: 'FZSong';
    text-align: center;
  }

  .icon {
    position: absolute;
    bottom: 16px;
    left: 24px;
    width: 72px;
    opacity: 0.2;
  }
}
</style>
