<script setup lang="ts">
import { ChevronDown, ChevronRight } from 'lucide-vue-next'
import { Button, Panel } from 'primevue'
import { computed } from 'vue'
import { useSidebarMenuContext } from '../../context'
import { useSidebarStore } from '../../store/sidebar.store'
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

const sidebarStore = useSidebarStore()

const isPanelOpened = computed(() => {
  return sidebarStore.panelOpened.includes(props.keyPanel || '')
})

// Show only icon with tooltip when sidebar is closed on desktop
const showCompact = computed(() => !sidebarStore.open && !sidebarStore.isMobile)

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
  <li class="w-min-0 relative w-full truncate !text-sm">
    <Button
      v-if="!dropdown"
      :pt="{
        root: '!py-1 !bg-transparent !border-none !px-2 !rounded-xl !text-sm',
      }"
      variant="text"
    >
      <template v-if="props.icon">
        <span
          v-if="showCompact"
          v-tooltip="{
            value: props.title,
            position: 'right',
            appendTo: 'body',
            class: '!text-sm',
          }"
          class="inline-flex"
        >
          <component
            :is="props.icon || 'div'"
            class="h-4 w-4 flex-shrink-0"
          />
        </span>
        <span
          v-else
          class="inline-flex"
        >
          <component
            :is="props.icon || 'div'"
            class="h-4 w-4 flex-shrink-0"
          />
        </span>
      </template>
      <span v-show="!showCompact">{{ props.title }}</span>
    </Button>
    <Panel
      v-else
      toggleable
      v-model:collapsed="panelCollapsed"
      :pt="{
        root: '!py-1 !bg-transparent !border-none !px-1 !rounded-xl',
        header: '!px-1 !border-none',
        content: '!px-3',
        headerActions: '!hidden',
      }"
    >
      <template #header>
        <div
          class="flex w-full cursor-pointer items-center justify-between gap-2"
          role="button"
          :aria-expanded="isPanelOpened"
          tabindex="0"
          @click="sidebarStore.togglePanel(props.keyPanel || '')"
          @keydown.enter.prevent="sidebarStore.togglePanel(props.keyPanel || '')"
          @keydown.space.prevent="sidebarStore.togglePanel(props.keyPanel || '')"
        >
          <template v-if="props.icon">
            <span
              v-if="showCompact"
              v-tooltip="{
                value: props.title,
                position: 'right',
                appendTo: 'body',
                class: '!text-sm',
              }"
              class="inline-flex"
            >
              <component
                :is="props.icon || 'div'"
                class="h-4 w-4 flex-shrink-0"
              />
            </span>
            <span
              v-else
              class="inline-flex"
            >
              <component
                :is="props.icon || 'div'"
                class="h-4 w-4 flex-shrink-0"
              />
            </span>
          </template>
          <span
            v-show="!showCompact"
            class="flex-1 text-left"
            >{{ props.title }}</span
          >

          <component
            v-show="!showCompact"
            :is="isPanelOpened ? ChevronRight : ChevronDown"
            :class="['h-4 w-4']"
          />
        </div>
      </template>

      <ul class="border-sidebar !-mt-0 border-l !pb-1 !pl-2">
        <li
          v-for="item in items"
          :key="item.title"
        >
          <Button
            variant="text"
            :pt="{
              root: '!bg-transparent !border-none !px-2 !rounded-xl !text-sm',
            }"
          >
            <RouterLink :to="item.url || ''">
              {{ item.title }}
            </RouterLink>
          </Button>
        </li>
      </ul>
    </Panel>
  </li>
</template>
