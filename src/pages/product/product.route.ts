import type { RouteRecordRaw } from 'vue-router'

import { productPath } from '@/shared/router/paths'
import ProductPage from './product.ui.vue'

export const productRoute: RouteRecordRaw = {
  ...productPath.base,
  component: ProductPage,
}
