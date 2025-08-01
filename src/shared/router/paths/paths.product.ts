import { ShoppingCart } from 'lucide-vue-next'
import type { PathType } from './paths.types'

const productPath: PathType = {
  base: {
    path: '/products',
    name: 'product-page-route',
    meta: {
      title: 'Products',
      requiresAuth: true,
      breadcrumb: {
        label: 'Products',
        to: '/products',
        iconComps: ShoppingCart,
      },
    },
  },
} as const

export { productPath }
