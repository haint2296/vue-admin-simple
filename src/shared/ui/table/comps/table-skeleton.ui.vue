<script setup lang="ts">
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/shared/ui/table'

import { Skeleton } from 'primevue'

interface Props {
  columnNames: string[]
  rowCount?: number
}

const props = withDefaults(defineProps<Props>(), {
  rowCount: 3,
})
</script>

<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead
          v-for="column in props.columnNames"
          :key="column"
        >
          {{ column }}
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow
        v-for="row in props.rowCount"
        :key="row"
      >
        <TableCell
          v-for="column in props.columnNames"
          :key="column"
        >
          <Skeleton class="h-4 w-full" />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
