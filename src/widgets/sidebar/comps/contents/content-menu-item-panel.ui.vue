<script setup lang="ts">
import { computed } from 'vue'
/**
 * Types.
 */
import type { Component } from 'vue'
import type { SidebarContentMenuItemProps } from '../../types'
/**
 * Components UI.
 */
import { Panel } from 'primevue'
import ContentMenuItemButton from './content-menu-item-button.ui.vue'
/**
 * This component must be used within a SidebarContentMenu.
 */
import { useSidebarStore } from '../../store/sidebar.store'

// Props
const props = defineProps<{
  title: string
  icon?: Component | string
  items?: Array<SidebarContentMenuItemProps> | undefined
  keyPanel?: string
}>()

const sidebarStore = useSidebarStore()

const isPanelOpened = computed(() => {
  return sidebarStore.panelOpened.includes(props.keyPanel || '')
})

const panelCollapsed = computed({
  get: () => !isPanelOpened.value,
  set: next => {
    const key = props.keyPanel || ''
    if (!key) return
    const isOpenInStore = sidebarStore.panelOpened.includes(key)
    if (next && isOpenInStore) sidebarStore.togglePanel(key)
    if (!next && !isOpenInStore) sidebarStore.togglePanel(key)
  },
})
</script>

<template>
  <Panel
    toggleable
    v-model:collapsed="panelCollapsed"
    :pt="{
      root: '!py-0 !bg-transparent !border-none !px-1 !rounded-xl !m-0',
      header: '!px-0 !py-0 !border-none',
      content: '!px-3 !pb-0 !pl-3',
      headerActions: '!hidden',
    }"
  >
    <template #header>
      <ContentMenuItemButton
        :title="props.title"
        :icon="props.icon"
        :dropdown="true"
        :url="'/'"
        :items="items"
        :keyPanel="props.keyPanel"
      />
    </template>

    <ul class="border-sidebar !-mt-1 border-l !pb-0 !pl-3 !text-sm">
      <li
        v-for="item in items"
        :key="item.title"
      >
        <ContentMenuItemButton
          :title="item.title"
          :url="item.url || ''"
        />
      </li>
    </ul>
  </Panel>
</template>
