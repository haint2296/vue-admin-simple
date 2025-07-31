import { useContext } from '@/shared/lib/utils'
import { provide } from 'vue'

export const SidebarContext = Symbol('SidebarContext')

export function provideSidebarContext() {
  provide(SidebarContext, true)
}

export function useSidebarContext() {
  return useContext(SidebarContext)
}
