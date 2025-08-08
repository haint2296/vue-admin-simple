<script setup lang="ts">
import { provideTableContext } from '@/shared/ui/table/context'

provideTableContext()

interface Props {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div
    data-slot="table-container"
    class="relative w-full overflow-x-auto"
    :class="props.class"
  >
    <table
      data-slot="table"
      class="w-full caption-bottom text-sm"
    >
      <slot />
    </table>
  </div>
</template>
