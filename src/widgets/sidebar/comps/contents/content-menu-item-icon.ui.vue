<script setup lang="ts">
import { computed, ref, type Component } from 'vue'

import type { SidebarContentMenuItem } from '@/widgets/sidebar/types'
import { Menu } from 'primevue'
import { useSidebarStore } from '../../store/sidebar.store'

const sidebarStore = useSidebarStore()
const props = defineProps<{
  icon: Component | string
  title: string
  subMenus: Array<SidebarContentMenuItem> | undefined
}>()

const showCompact = computed(() => !sidebarStore.open && !sidebarStore.isMobile)

const subMenusComputed = computed(() => {
  if (!props.subMenus) return []

  return props.subMenus.map(item => {
    return {
      label: item.title,
      url: item.url,
    }
  })
})

const menuRef = ref()

const headerIconPanelClick = (event: Event) => {
  event.preventDefault()
  if (sidebarStore.isMobile || sidebarStore.open) return
  if (!props.subMenus?.length) return

  menuRef.value?.toggle(event)
}
</script>

<template>
  <span
    v-tooltip="{
      value: props.title,
      position: 'right',
      appendTo: 'body',
      class: '!text-sm',
      disabled: !showCompact,
    }"
    @click.stop="headerIconPanelClick"
  >
    <component
      :is="props.icon"
      class="h-4 w-4"
    />

    <Menu
      ref="menuRef"
      popup
      :model="subMenusComputed"
      :pt="{ root: { class: 'ml-5 !-mt-2' } }"
      append-to="body"
    >
      <template #item="{ item }">
        <RouterLink
          :to="item.url || ''"
          class="flex cursor-pointer flex-col gap-2 rounded-xl px-2 py-2 text-sm"
        >
          <span>{{ item.label }}</span>
        </RouterLink>
      </template>
    </Menu>
  </span>
</template>
