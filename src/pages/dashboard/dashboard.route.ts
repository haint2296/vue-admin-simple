import type { RouteRecordRaw } from 'vue-router'

import { dashboardPath } from '@/shared/router/paths'
import DashboardPage from './dashboard.ui.vue'

export const dashboardRoute: RouteRecordRaw = {
  ...dashboardPath.base,
  component: DashboardPage,
}
