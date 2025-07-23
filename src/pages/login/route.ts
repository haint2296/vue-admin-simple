import type { RouteRecordRaw } from 'vue-router'

import { loginPath } from '@/shared/router'
import LoginPage from './index.vue'

export const loginRoute: RouteRecordRaw = {
  ...loginPath.base,
  component: LoginPage,
}
