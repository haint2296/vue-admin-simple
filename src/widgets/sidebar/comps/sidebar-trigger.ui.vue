<script setup lang="ts">
import { PanelRight } from 'lucide-vue-next'
import { Button } from 'primevue'
/**
 * stores
 */
import { useSidebarStore } from '../store/sidebar.store'

const sidebarStore = useSidebarStore()
</script>

<template>
  <Button
    variant="text"
    class="p-0! hover:p-0!"
    @click="sidebarStore.setOpen(!sidebarStore.open)"
  >
    <PanelRight />
  </Button>
</template>
