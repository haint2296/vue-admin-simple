<script setup lang="ts">
import { cn } from '@/shared/lib/utils'
import { SidebarTrigger, useSidebarStore } from '@/widgets/sidebar'
import { Divider } from 'primevue'

import { SwitchTheme } from '@/features/theme'

const sidebarStore = useSidebarStore()
</script>

<template>
  <header
    :class="
      cn('flex h-16 flex-shrink-0 items-center justify-between gap-2 px-2 transition-all duration-200', {
        'h-12!': !sidebarStore.open || sidebarStore.isMobile,
      })
    "
  >
    <div class="flex items-center">
      <SidebarTrigger />
      <Divider
        layout="vertical"
        :pt="{
          root: {
            class: 'mx-0 !p-1',
          },
        }"
      />
      <Breadcrumb />
    </div>
    <div>
      <SwitchTheme />
    </div>
  </header>
</template>
