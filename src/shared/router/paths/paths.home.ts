import type { PathType } from './pahts.types'

const homePath: PathType = {
  base: {
    path: '/',
    name: 'home-page-route',
    meta: {
      title: 'Dashboard',
      requiresAuth: true,
    },
  },
} as const

export { homePath }
