<script setup lang="ts">
import { SidebarContent } from '@/widgets/sidebar/comps/contents'
import { SidebarFooter } from '@/widgets/sidebar/comps/footer'
import { SidebarHeader } from '@/widgets/sidebar/comps/header'
import { SidebarDesktop, SidebarMobile } from '@/widgets/sidebar/comps/layout'
import { useSidebarStore } from '@/widgets/sidebar/store'
import { computed } from 'vue'

/**
 * Check if the sidebar is provided
 */
// useSidebarContext()

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
  <div class="h-screen overflow-hidden p-2">
    <component
      :is="sidebarComponents"
      class="ctx-sidebar border-sidebar flex h-full flex-col gap-2 overflow-hidden rounded-xl border"
    >
      <template #header>
        <SidebarHeader />
      </template>
      <div class="flex flex-1 flex-col gap-2 overflow-auto">
        <SidebarContent />
      </div>
      <template #footer>
        <SidebarFooter />
      </template>
    </component>
  </div>
</template>

<style scoped>
.ctx-sidebar {
  --sidebar-width: 16rem;
  --sidebar-width-icon: 3rem;
  --sidebar-width-mobile: 18rem;
}
</style>
