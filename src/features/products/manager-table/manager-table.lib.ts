import type { Product as DtoProduct } from '@/shared/services/api/models'
import type { ProductManagerTable } from './manager-table.types'

function mapProductFromDto(dtoProduct: DtoProduct): ProductManagerTable | null {
  const result = {
    id: dtoProduct.id,
    name: dtoProduct.name,
    description: dtoProduct.description,
    status: dtoProduct.status,
  }

  return result as ProductManagerTable
}

function mapProductsFromDto(dtoProducts: DtoProduct[]): ProductManagerTable[] {
  return dtoProducts.map(mapProductFromDto) as ProductManagerTable[]
}

export { mapProductFromDto, mapProductsFromDto }
