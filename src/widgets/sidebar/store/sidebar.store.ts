import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { useMobileStore } from '@/shared/lib/utils'

export const useSidebarStore = defineStore('sidebar-store', () => {
  const open = ref(true)
  const mobileStore = useMobileStore()

  const setOpen = (isOpen: boolean) => {
    open.value = isOpen
  }

  const toggleSidebar = () => {
    open.value = !open.value
  }

  const isMobile = computed(() => mobileStore.isMobile)

  return { open, setOpen, toggleSidebar, isMobile }
})
