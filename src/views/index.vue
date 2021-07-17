<template>
  <div>
    <router-view class="view"></router-view>

    <div class="tabbar flex-center-y">
      <div :class="['item', {active: routeName == 'home'}]" @click="$router.push('/')">
        <van-icon class="icon" name="wap-home-o" v-if="routeName != 'home'" />
        <van-icon class="icon" name="wap-home" v-else />
        <p>推荐</p>
      </div>
      <div :class="['item', {active: routeName == 'player'}]" @click="$router.push('/player')">
        <van-icon class="icon" name="volume-o" v-if="routeName != 'player'" />
        <van-icon class="icon" name="volume" v-else />
        <p>正在播放</p>
      </div>
      <div :class="['item', {active: routeName == 'singer'}]" @click="$router.push('/singer')">
        <van-icon class="icon" name="award-o" v-if="routeName != 'singer'" />
        <van-icon class="icon" name="award" v-else />
        <p>音乐厅</p>
      </div>
      <div :class="['item', {active: routeName == 'mine'}]" @click="$router.push('/mine')">
        <van-icon class="icon" name="manager-o" v-if="routeName != 'mine'" />
        <van-icon class="icon" name="manager" v-else />
        <p>我的</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Icon } from 'vant';
import { useRoute, RouteRecordName } from 'vue-router'
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
  components: {
    [Icon.name]: Icon
  },
  setup() {
    const route = useRoute()
    const routeName = ref<RouteRecordName | null | undefined>('')
    routeName.value = route.name
    watch(() => route.name, () => {
      routeName.value = route.name
    })
    return {
      routeName
    }
  }
})
</script>

<style lang="scss" scoped>
.view {
  padding-bottom: 100px;
}
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 900;
  width: 100%;
  height: 100px;
  padding: 0 20px;
  background: #fff;
  border-top: 1px solid #eee;
  font-size: 24px;
  box-sizing: border-box;
  color: #6b6b6b;
  .item {
    flex: 1;
    text-align: center;
    line-height: 1;
    &.active {
      color: #323233
    }
    .icon {
      font-size: 48px;
      margin-bottom: 8px
    }
  }
}
</style>