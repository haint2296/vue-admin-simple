<script setup lang="ts" generic="T extends object">
import type { Column } from '@tanstack/vue-table'
import { Button, Checkbox, Popover } from 'primevue'
import { computed, ref } from 'vue'

interface Props {
  columns: Column<T>[]
}

const props = defineProps<Props>()

const op = ref()

const columns = computed(() => {
  return props.columns.filter((column: Column<T>) => column.getCanHide())
})
const toggle = (event: Event) => {
  op.value.toggle(event)
}
</script>

<template>
  <div class="text-sm">
    <div>
      <Button
        type="button"
        label="Visibility"
        size="small"
        variant="outlined"
        @click="toggle"
      />
      <Popover ref="op">
        <div
          v-for="column in columns"
          :key="column.id"
          class="mb-2 flex items-center gap-1"
        >
          <Checkbox
            binary
            :modelValue="column.getIsVisible()"
            @update:modelValue="value => column.toggleVisibility(!!value)"
          />
          <span>{{ column.id }}</span>
        </div>
      </Popover>
    </div>
  </div>
</template>
