<script setup lang="ts">
import { PanelRight } from 'lucide-vue-next'
import { Button } from 'primevue'
/**
 * stores
 */
import { useSidebarStore } from '../../store/sidebar.store'

const sidebarStore = useSidebarStore()

function handleClick() {
  if (sidebarStore.isMobile) {
    sidebarStore.setOpenMobile(!sidebarStore.openMobile)
  } else {
    sidebarStore.setOpen(!sidebarStore.open)
  }
}
</script>

<template>
  <Button
    variant="text"
    class="! p-0! hover:p-0!"
    @click="handleClick"
    type="button"
  >
    <PanelRight class="h-5 w-5" />
  </Button>
</template>
