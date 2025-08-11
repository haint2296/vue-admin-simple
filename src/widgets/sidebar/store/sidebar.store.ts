import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'

import { useMobileStore } from '@/shared/lib/utils'

export const useSidebarStore = defineStore('sidebar-store', () => {
  const open = ref(true)
  const openMobile = ref(false)
  const mobileStore = useMobileStore()

  const panelOpened = reactive<Array<string>>(['Customers'])

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

  const togglePanel = (key: string) => {
    if (panelOpened.includes(key)) {
      panelOpened.splice(panelOpened.indexOf(key), 1)
    } else {
      panelOpened.push(key)
    }
  }

  const resetPanelOpened = () => {
    panelOpened.length = 0
  }

  return {
    open,
    openMobile,
    setOpen,
    setOpenMobile,
    toggleSidebar,
    isMobile,
    panelOpened,
    togglePanel,
    resetPanelOpened,
  }
})
