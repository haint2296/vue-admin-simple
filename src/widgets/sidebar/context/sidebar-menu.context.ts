import { inject, provide } from 'vue'

export const SidebarMenuContext = Symbol('SidebarMenuContext')

export function provideSidebarMenuContext() {
  provide(SidebarMenuContext, true)
}

export function useSidebarMenuContext() {
  const injected = inject(SidebarMenuContext, null)
  if (!injected) {
    throw new Error('SidebarContentMenuItem must be used within a SidebarContentMenu.')
  }
}
