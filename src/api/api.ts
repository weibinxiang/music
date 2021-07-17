import axios from './request';

// 首页热门榜单
export function getIndexToplist() {
  return axios.get('/fcg_myqq_toplist.fcg?g_tk=1928093487&notice=0&format=json&uin=0&needNewCode=1&platform=h5');
}

// 音乐厅歌手列表
export function getsingerlist() {
  return axios.get('/v8.fcg?g_tk=5381&notice=0&format=json&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq');
}

// 获取歌手音乐列表
export function getsingerSonglist() {
  return axios.get('/fcg_v8_singer_track_cp.fcg?g_tk=5381&notice=0&hostUin=0&needNewCode=0&platform=yqq&order=listen&begin=0&num=40&songstatus=1&singermid=002J4UUk29y8BY');
}

// 获取播放音乐路径
export function getPlayUrl(id:string) {
  return axios.get(
    `/musicu.fcg?format=json&data=%7B%22req_0%22%3A%7B%22module%22%3A%22vkey.GetVkeyServer%22%2C%22method%22%3A%22CgiGetVkey%22%2C%22param%22%3A%7B%22guid%22%3A%22358840384%22%2C%22songmid%22%3A%5B%22${id}%22%5D%2C%22songtype%22%3A%5B0%5D%2C%22uin%22%3A%221443481947%22%2C%22loginflag%22%3A1%2C%22platform%22%3A%2220%22%7D%7D%2C%22comm%22%3A%7B%22uin%22%3A%2218585073516%22%2C%22format%22%3A%22json%22%2C%22ct%22%3A24%2C%22cv%22%3A0%7D%7D`,
    {
      baseURL: '/audio'
    }
  );
}