<template>
  <div class="mine">
    <div class="user flex-center-y">
      <img src="https://ttmini.yizhiwechat.com/yzInterstTest/fission/default-avatar.png" alt="">
      <div class="name">匿名用户</div>
    </div>

    <van-cell-group class="cellGroup">
      <van-cell title="我喜欢" is-link size="large">
        <template #icon>
          <van-icon name="like-o" class="icon"/>
        </template>
      </van-cell>
      <van-cell title="最近播放" is-link size="large">
        <template #icon>
          <van-icon name="clock-o" class="icon"/>
        </template>
      </van-cell>
      <van-cell title="仅WiFi联网" is-link size="large">
        <template #icon>
          <van-icon name="bar-chart-o" class="icon"/>
        </template>
      </van-cell>
      <van-cell title="定时关闭" is-link size="large">
        <template #icon>
          <van-icon name="underway-o" class="icon"/>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Cell, CellGroup, Icon } from 'vant';

export default defineComponent({
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon
  },
})
</script>

<style lang="scss" scoped>
.mine {
  .user {
    background: #fff;
    font-size: 32px;
    padding: 20px 30px;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 4px solid #eee;
    }
    .name {
      padding: 0 30px;
      flex: 1;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .cellGroup {
    margin-top: 30px;
    color: #333;
    .icon {
      font-size: 36px;
      line-height: inherit;
      margin-right: 10px;
    }
  }
}
</style>