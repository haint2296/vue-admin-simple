<script setup lang="ts">
import type { ManagerTableProps } from './task-manager-table.type'

import { DataTable } from '@/shared/ui/datatable'

import { columns } from './task-manager-table.column'

const props = defineProps<ManagerTableProps>()
</script>

<template>
  <DataTable
    :data="props.tasks"
    :columns="columns"
  />
</template>
