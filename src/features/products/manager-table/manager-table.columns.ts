import type { ColumnDef } from '@tanstack/vue-table'
import type { ProductManagerTable } from './manager-table.types'

const columns: ColumnDef<ProductManagerTable>[] = [
  {
    header: 'ID',
    accessorKey: 'id',
    enableHiding: false,
  },
  {
    header: 'Name',
    accessorKey: 'name',
    enableHiding: true,
  },
  {
    header: 'Description',
    accessorKey: 'description',
    enableHiding: true,
  },
  {
    header: 'Status',
    accessorKey: 'status',
    enableHiding: true,
  },
]

export { columns }
