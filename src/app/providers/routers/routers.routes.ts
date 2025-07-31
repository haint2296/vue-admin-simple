import type { RouteRecordRaw } from 'vue-router'

import { homeRoute } from '@/pages/home'
import { loginRoute } from '@/pages/login'
import { notfoundRoute } from '@/pages/notfound'
import { productRoute } from '@/pages/product'
import { BaseLayout } from '@/widgets/layout'

export const routes: RouteRecordRaw[] = [
  loginRoute,
  {
    path: '/',
    component: BaseLayout,
    children: [homeRoute, productRoute],
  },

  /**
   * This route must be the last one to catch all the routes that are not defined
   *
   * /404
   */
  notfoundRoute,
]
