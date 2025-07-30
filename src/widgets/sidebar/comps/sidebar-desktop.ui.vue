<script setup lang="ts">
import { cn } from '@/shared/lib/utils'
import { useSidebarStore } from '../store/sidebar.store'

const sidebarStore = useSidebarStore()
</script>

<template>
  <div
    :data-collapsible="!sidebarStore.open ? 'icon' : ''"
    class="group transition-all duration-150"
    :class="
      cn(
        sidebarStore.open && 'w-[var(--sidebar-width)]',
        !sidebarStore.open && 'w-[var(--sidebar-width-icon)]',
        sidebarStore.open && 'min-w-[var(--sidebar-width)]',
        !sidebarStore.open && 'min-w-[var(--sidebar-width-icon)]',
      )
    "
  >
    <slot name="header" />
    <slot />
  </div>
</template>
