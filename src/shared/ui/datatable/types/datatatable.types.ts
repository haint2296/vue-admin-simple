import type { ColumnDef } from '@tanstack/vue-table'

interface Datatable<T> {
  loading?: boolean
  data: T[]
  columns: ColumnDef<T>[]
}

export type { Datatable }
