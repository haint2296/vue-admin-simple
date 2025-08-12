<script setup lang="ts">
import { computed } from 'vue'
import { useSidebarMenuContext } from '../../context'
import type { SidebarContentMenuItemProps } from '../../types'
import ContentMenuItemButton from './content-menu-item-button.ui.vue'
import ContentMenuItemPanel from './content-menu-item-panel.ui.vue'

/**
 * This component must be used within a SidebarContentMenu.
 */
useSidebarMenuContext()

/**
 * Props with defaults.
 */
const props = withDefaults(defineProps<SidebarContentMenuItemProps>(), {
  title: '',
  icon: undefined,
  items: undefined,
})

/**
 * Computed dropdown properties.
 */
const dropdown = computed(() => {
  return props.items && props.items.length > 0
})
</script>

<template>
  <li class="w-min-0 relative w-full truncate !text-sm">
    <ContentMenuItemButton
      class="!px-2"
      v-if="!dropdown"
      :title="props.title"
      :icon="props.icon || 'div'"
      :url="props.url || ''"
    />
    <ContentMenuItemPanel
      v-else
      :title="props.title"
      :icon="props.icon"
      :items="props.items || []"
      :keyPanel="props.keyPanel || ''"
    />
  </li>
</template>
