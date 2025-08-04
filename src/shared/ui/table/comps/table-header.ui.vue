<script setup lang="ts">
import { cn } from '@/shared/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <thead
    data-slot="table-header"
    :class="cn('[&_tr]:border-b', props.class)"
  >
    <slot />
  </thead>
</template>
