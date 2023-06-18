import Vue from 'vue'
import Vuex from 'vuex'
import { getStorage, setStorage } from '@/api/storage/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 刷新页面时 从本地存储获取token值
    token: getStorage('PCtoutiaotoken') || '',
  },
  getters: {},
  mutations: {
    //存储或更新用户token
    updateToken(state, val) {
      // 先更新vuex里的token值
      state.token = val
      // 再更新本地存储的值 使每次刷新页面时 都能拿到最新的值
      setStorage('PCtoutiaotoken', val)
    },
  },
  actions: {},
  modules: {},
})
