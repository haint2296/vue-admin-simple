<script setup lang="ts">
import { cn } from '@/shared/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <th
    data-slot="table-head"
    :class="
      cn(
        'text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        props.class,
      )
    "
  >
    <slot />
  </th>
</template>
