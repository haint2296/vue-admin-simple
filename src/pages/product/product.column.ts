import type { ColumnDef } from '@tanstack/vue-table'

import type { Product } from '@/entities/product'

const columnDef: ColumnDef<Product>[] = [
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Price',
    accessorKey: 'price',
  },
]

export { columnDef }
