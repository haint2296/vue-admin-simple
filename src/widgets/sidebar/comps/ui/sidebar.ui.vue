<script setup lang="ts">
import { computed } from 'vue'

import { SidebarContent } from '@/widgets/sidebar/comps/contents'
import { SidebarFooter } from '@/widgets/sidebar/comps/footer'
import { SidebarHeader } from '@/widgets/sidebar/comps/header'
import { SidebarDesktop, SidebarMobile } from '@/widgets/sidebar/comps/layout'
import { useSidebarContext } from '@/widgets/sidebar/context'
import { useSidebarStore } from '@/widgets/sidebar/store'

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
