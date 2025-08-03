<script setup lang="ts">
import { cn } from '@/shared/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <tr
    data-slot="table-row"
    :class="
      cn('hover:bg-muted/50 data-[state=selected]:bg-muted border-surface-200 border-b transition-colors', props.class)
    "
  >
    <slot />
  </tr>
</template>

<style scoped></style>
