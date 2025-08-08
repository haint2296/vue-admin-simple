import type { Product } from '@/entities/product'

type ProductManagerTable = Pick<Product, 'id' | 'name' | 'description' | 'status'>

type ProductManagerTableProps = {
  products: ProductManagerTable[]
}

export type { ProductManagerTable, ProductManagerTableProps }
