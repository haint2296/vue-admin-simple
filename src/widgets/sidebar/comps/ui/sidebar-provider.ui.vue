<script setup lang="ts">
import { Breadcrumb, useBreadcrumbStore } from '@/features/breadcrumb'
import { cn } from '@/shared/lib/utils'
import { SidebarTrigger } from '@/widgets/sidebar'
import { provideSidebarContext } from '../../context'
import { useSidebarStore } from '../../store/sidebar.store'
import { SidebarInset } from '../inset'
import Sidebar from './sidebar.ui.vue'

import { Divider } from 'primevue'

/**
 * Provide the sidebar context
 */
provideSidebarContext()

/**
 * Get the sidebar store
 */
const sidebarStore = useSidebarStore()

const breadcrumbStore = useBreadcrumbStore()

console.log('breadcrumbStore: ', breadcrumbStore.breadcrumbs)
</script>

<template>
  <div class="flex w-full">
    <Sidebar />
    <SidebarInset class="w-full">
      <main class="bg-background relative flex w-full flex-1 flex-col">
        <header
          :class="
            cn('flex h-16 flex-shrink-0 items-center gap-2 transition-all duration-200', {
              'h-12!': !sidebarStore.open || sidebarStore.isMobile,
            })
          "
        >
          <div class="flex items-center gap-1 px-4">
            <SidebarTrigger />
            <Divider
              layout="vertical"
              class="mx-1 h-full"
            />
            <Breadcrumb />
          </div>
        </header>
        <div class="px-4">
          <slot />
        </div>
      </main>
    </SidebarInset>
  </div>
</template>

<style></style>
