import type { PathType } from './paths.types'

const dashboardPath: PathType = {
  base: {
    path: '/',
    name: 'home-page-route',
    meta: {
      title: 'Dashboard',
      requiresAuth: true,
      keepAlive: true,
    },
  },
} as const

export { dashboardPath }
