<script setup lang="ts">
import { Drawer } from 'primevue'
import { useSidebarStore } from '../../store/sidebar.store'

const sidebarStore = useSidebarStore()
</script>

<template>
  <Drawer
    v-model:visible="sidebarStore.openMobile"
    class="!w-[calc(var(--sidebar-width-mobile) + 16px)]"
  >
    <template #container>
      <div class="flex h-full flex-col">
        <div class="flex shrink-0 items-center justify-between gap-3">
          <slot name="header" />
        </div>
        <div class="flex-1 overflow-y-auto">
          <div class="m-0">
            <slot />
          </div>
        </div>
        <slot name="footer" />
      </div>
    </template>
  </Drawer>
</template>
