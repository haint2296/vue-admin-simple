<script setup lang="ts">
import type { SidebarContentMenuItem } from '@/widgets/sidebar/types'
import { RouterLink } from 'vue-router'
import ContentMenuItemIcon from './content-menu-item-icon.ui.vue'

const props = defineProps<{
  menu: SidebarContentMenuItem
}>()
</script>

<template>
  <RouterLink
    :to="props.menu.url || ''"
    class="flex items-center gap-2 rounded-xl p-2 text-sm"
    @click.stop.prevent
    role="button"
    v-ripple
  >
    <ContentMenuItemIcon
      v-if="props.menu.icon"
      :icon="props.menu.icon"
      :title="props.menu.title"
      :subMenus="props.menu.subMenus"
      class="shrink-0"
    />
    <span>{{ props.menu.title }}</span>
  </RouterLink>
</template>
