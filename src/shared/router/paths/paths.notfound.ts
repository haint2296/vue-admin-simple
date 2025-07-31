import type { PathType } from './paths.types'

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
