import axios from 'axios'
const request = axios.create({
  baseURL: 'http://api-toutiao-web.itheima.net',
  timeout: 20000,
})

export default request
