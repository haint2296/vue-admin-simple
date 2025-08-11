import type { RouteRecordRaw } from 'vue-router'

import { taskPath } from '@/shared/router/paths'
import TaskMainPage from './task-main.ui.vue'

export const taskMainRoute: RouteRecordRaw = {
  ...taskPath.base,
  component: TaskMainPage,
}
