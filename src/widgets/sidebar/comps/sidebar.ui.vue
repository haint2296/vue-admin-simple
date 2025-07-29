<script setup lang="ts">
import { computed } from 'vue'
import { useSidebarStore } from '../store/sidebar.store'
import SidebarContent from './sidebar-content.ui.vue'
import SidebarDesktop from './sidebar-desktop.ui.vue'
import SidebarHeader from './sidebar-header.ui.vue'
import SidebarMobile from './sidebar-mobile.ui.vue'

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
    class="ctx-sidebar border-surface flex min-h-screen flex-col justify-start border-r"
  >
    <template #header>
      <SidebarHeader />
    </template>
    <SidebarContent />
  </component>
</template>

<style scoped>
.ctx-sidebar {
  --sidebar-width: 16rem;
  --sidebar-width-icon: 3rem;
  --sidebar-width-mobile: 18rem;
}
</style>
