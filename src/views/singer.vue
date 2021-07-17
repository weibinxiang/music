<template>
  <div class="singer">
    <van-index-bar :index-list="indexList" :sticky="false">
      <div v-for="name in indexList" :key="name">
         <van-index-anchor :index="name"></van-index-anchor>
         <div class="cell flex-center-y" v-for="(item, index) in singerList[name]" :key="index">
           <img :src="`https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`" />
           <div class="name">{{item.Fsinger_name}}</div>
         </div>
      </div>
    </van-index-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { IndexBar, IndexAnchor } from 'vant'
import { getsingerlist } from '@/api/api'

export default defineComponent({
  components: {
    [IndexBar.name]: IndexBar,
    [IndexAnchor.name]: IndexAnchor
  },
  setup() {
    const firstIndex = '热门', lastIndex = '#'
    const singerList = ref<any>({})
    const indexList = ref<string[]>([firstIndex])
    onMounted(() => {
      getsingerlist().then((res: any) => {
        res.data.list.forEach((item: any, index: number) => {
          let i = item.Findex
          if (index < 10) {
            if (!singerList.value[firstIndex]) singerList.value[firstIndex] = []
            singerList.value[firstIndex].push(item)
          }
          if (!item.Findex.match(/[a-zA-Z]/)) i = lastIndex
          if (!singerList.value[i]) {
            singerList.value[i] = []
            indexList.value.push(i)
          }
          singerList.value[i].push(item)
        })
        indexList.value.sort((a, b) => {
          if (a == firstIndex || b == lastIndex) return -999
          if (a == lastIndex || b == firstIndex) return 999
          return a.charCodeAt(0) - b.charCodeAt(0)
        })
      })
    })
    return {
      indexList,
      singerList
    }
  }
})
</script>

<style lang="scss" scoped>
.singer {
  .cell {
    background: #fff;
    padding: 14px 30px;
    font-size: 30px;
    border-bottom: 1px solid #f5f5f5;
    &:active {
      background: #f2f3f5;
    }
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .name {
      padding: 0 30px;
      flex: 1;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>