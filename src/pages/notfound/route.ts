import type { RouteRecordRaw } from 'vue-router'

import { notfoundPath } from '@/shared/router'
import NotFoundPage from './index.vue'

export const notfoundRoute: RouteRecordRaw = {
  ...notfoundPath.base,
  component: NotFoundPage,
}
