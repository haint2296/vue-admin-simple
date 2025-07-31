import { provide } from 'vue'

import { useContext } from '@/shared/lib/utils'

export const SidebarMenuContext = Symbol('SidebarMenuContext')

export function provideSidebarMenuContext() {
  provide(SidebarMenuContext, true)
}

export function useSidebarMenuContext() {
  return useContext(SidebarMenuContext, {
    message: 'SidebarContentMenuItem must be used within a SidebarContentMenu.',
  })
}
