import type { ColumnDef } from '@tanstack/vue-table'

import type { ManagerTableColumn } from './task-manager-table.type'

const columns: ColumnDef<ManagerTableColumn>[] = [
  {
    header: 'ID',
    accessorKey: 'id',
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: 'Title',
    accessorKey: 'title',
    enableSorting: true,
    enableHiding: false,
  },
  {
    header: 'Description',
    accessorKey: 'description',
    enableSorting: false,
  },
  {
    header: 'Status',
    accessorKey: 'status',
    enableSorting: false,
  },
  {
    header: 'Priority',
    accessorKey: 'priority',
  },
  {
    header: 'Created At',
    accessorKey: 'createdAt',
    enableSorting: false,
  },
]

export { columns }
