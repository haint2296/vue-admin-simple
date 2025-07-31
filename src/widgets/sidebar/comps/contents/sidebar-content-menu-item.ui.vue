<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { useSidebarMenuContext } from '../../context'
import type { SidebarContentMenuItemProps } from '../../types'

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

const isShowDropdown = ref(false)
</script>

<template>
  <li class="w-min-0 relative w-full truncate">
    <button
      v-ripple="dropdown"
      v-styleclass="
        dropdown
          ? {
              selector: '@next',
              enterFromClass: 'hidden',
              enterActiveClass: 'animate-slidedown',
              leaveToClass: 'hidden',
              leaveActiveClass: 'animate-slideup',
            }
          : {}
      "
      @click="isShowDropdown = !isShowDropdown"
      class="flex w-full items-center justify-between gap-2 rounded-xl p-2 text-sm text-gray-600"
    >
      <component
        :is="props.icon || 'div'"
        class="h-4 w-4 flex-shrink-0"
      />
      <span class="flex-1 text-left">{{ props.title }}</span>
      <ChevronRight
        v-if="dropdown"
        class="ml-auto h-4 w-4 transition-transform duration-200"
        :class="isShowDropdown ? 'rotate-90' : ''"
      />
    </button>
    <ul
      v-if="dropdown"
      class="bg-surface-100 hidden rounded-xs py-2 text-sm"
    >
      <li
        v-for="item in props.items"
        :key="item.title"
        class="pl-6"
      >
        <button class="flex w-full items-center gap-2 p-2 text-sm text-gray-600">
          <component
            :is="item.icon"
            class="h-4 w-4 flex-shrink-0"
          />
          <span class="flex-1 text-left">{{ item.title }}</span>
        </button>
      </li>
    </ul>
  </li>
</template>
