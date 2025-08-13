<script setup lang="ts">
import { computed } from 'vue'
/**
 * Types.
 */
import type { SidebarContentMenuItem } from '../../types'
/**
 * Components UI.
 */
import { Panel } from 'primevue'
import ContentMenuItemButton from './content-menu-item-button.ui.vue'
import ContentMenuItemLink from './content-menu-item-link.ui.vue'
/**
 * This component must be used within a SidebarContentMenu.
 */
import { useSidebarStore } from '../../store/sidebar.store'

// Props
const props = defineProps<{
  menu: SidebarContentMenuItem
}>()

const sidebarStore = useSidebarStore()

const isPanelOpened = computed(() => {
  return sidebarStore.panelOpened.includes(props.menu.title || '')
})

const panelCollapsed = computed({
  get: () => !isPanelOpened.value,
  set: next => {
    const key = props.menu.keyPanel || ''
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
        :title="props.menu.title"
        :icon="props.menu.icon"
        :dropdown="true"
        :items="props.menu.subMenus"
        :keyPanel="props.menu.keyPanel"
      />
    </template>

    <ul class="border-sidebar !-mt-1 border-l !pb-0 !pl-3 !text-sm">
      <li
        v-for="item in props.menu.subMenus"
        :key="item.title"
      >
        <ContentMenuItemLink :menu="item" />
      </li>
    </ul>
  </Panel>
</template>
