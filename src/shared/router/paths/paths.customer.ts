import type { PathType } from './paths.types'

const customersPath: PathType = {
  base: {
    path: '/customers',
    name: 'customers-page-route',
    meta: {
      title: 'Customers',
      requiresAuth: true,
      keepAlive: true,
    },
  },
} as const

export { customersPath }
