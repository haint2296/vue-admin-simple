<script setup lang="ts">
import { computed } from 'vue'
import { useSidebarContext } from '../context'
import { useSidebarStore } from '../store/sidebar.store'
import { SidebarContent } from './contents'
import { SidebarFooter } from './footer'
import { SidebarHeader } from './header'
import { SidebarDesktop, SidebarMobile } from './layout'

/**
 * Check if the sidebar is provided
 */
useSidebarContext()

/**
 * Get the sidebar store
 */
const sidebarStore = useSidebarStore()

/**
 * sidebar components
 */
const sidebarComponents = computed(() => {
  return sidebarStore.isMobile ? SidebarMobile : SidebarDesktop
})
</script>

<template>
  <component
    :is="sidebarComponents"
    class="ctx-sidebar border-surface bg-surface-50 flex min-h-screen flex-col gap-2 border-r pb-4"
  >
    <template #header>
      <SidebarHeader />
    </template>
    <div class="flex flex-1 flex-col gap-2">
      <SidebarContent />
    </div>
    <template #footer>
      <SidebarFooter />
    </template>
  </component>
</template>

<style scoped>
.ctx-sidebar {
  --sidebar-width: 16rem;
  --sidebar-width-icon: 3rem;
  --sidebar-width-mobile: 18rem;
}
</style>
