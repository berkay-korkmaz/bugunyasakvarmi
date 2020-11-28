import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
  { path: '/yasak', name: 'Yasak', component: () => import('@/views/Forbidden.vue') },
  { path: '/serbest', name: 'Serbest', component: () => import('@/views/Free.vue') }
]

const router = new VueRouter({
  routes
})

export default router
