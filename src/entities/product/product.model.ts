import { z } from 'zod'

const ProductAttributesSchema = z.object({
  color: z.string(),
  size: z.string(),
  weight: z.number(),
  dimensions: z.object({
    length: z.number(),
    width: z.number(),
    height: z.number(),
  }),
})

const ProductStatusSchema = z.enum(['active', 'inactive', 'draft'])

const ProductPriceSchema = z.object({
  original: z.number(),
  discount: z.number(),
  currency: z.string(),
})

const ProductImageSchema = z.object({
  url: z.string(),
  alt: z.string(),
  width: z.number(),
  height: z.number(),
  size: z.number(),
  type: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: ProductPriceSchema,
  description: z.string(),
  status: ProductStatusSchema,
  category: z.string(),
  image: z.array(ProductImageSchema),
  stock: z.number(),
  brand: z.string(),
  tags: z.array(z.string()),
  attributes: ProductAttributesSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
})

type Product = z.infer<typeof ProductSchema>
type ProductAttributes = z.infer<typeof ProductAttributesSchema>
type ProductStatus = z.infer<typeof ProductStatusSchema>
type ProductPrice = z.infer<typeof ProductPriceSchema>
type ProductImage = z.infer<typeof ProductImageSchema>

export { ProductSchema }
export type { Product, ProductAttributes, ProductImage, ProductPrice, ProductStatus }
