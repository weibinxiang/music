<template>
  <div class="home">
    <van-search v-model="inputValue" placeholder="请输入搜索关键词" />
    <van-swipe class="swipe" :autoplay="5000" :show-indicators="false">
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <h3 class="h3">热门榜单推荐</h3>
    <div class="hot-list">
      <div class="cell flex-center-y" v-for="(cell, key) in hotList" :key="key">
        <div class="picUrl">
          <img :src="cell.picUrl" alt="">
        </div>
        <div class="songList">
          <div class="item" v-for="(item, index) in cell.songList" :key="index">
            {{index+1}}.{{item.songname}}-{{item.singername}}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Search, Swipe, SwipeItem } from 'vant'
import { getIndexToplist } from '@/api/api'

export default defineComponent({
  components: {
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  setup() {
    const images:string[] = [
      'http://p1.music.126.net/PEKc8WotIbjv7KAIrkHKxg==/109951166165987479.jpg?imageView&quality=89',
      'http://p1.music.126.net/ALzbG6YHhWUYZaNJ8N6n7g==/109951166169156082.jpg?imageView&quality=89',
      'http://p1.music.126.net/j8-FcNjT7z_ujoHi-gZb5w==/109951166169685296.jpg?imageView&quality=89'
    ],
    hotList = ref([]),
    inputValue = ref('')

    onMounted(() => {
      getIndexToplist().then((res: any) => {
        hotList.value = res.data.topList
      })
    })

    return { 
      images,
      hotList,
      inputValue
    }
  }
})
</script>

<style lang="scss" scoped>
.swipe {
  width: 690px;
  margin: 30px auto;
  img {
    width: 100%;
    border-radius: 16px;
  }
}
.h3 {
  color: #333;
  text-align: center;
  font-size: .5rem;
  padding-bottom: .08rem;
}
.hot-list {
  padding: 0 30px;
  .cell {
    background: #2c3e50;
    margin: 20px 0;
    color: #fff;
    border-radius: 16px;
    overflow: hidden;
    .picUrl {
      width: 200px;
      height: 200px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .songList {
      flex: 1;
      overflow: hidden;
      padding: 0 20px;
      font-size: 24px;
      .item {
        margin: 20px 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>