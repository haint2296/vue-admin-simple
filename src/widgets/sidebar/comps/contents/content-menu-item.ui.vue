<script setup lang="ts">
import { computed } from 'vue'
import { useSidebarMenuContext } from '../../context'
import type { SidebarContentMenuItem } from '../../types'
import ContentMenuItemLink from './content-menu-item-link.ui.vue'
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
    <ContentMenuItemLink
      v-if="!dropdown"
      :menu="props.menu"
    />
    <ContentMenuItemPanel
      v-else
      :menu="props.menu"
    />
  </li>
</template>
