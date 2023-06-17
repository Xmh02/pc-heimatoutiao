import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入elemment ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
//引入全局样式表
import '@/styles/index.less'
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
