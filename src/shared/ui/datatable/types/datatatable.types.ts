import type { ColumnDef } from '@tanstack/vue-table'

interface Datatable<T> {
  loading?: boolean
  data: T[]
  columns: ColumnDef<T>[]
  selectVisibility?: boolean
  searchPlaceholder?: string
  searchTextInput?: string
  searchInputVisibility?: boolean
}

export type { Datatable }
