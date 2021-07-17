import { ref, reactive } from 'vue'
import { getPlayUrl } from '@/api/api'

export default function getSong(musicData: any) {
  const song = reactive({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    musicId: musicData.songid,
    playUrl: ''
  })
  
  getPlayUrl(musicData.songmid).then((res: any) => {
    song.playUrl = res.req_0.data.sip[0] + res.req_0.data.midurlinfo[0].purl
  })

  return {
    ...song
  }
}

const filterSinger = (singer: any[]) => {
  const ret = ref<string[]>([])
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.value.push(s.name)
  })
  return ret.value.join('/')
}