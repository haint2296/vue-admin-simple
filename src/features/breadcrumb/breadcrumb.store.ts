import { ref } from 'vue'

import type { Breadcrumbs } from '@/shared/types'
import { Home } from 'lucide-vue-next'
import { defineStore } from 'pinia'
import type { RouteLocationNormalized } from 'vue-router'

export const useBreadcrumbStore = defineStore('breadcrumb-store', () => {
  const breadcrumbs = ref<Breadcrumbs[]>([])

  const setBreadcrumbFromRoute = (route: RouteLocationNormalized) => {
    breadcrumbs.value = [
      {
        label: 'Dashboard',
        to: '/dashboard',
        iconComps: Home,
      },
      ...createBreadcrumb(route),
    ]
  }

  const createBreadcrumb = (route: RouteLocationNormalized): Breadcrumbs[] => {
    const breadcrumbItems: Breadcrumbs[] = []

    if (route.name === 'dashboard' || !route.meta.breadcrumb) {
      return []
    }

    const breadcrumb = route.meta.breadcrumb as Breadcrumbs

    breadcrumbItems.push({
      label: breadcrumb.label,
      to: breadcrumb.to,
      iconComps: breadcrumb.iconComps,
    })

    return breadcrumbItems
  }

  return {
    breadcrumbs,
    setBreadcrumbFromRoute,
  }
})
