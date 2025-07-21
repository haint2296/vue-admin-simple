import Home from '@/pages/home/index.vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home, name: 'Home' },
  // new route
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
