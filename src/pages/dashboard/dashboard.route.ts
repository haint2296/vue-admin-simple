import type { RouteRecordRaw } from 'vue-router'

import { homePath } from '@/shared/router/paths'
import HomePage from './dashboard.ui.vue'

export const dashboardRoute: RouteRecordRaw = {
  ...homePath.base,
  component: HomePage,
}
