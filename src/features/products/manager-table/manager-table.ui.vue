<script setup lang="ts" generic="T extends object">
import { DataTable } from '@/shared/ui/datatable'
import { columns } from './manager-table.columns'
import type { ProductManagerTableProps } from './manager-table.types'

const props = withDefaults(defineProps<ProductManagerTableProps>(), {
  products: () => [],
})
</script>

<template>
  <div>
    <DataTable
      :data="props.products"
      :columns="columns"
    />
  </div>
</template>
