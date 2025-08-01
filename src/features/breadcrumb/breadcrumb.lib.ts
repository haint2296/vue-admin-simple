import type { Breadcrumbs } from '@/shared/types'
import type { MenuItem } from 'primevue/menuitem'

/**
 * Map a MenuItem to a Breadcrumbs object
 *
 * @param breadcrumb - The breadcrumb item to map
 * @returns The mapped breadcrumb object
 */
function mapBreadcrumb(breadcrumb: MenuItem): Breadcrumbs {
  /**
   * MenuItem has a property called icon, but it's not a component.
   * Need to map it to a component.
   */
  return {
    ...breadcrumb,
  } as Breadcrumbs
}

export { mapBreadcrumb }
