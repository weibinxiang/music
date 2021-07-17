<template>
  <div class="player">
    <div class="player-bg" :style="{backgroundImage: `url(${song.image})`}"></div>
    <div class="player-box flex">
      <div class="top">
        <div class="songName">{{song.name}}</div>
        <div class="singer">{{song.singer}}</div>
      </div>

      <div class="middle">
        <div :class="['albumImage', {'albumImage-paused': !playing}]">
          <img :src="song.image" alt="" v-if="song.image">
        </div>
      </div>

      <div class="bottom">
        <div class="porcess-box flex-center-y">
          <div class="time start-time">00:00</div>
          <div class="porcess">
            <div class="line">
              <div class="circular"></div>
            </div>
          </div>
          <div class="time end-time">00:00</div>
        </div>
        <div class="operators flex-between">
          <div class="pattern">
            <van-icon name="smile-o" class="icon" v-if="true" />
            <van-icon name="music-o" class="icon" v-else-if="false" />
            <van-icon name="info-o" class="icon" v-else />
          </div>
          <div class="last">
            <van-icon name="arrow-left" class="icon" />
          </div>
          <div class="play flex-center" @click="togglePlaying">
            <van-icon name="pause" class="icon" v-if="playing" />
            <van-icon name="play" class="icon" v-else />
          </div>
          <div class="next">
            <van-icon name="arrow" class="icon" />
          </div>
          <van-icon name="wap-nav" class="icon"  />
        </div>
      </div>
    </div>
    
    <audio :src="song.playUrl" class="audio" ref="audio" id="audio"></audio>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive, toRefs } from 'vue'
import { getsingerSonglist } from '@/api/api'
import { Icon } from 'vant'
import getSong from '@/hooks/getSong'

interface playerData {
  playing: boolean,
  songList: any[],
  song: any
}

export default defineComponent({
  components: {
    [Icon.name]: Icon
  },
  setup() {
    const audio = ref<HTMLAudioElement | null>(null),
      data = reactive<playerData>({
        playing: false,
        songList: [],
        song: {}
      })
    
    const getlist = () => {
      getsingerSonglist().then((res: any) => {
        data.songList = res.data.list
        data.song = getSong(data.songList[0].musicData)
      })
    }
    
    const togglePlaying = () => {
      data.playing = !data.playing
      if (data.playing) {
        audio.value?.play()
      } else {
        audio.value?.pause()
      }
    }

    onMounted(() => {
      getlist()
    }) 

    return {
      audio,
      ...toRefs(data),
      togglePlaying
    }
  }
})
</script>

<style lang="scss" scoped>
.player {
  height: calc(100vh - 100px);
  .player-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: blur(120px);
  }
  .player-box {
    flex-direction: column;
    position: relative;
    padding-top: 50px;
    height: 100%;
    box-sizing: border-box;
    .top {
      color: #fff;
      font-size: 36px;
      text-align: center;
      .songName {
        margin-bottom: 10px
      }
      .singer {
        font-size: 30px;
      }
    }
    .middle {
      flex: 1;
      width: 100%;
      .albumImage {
        width: 500px;
        height: 500px;
        margin: 50px auto;
        border-radius: 50%;
        border: 10px solid rgba(255, 255, 255, .3);
        animation: albumImage-ani 36s linear infinite forwards;
        &.albumImage-paused {
          animation-play-state: paused;
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
    }
    .bottom {
      color: #fff;
      padding: 0 40px;
      .porcess-box {
        font-size: 28px;
        .time {
          opacity: .9;
        }
        .porcess {
          flex: 1;
          height: 4px;
          border-radius: 30px;
          background: rgba(255, 255, 255, .6);
          margin: 0 14px;
          .line {
            position: relative;
            width: 50%;
            height: 100%;
            background: rgba(255, 255, 255, .9);
            border-radius: 30px;
            .circular {
              position: absolute;
              top: 50%;
              right: -16px;
              width: 16px;
              height: 16px;
              border-radius: 50%;
              background: #fff;
              transform: translate(-50%, -50%);
            }
          }
        }
      }
      .operators {
        padding: 20px 20px 30px;
        .icon {
          font-size: 50px;
        }
        .play {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 2px solid #fff;
          box-sizing: border-box;
          .icon {
            font-size: 66px;
            opacity: .9;
          }
        }
      }
    }
  }
  .audio {
    display: none;
  }
}
@keyframes albumImage-ani {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>