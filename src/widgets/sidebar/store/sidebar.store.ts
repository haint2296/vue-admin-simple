import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { useMobileStore } from '@/shared/lib/utils'

export const useSidebarStore = defineStore('sidebar-store', () => {
  const open = ref(true)
  const openMobile = ref(false)
  const mobileStore = useMobileStore()

  const setOpen = (isOpen: boolean) => {
    open.value = isOpen
  }

  const setOpenMobile = (isOpen: boolean) => {
    openMobile.value = isOpen
  }

  const toggleSidebar = () => {
    open.value = !open.value
  }

  const isMobile = computed(() => mobileStore.isMobile)

  return { open, openMobile, setOpen, setOpenMobile, toggleSidebar, isMobile }
})
