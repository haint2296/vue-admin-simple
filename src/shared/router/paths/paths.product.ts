import type { PathType } from './paths.types'

const productPath: PathType = {
  base: {
    path: '/products',
    name: 'product-page-route',
    meta: {
      title: 'Products',
      requiresAuth: true,
    },
  },
} as const

export { productPath }
