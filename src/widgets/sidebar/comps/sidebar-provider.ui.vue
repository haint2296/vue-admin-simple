<script setup lang="ts">
import { cn } from '@/shared/lib/utils'
import { SidebarTrigger } from '@/widgets/sidebar'
import { useSidebarStore } from '../store/sidebar.store'
import SidebarInsetA from './sidebar-inset-a.ui.vue'
import Sidebar from './sidebar.ui.vue'

const sidebarStore = useSidebarStore()
</script>

<template>
  <div class="flex w-full">
    <Sidebar />
    <SidebarInsetA class="w-full">
      <main class="bg-background relative flex w-full flex-1 flex-col">
        <header
          :class="
            cn('flex h-16 flex-shrink-0 items-center gap-2 transition-all duration-200', {
              'h-12!': !sidebarStore.open || sidebarStore.isMobile,
            })
          "
        >
          <div class="flex items-center gap-2 px-4">
            <SidebarTrigger />
          </div>
        </header>
        <div class="px-4">
          <slot />
        </div>
      </main>
    </SidebarInsetA>
  </div>
</template>

<style></style>
