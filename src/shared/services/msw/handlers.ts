import { getAuthMock } from '@/shared/services/api/hooks/auth/auth.msw'
import { getProductsMock } from '../api/hooks/products/products.msw'

export const handlers = [...getProductsMock(), ...getAuthMock()]
