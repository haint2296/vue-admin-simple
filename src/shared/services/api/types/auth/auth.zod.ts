/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * Admin Simple API
 * OpenAPI spec version: 1.0.0
 */
import { z as zod } from 'zod'

/**
 * @summary Login
 */
export const postLoginBody = zod.object({
  email: zod.email().describe("The user's email address"),
  password: zod.string().describe("The user's password"),
})

export const postLoginResponse = zod.object({
  access_token: zod.describe('The access token'),
  refresh_token: zod.describe('The refresh token'),
})

/**
 * @summary Get current user
 */
export const getMeResponse = zod.object({
  id: zod.uuid().describe('The unique identifier for the user'),
  name: zod.string().describe('The name of the user'),
  email: zod.email().describe('The email address of the user'),
  address: zod.object({
    street: zod.string().optional().describe('The street of the user'),
    city: zod.string().optional().describe('The city of the user'),
    state: zod.string().optional().describe('The state of the user'),
    zip: zod.string().optional().describe('The zip code of the user'),
    country: zod.string().optional().describe('The country of the user'),
  }),
  phone: zod.string().describe('The phone number of the user'),
  website: zod.string().describe('The website of the user'),
  gender: zod.enum(['male', 'female', 'other']).describe('The gender of the user'),
  roles: zod.object({
    role: zod.enum(['user', 'admin', 'superadmin', 'sale', 'marketing']).describe('The role of the user'),
    permissions_groups: zod.array(zod.string()).describe('The permissions groups of the user'),
    permissions: zod.array(zod.string()).describe('The permissions of the user'),
  }),
  status: zod.enum(['active', 'inactive', 'pending']).describe('The status of the user'),
  created_at: zod.iso.datetime({}).describe('The date and time the user was created'),
})

/**
 * Logs the user out by clearing the authentication cookies.
 * @summary Logout
 */
export const postLogoutResponse = zod.object({
  message: zod.string().optional(),
})
