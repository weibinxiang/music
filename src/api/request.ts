import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Toast } from 'vant'

// axios.defaults.baseURL = 'https://c.y.qq.com/v8/fcg-bin';
axios.defaults.baseURL = '/api';
axios.interceptors.request.use((config: AxiosRequestConfig) => {
    return config
});
axios.interceptors.response.use((response: AxiosResponse) => {
    if(response.data.status === 20001){ // 全局异常处理
      Toast('网络异常，请稍后再试')
    }
    return response.data
},err => {
    Toast('网络异常，请稍后再试')
    return Promise.reject(err);
});

export default axios;