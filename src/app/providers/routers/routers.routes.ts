import type { RouteRecordRaw } from 'vue-router'

import { dashboardRoute } from '@/pages/dashboard'
import { loginRoute } from '@/pages/login'
import { notfoundRoute } from '@/pages/notfound'
import { productRoute } from '@/pages/product'
import { taskMainRoute } from '@/pages/tasks/main'
import { BaseLayout } from '@/widgets/layout'

export const routes: RouteRecordRaw[] = [
  loginRoute,
  {
    path: '/',
    component: BaseLayout,
    children: [dashboardRoute, productRoute, taskMainRoute],
  },

  /**
   * This route must be the last one to catch all the routes that are not defined
   *
   * /404
   */
  notfoundRoute,
]
