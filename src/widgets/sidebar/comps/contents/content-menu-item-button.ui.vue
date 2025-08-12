<script setup lang="ts">
import { Button, Menu } from 'primevue'
import type { Component } from 'vue'
import { computed, ref } from 'vue'
import { useSidebarStore } from '../../store/sidebar.store'
import type { SidebarContentMenuItemProps } from '../../types'

import { ChevronDown, ChevronRight } from 'lucide-vue-next'

interface Props {
  title: string
  icon?: Component | string
  url: string
  dropdown?: boolean
  keyPanel?: string
  items?: Array<SidebarContentMenuItemProps> | undefined
}
const sidebarStore = useSidebarStore()
const props = defineProps<Props>()
const showCompact = computed(() => !sidebarStore.open && !sidebarStore.isMobile)
const isPanelOpened = computed(() => {
  return sidebarStore.panelOpened.includes(props.keyPanel || '')
})

const menu = ref()

const subMenu = computed(() => {
  if (!props.items) return []

  return props.items.map(item => {
    return {
      label: item.title,
    }
  })
})

const headerPanelClick = () => {
  console.log('headerPanelClick')
  if (sidebarStore.isMobile || sidebarStore.open) {
    sidebarStore.togglePanel(props.keyPanel || '')
    return
  }
}

const headerIconPanelClick = (event: Event) => {
  if (sidebarStore.isMobile || sidebarStore.open) return
  if (!subMenu.value.length) return

  menu.value?.toggle(event)
}
</script>

<template>
  <Button
    variant="text"
    :pt="{
      root: '!bg-transparent !border-none !px-1 !rounded-xl !text-sm w-full',
    }"
    @click="headerPanelClick"
  >
    <div class="flex w-full min-w-0 items-center gap-2">
      <template v-if="props.icon">
        <span
          v-tooltip="{
            value: props.title,
            position: 'right',
            appendTo: 'body',
            class: '!text-sm',
            disabled: !showCompact,
          }"
          class="inline-flex shrink-0"
          @click.stop="headerIconPanelClick"
        >
          <component
            v-if="props.icon"
            :is="props.icon"
            class="h-4 w-4 flex-shrink-0"
          />
        </span>
        <Menu
          ref="menu"
          popup
          :model="subMenu"
          append-to="body"
          :pt="{ root: { class: 'ml-5 !-mt-2' } }"
        >
          <template #item="{ item }">
            <div
              class="hover:bg-surface-100 flex cursor-pointer flex-col gap-2 rounded-xl px-2 py-2 text-sm"
            >
              <span>{{ item.label }}</span>
            </div>
          </template>
        </Menu>
      </template>
      <div
        class="flex flex-1 cursor-pointer items-center gap-2"
        @click.stop="headerPanelClick"
      >
        <span class="min-w-0 flex-1 truncate text-left">
          {{ props.title }}
        </span>
        <component
          v-if="dropdown"
          :is="isPanelOpened ? ChevronRight : ChevronDown"
          :class="['h-4 w-4 shrink-0']"
        />
      </div>
    </div>
  </Button>
</template>
