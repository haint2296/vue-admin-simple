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
      cn(
        'border-b border-b-[var(--border)] transition-colors hover:bg-[var(--muted)]/50 data-[state=selected]:bg-[var(--muted)]',
        props.class,
      )
    "
  >
    <slot />
  </tr>
</template>

<style scoped></style>
