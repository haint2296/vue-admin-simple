<script setup lang="ts">
import { computed } from 'vue'
import { useSidebarMenuContext } from '../../context'
import type { SidebarContentMenuItem } from '../../types'
import ContentMenuItemButton from './content-menu-item-button.ui.vue'
import ContentMenuItemPanel from './content-menu-item-panel.ui.vue'

/**
 * This component must be used within a SidebarContentMenu.
 */
useSidebarMenuContext()

/**
 * Props with defaults.
 */
const props = withDefaults(defineProps<{ menu: SidebarContentMenuItem }>(), {})

/**
 * Computed dropdown properties.
 */
const dropdown = computed(() => {
  return props.menu.subMenus && props.menu.subMenus.length > 0
})
</script>

<template>
  <li class="w-min-0 relative w-full truncate !text-sm">
    <ContentMenuItemButton
      class="!px-2"
      v-if="!dropdown"
      :title="props.menu.title"
      :icon="props.menu.icon || 'div'"
      :url="props.menu.url || ''"
    />
    <ContentMenuItemPanel
      v-else
      :menu="props.menu"
    />
  </li>
</template>
