import Home from '@/pages/home/index.vue'
import LoginPage from '@/pages/login/index.vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/login', component: LoginPage, name: 'LoginPage' },
  // new route
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
