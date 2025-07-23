import type { PathType } from './pahts.types'

const notfoundPath: PathType = {
  base: {
    path: '/:pathMatch(.*)*',
    name: 'notfound-page-route',
    meta: {
      title: 'Not Found',
      requiresAuth: false,
    },
  },
} as const

export { notfoundPath }
