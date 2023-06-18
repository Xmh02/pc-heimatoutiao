import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: () => import('@/login.vue') },
  {
    path: '/main',
    redirect: '/main/home',
    component: () => import('@/views/layout/index.vue'),
    children: [
      { path: 'home', component: () => import('@/views/home/index.vue') },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
