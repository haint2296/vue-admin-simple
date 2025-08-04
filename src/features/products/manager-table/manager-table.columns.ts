import type { ColumnDef } from '@tanstack/vue-table'
import type { ProductManagerTable } from './manager-table.types'

const columns: ColumnDef<ProductManagerTable>[] = [
  {
    header: 'ID',
    accessorKey: 'id',
  },
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Description',
    accessorKey: 'description',
  },
]

export { columns }
