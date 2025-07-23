import type { RouteRecordRaw } from 'vue-router'

import { homeRoute } from '@/pages/home'
import { loginRoute } from '@/pages/login'
import { notfoundRoute } from '@/pages/notfound'

export const routes: RouteRecordRaw[] = [
  loginRoute,
  homeRoute,
  /**
   * This route must be the last one to catch all the routes that are not defined
   *
   * /404
   */
  notfoundRoute,
]
