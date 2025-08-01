/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * Admin Simple API
 * OpenAPI spec version: 1.0.0
 */
import { faker } from '@faker-js/faker'

import { HttpResponse, delay, http } from 'msw'

import type {
  GetMe401,
  GetMe500,
  PostLogin200,
  PostLogin401,
  PostLogin500,
  PostLogout200,
  PostLogout401,
  User,
} from '../../models'

export const getPostLoginResponseMock = (overrideResponse: Partial<PostLogin200> = {}): PostLogin200 => ({
  access_token: faker.string.alpha({ length: { min: 10, max: 20 } }),
  refresh_token: faker.string.alpha({ length: { min: 10, max: 20 } }),
  ...overrideResponse,
})

export const getPostLoginResponseMock200 = (overrideResponse: Partial<PostLogin200> = {}): PostLogin200 => ({
  access_token: faker.string.alpha({ length: { min: 10, max: 20 } }),
  refresh_token: faker.string.alpha({ length: { min: 10, max: 20 } }),
  ...overrideResponse,
})

export const getPostLoginResponseMock401 = (overrideResponse: Partial<PostLogin401> = {}): PostLogin401 => ({
  message: faker.helpers.arrayElement([faker.string.alpha({ length: { min: 10, max: 20 } }), undefined]),
  ...overrideResponse,
})

export const getPostLoginResponseMock500 = (overrideResponse: Partial<PostLogin500> = {}): PostLogin500 => ({
  message: faker.helpers.arrayElement([faker.string.alpha({ length: { min: 10, max: 20 } }), undefined]),
  ...overrideResponse,
})

export const getGetMeResponseMock = (overrideResponse: Partial<User> = {}): User => ({
  id: faker.string.uuid(),
  name: faker.string.alpha({ length: { min: 10, max: 20 } }),
  email: faker.internet.email(),
  address: {
    street: faker.helpers.arrayElement([faker.string.alpha({ length: { min: 10, max: 20 } }), undefined]),
    city: faker.helpers.arrayElement([faker.string.alpha({ length: { min: 10, max: 20 } }), undefined]),
    state: faker.helpers.arrayElement([faker.string.alpha({ length: { min: 10, max: 20 } }), undefined]),
    zip: faker.helpers.arrayElement([faker.string.alpha({ length: { min: 10, max: 20 } }), undefined]),
    country: faker.helpers.arrayElement([faker.string.alpha({ length: { min: 10, max: 20 } }), undefined]),
  },
  phone: faker.string.alpha({ length: { min: 10, max: 20 } }),
  website: faker.string.alpha({ length: { min: 10, max: 20 } }),
  gender: faker.helpers.arrayElement(['male', 'female', 'other'] as const),
  roles: {
    role: faker.helpers.arrayElement(['user', 'admin', 'superadmin', 'sale', 'marketing'] as const),
    permissions_groups: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() =>
      faker.string.alpha({ length: { min: 10, max: 20 } }),
    ),
    permissions: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() =>
      faker.string.alpha({ length: { min: 10, max: 20 } }),
    ),
  },
  status: faker.helpers.arrayElement(['active', 'inactive', 'pending'] as const),
  created_at: `${faker.date.past().toISOString().split('.')[0]}Z`,
  ...overrideResponse,
})

export const getGetMeResponseMock200 = (overrideResponse: Partial<User> = {}): User => ({
  id: faker.string.uuid(),
  name: faker.string.alpha({ length: { min: 10, max: 20 } }),
  email: faker.internet.email(),
  address: {
    street: faker.helpers.arrayElement([faker.string.alpha({ length: { min: 10, max: 20 } }), undefined]),
    city: faker.helpers.arrayElement([faker.string.alpha({ length: { min: 10, max: 20 } }), undefined]),
    state: faker.helpers.arrayElement([faker.string.alpha({ length: { min: 10, max: 20 } }), undefined]),
    zip: faker.helpers.arrayElement([faker.string.alpha({ length: { min: 10, max: 20 } }), undefined]),
    country: faker.helpers.arrayElement([faker.string.alpha({ length: { min: 10, max: 20 } }), undefined]),
  },
  phone: faker.string.alpha({ length: { min: 10, max: 20 } }),
  website: faker.string.alpha({ length: { min: 10, max: 20 } }),
  gender: faker.helpers.arrayElement(['male', 'female', 'other'] as const),
  roles: {
    role: faker.helpers.arrayElement(['user', 'admin', 'superadmin', 'sale', 'marketing'] as const),
    permissions_groups: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() =>
      faker.string.alpha({ length: { min: 10, max: 20 } }),
    ),
    permissions: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() =>
      faker.string.alpha({ length: { min: 10, max: 20 } }),
    ),
  },
  status: faker.helpers.arrayElement(['active', 'inactive', 'pending'] as const),
  created_at: `${faker.date.past().toISOString().split('.')[0]}Z`,
  ...overrideResponse,
})

