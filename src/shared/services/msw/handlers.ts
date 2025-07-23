import { getAuthMock } from '@/shared/services/api/hooks/auth/auth.msw'
import { getProductsMock } from '../api/hooks/products/products.msw'
import { getUsersMock } from '../api/hooks/users/users.msw'

export const handlers = [...getProductsMock(), ...getUsersMock(), ...getAuthMock()]
