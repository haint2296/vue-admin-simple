<script setup lang="ts">
import type { Breadcrumbs } from '@/shared/types'
import { toRefs } from 'vue'

const props = defineProps<{
  breadcrumb: Breadcrumbs
}>()

const { breadcrumb } = toRefs(props)
</script>

<template>
  <router-link
    :to="breadcrumb.to"
    @click.prevent="breadcrumb.action?.()"
    class="flex items-center gap-1"
  >
    <component
      v-if="breadcrumb.iconComps"
      :is="breadcrumb.iconComps"
      class="size-4"
    />
    <span class="text-sm">{{ breadcrumb.label }}</span>
  </router-link>
</template>