export const getGetMeResponseMock401 = (overrideResponse: Partial<GetMe401> = {}): GetMe401 => ({
  message: faker.helpers.arrayElement([faker.string.alpha({ length: { min: 10, max: 20 } }), undefined]),
  ...overrideResponse,
})

export const getGetMeResponseMock500 = (overrideResponse: Partial<GetMe500> = {}): GetMe500 => ({
  message: faker.helpers.arrayElement([faker.string.alpha({ length: { min: 10, max: 20 } }), undefined]),
  ...overrideResponse,
})

export const getPostLogoutResponseMock = (overrideResponse: Partial<PostLogout200> = {}): PostLogout200 => ({
  message: faker.helpers.arrayElement([faker.string.alpha({ length: { min: 10, max: 20 } }), undefined]),
  ...overrideResponse,
})

export const getPostLogoutResponseMock200 = (overrideResponse: Partial<PostLogout200> = {}): PostLogout200 => ({
  message: faker.helpers.arrayElement([faker.string.alpha({ length: { min: 10, max: 20 } }), undefined]),
  ...overrideResponse,
})

export const getPostLogoutResponseMock401 = (overrideResponse: Partial<PostLogout401> = {}): PostLogout401 => ({
  message: faker.helpers.arrayElement([faker.string.alpha({ length: { min: 10, max: 20 } }), undefined]),
  ...overrideResponse,
})

export const getPostLoginMockHandler = (
  overrideResponse?:
    | PostLogin200
    | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<PostLogin200> | PostLogin200),
) => {
  return http.post('*/login', async info => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getPostLoginResponseMock(),
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    )
  })
}

export const getPostLoginMockHandler200 = (
  overrideResponse?:
    | PostLogin200
    | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<PostLogin200> | PostLogin200),
) => {
  return http.post('*/login', async info => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getPostLoginResponseMock200(),
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    )
  })
}

export const getPostLoginMockHandler401 = (
  overrideResponse?:
    | PostLogin401
    | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<PostLogin401> | PostLogin401),
) => {
  return http.post('*/login', async info => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getPostLoginResponseMock401(),
      ),
      { status: 401, headers: { 'Content-Type': 'application/json' } },
    )
  })
}

export const getPostLoginMockHandler500 = (
  overrideResponse?:
    | PostLogin500
    | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<PostLogin500> | PostLogin500),
) => {
  return http.post('*/login', async info => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getPostLoginResponseMock500(),
      ),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    )
  })
}

export const getGetMeMockHandler = (
  overrideResponse?: User | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<User> | User),
) => {
  return http.get('*/me', async info => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getGetMeResponseMock(),
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    )
  })
}

export const getGetMeMockHandler200 = (
  overrideResponse?: User | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<User> | User),
) => {
  return http.get('*/me', async info => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getGetMeResponseMock200(),
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    )
  })
}

export const getGetMeMockHandler401 = (
  overrideResponse?: GetMe401 | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetMe401> | GetMe401),
) => {
  return http.get('*/me', async info => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getGetMeResponseMock401(),
      ),
      { status: 401, headers: { 'Content-Type': 'application/json' } },
    )
  })
}

export const getGetMeMockHandler500 = (
  overrideResponse?: GetMe500 | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GetMe500> | GetMe500),
) => {
  return http.get('*/me', async info => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getGetMeResponseMock500(),
      ),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    )
  })
}

export const getPostLogoutMockHandler = (
  overrideResponse?:
    | PostLogout200
    | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<PostLogout200> | PostLogout200),
) => {
  return http.post('*/logout', async info => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getPostLogoutResponseMock(),
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    )
  })
}

export const getPostLogoutMockHandler200 = (
  overrideResponse?:
    | PostLogout200
    | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<PostLogout200> | PostLogout200),
) => {
  return http.post('*/logout', async info => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getPostLogoutResponseMock200(),
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    )
  })
}

export const getPostLogoutMockHandler401 = (
  overrideResponse?:
    | PostLogout401
    | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<PostLogout401> | PostLogout401),
) => {
  return http.post('*/logout', async info => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getPostLogoutResponseMock401(),
      ),
      { status: 401, headers: { 'Content-Type': 'application/json' } },
    )
  })
}
export const getAuthMock = () => [getPostLoginMockHandler(), getGetMeMockHandler(), getPostLogoutMockHandler()]
