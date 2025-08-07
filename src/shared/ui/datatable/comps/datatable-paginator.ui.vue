<script setup lang="ts">
import { computed } from 'vue'

import { Paginator } from 'primevue'

import type { Table } from '@tanstack/vue-table'

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  table: Table<any>
}

const props = defineProps<Props>()

const totalRecords = computed(() => props.table.getRowModel().rows.length)
</script>

<template>
  <div class="flex items-center justify-between gap-1">
    <span class="text-sm"> Selected: {{ props.table.getRowModel().rows.length }}</span>
    <div class="flex items-center gap-1">
      <Paginator
        :rows="2"
        :totalRecords="totalRecords"
        :rowsPerPageOptions="[2, 10, 20, 30]"
        :pt="{
          page: { class: '!text-[13px] !min-w-[2rem] !min-h-[2rem] !h-0' },
          pcRowPerPageDropdown: {
            root: { class: '!text-[13px] !leading-none' },
            label: { class: '!text-[13px] !leading-none' },
            listContainer: { class: '!text-[12px] leading-none' },
            dropdownIcon: { class: '!text-[10px] leading-none' },
          },
        }"
      >
      </Paginator>
    </div>
  </div>
</template>
