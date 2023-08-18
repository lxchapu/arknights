<script lang="ts" setup></script>

<template>
  <div class="team-row">
    <div class="item">
      <div class="title">编队</div>
      <img class="icon" src="@/assets/images/image2.png" alt="icon" />
      <img class="right-bottom" src="@/assets/images/image10.png" alt="right bottom" />
    </div>
    <div class="item">
      <div class="title">干员</div>
      <div class="sub">角色管理</div>
      <img class="icon" src="@/assets/images/image3.png" alt="icon" />
      <img class="right-bottom" src="@/assets/images/image10.png" alt="right bottom" />
    </div>
    <div class="black"></div>
  </div>
</template>

<style lang="scss" scoped>
.team-row {
  position: relative;
  margin-bottom: 16px;
  width: 740px;
  display: flex;
  transform: translateX(-40px);
  pointer-events: auto;
}

.item {
  position: relative;
  padding: 16px;
  flex: 1;
  height: 140px;
  background-color: rgba(255, 255, 255, 0.9);
  margin-right: 20px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: white;
  }

  .title {
    font-family: 'FZSong';
    font-size: 60px;
    color: #333;
  }

  .sub {
    font-size: 24px;
    color: #9a9a9a;
  }
}

.icon {
  position: absolute;
  right: 16px;
  top: 16px;
  width: 108px;
  height: 108px;
  filter: invert(15%);
}

.right-bottom {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 128px;
  filter: invert(50%);
  opacity: 0.3;
}

.black {
  position: absolute;
  top: 0;
  left: 100%;
  width: 150px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
