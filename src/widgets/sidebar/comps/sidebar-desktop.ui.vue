<script setup lang="ts">
import { cn } from '@/shared/lib/utils'
import { useSidebarStore } from '../store/sidebar.store'

const sidebarStore = useSidebarStore()
</script>

<template>
  <div
    data-slot="sidebar"
    class="transition-all duration-200"
    :class="cn(sidebarStore.open && 'w-[var(--sidebar-width)]', !sidebarStore.open && 'w-[var(--sidebar-width-icon)]')"
  >
    <slot />
  </div>
</template>
