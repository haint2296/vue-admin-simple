<script setup lang="ts">
import { Button } from 'primevue'
import type { Component } from 'vue'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useSidebarStore } from '../../store/sidebar.store'
import type { SidebarContentMenuItemProps } from '../../types'
import ContentMenuItemIcon from './content-menu-item-icon.ui.vue'

import { ChevronDown, ChevronRight } from 'lucide-vue-next'

interface Props {
  title: string
  icon?: Component | string
  url?: string
  dropdown?: boolean
  keyPanel?: string
  items?: Array<SidebarContentMenuItemProps> | undefined
}
const sidebarStore = useSidebarStore()
const props = defineProps<Props>()

const isPanelOpened = computed(() => {
  return sidebarStore.panelOpened.includes(props.keyPanel || '')
})

const headerPanelClick = () => {
  if (sidebarStore.isMobile || sidebarStore.open) {
    sidebarStore.togglePanel(props.title || '')
    return
  }
}
</script>

<template>
  <Button
    variant="text"
    :pt="{
      root: '!bg-transparent !border-none !px-1 !rounded-xl !text-sm w-full',
    }"
  >
    <div class="flex w-full min-w-0 items-center gap-2">
      <ContentMenuItemIcon
        :icon="icon"
        :title="title"
        :subMenus="items"
      />
      <div
        class="flex flex-1 cursor-pointer items-center gap-2"
        @click.stop="headerPanelClick"
      >
        <component
          :is="props.url ? RouterLink : 'span'"
          v-bind="props.url ? { to: props.url } : {}"
          class="min-w-0 flex-1 truncate text-left"
        >
          {{ props.title }}
        </component>

        <component
          v-if="dropdown"
          :is="isPanelOpened ? ChevronRight : ChevronDown"
          :class="['h-4 w-4 shrink-0']"
        />
      </div>
    </div>
  </Button>
</template>
