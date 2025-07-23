import type { PathType } from './pahts.types'

const homePath: PathType = {
  base: {
    path: '/',
    name: 'home-page-route',
    meta: {
      title: 'Home',
      requiresAuth: true,
    },
  },
} as const

export { homePath }
