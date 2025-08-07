<script setup lang="ts" generic="T extends object">
import { ref } from 'vue'
/**
 * Tanstack Table
 */
import { FlexRender, getCoreRowModel, getFilteredRowModel, useVueTable } from '@tanstack/vue-table'
/**
 * Shared Table UI
 * @see ./shared/ui/table/table.ui.vue
 */
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/shared/ui/table'
/**
 * Components internal in datatable ui
 * @see ./comps/datatable-column-visibility.ui.vue
 * @see ./comps/datatable-searchbox.ui.vue
 */
import { DatatableColumnVisibility, DatatablePaginator, DatatableSearchbox } from './comps'
/**
 * Types
 * @see ./types/datatatable.types.ts
 */
import type { Datatable } from './types'
/**
 * Props
 */
const props = withDefaults(defineProps<Datatable<T>>(), {
  /**
   * Loading state
   */
  loading: true,
  /**
   * box visibility column
   */
  selectVisibility: true,
  /**
   * Searchbox props
   */
  searchPlaceholder: 'Search...',
  searchTextInput: '',
  searchInputVisibility: true,
})

/**
 * Search input text
 */
const searchTextInput = ref<string>(props.searchTextInput)

/**
 * Table instance
 */
const table = useVueTable({
  get data() {
    return props.data
  },
  get columns() {
    return props.columns
  },
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  enableColumnFilters: true,
  enableRowSelection: true,
  enableMultiRowSelection: true,
  enableSorting: true,
  enableColumnResizing: true,
  enableColumnPinning: true,
  enableGlobalFilter: true,
})

/**
 * Handler search input text
 */
const onSearch = (value: string) => {
  table.setGlobalFilter(value)
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center justify-between">
      <div>
        <DatatableSearchbox
          v-if="props.searchInputVisibility"
          v-model="searchTextInput"
          :placeholder="props.searchPlaceholder"
          :onSearch="onSearch"
        />
      </div>
      <div class="flex items-center justify-end gap-2">
        <DatatableColumnVisibility
          :columns="table.getAllColumns()"
          v-if="props.selectVisibility"
        />
      </div>
    </div>
    <div className="overflow-hidden rounded-md border border-[var(--border)]">
      <Table>
        <TableHeader>
          <TableRow
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
          >
            <TableHead
              v-for="header in headerGroup.headers"
              :key="header.id"
              :colSpan="header.colSpan"
            >
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            v-for="row in table.getRowModel().rows"
            :key="row.id"
          >
            <TableCell
              v-for="cell in row.getVisibleCells()"
              :key="cell.id"
            >
              {{ cell.getValue() }}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
    <DatatablePaginator :table="table" />
  </div>
</template>
