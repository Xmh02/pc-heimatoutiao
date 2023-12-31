import axios from 'axios'
import store from '@/store'
const request = axios.create({
  baseURL: 'http://api-toutiao-web.itheima.net',
  timeout: 20000,
})
//配置请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    const token = store.state.token
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
export default request
