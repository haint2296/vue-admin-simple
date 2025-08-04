// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapProductFromDto(dto: any) {
  return {
    id: dto.id,
    name: dto.name,
    price: dto.price,
  }
}

export { mapProductFromDto }
