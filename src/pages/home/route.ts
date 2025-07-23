import type { RouteRecordRaw } from 'vue-router'

import { homePath } from '@/shared/router/paths'
import HomePage from './index.vue'

export const homeRoute: RouteRecordRaw = {
  ...homePath.base,
  component: HomePage,
}
