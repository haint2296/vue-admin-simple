<script setup lang="ts" generic="T extends object">
// import { useVueTable } from '@tanstack/vue-table'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/shared/ui/table'
import type { Datatable } from '../types'

const props = withDefaults(defineProps<Datatable<T>>(), {
  loading: true,
})

console.log(props)

// const { data, columns } = useVueTable({
//   data: props.data,
//   columns: props.columns,
// })
</script>

<template>
  <div>
    <div className="overflow-hidden rounded-md border border-surface-200">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead class="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead class="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell class="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell class="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell class="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>

<style scoped></style>
