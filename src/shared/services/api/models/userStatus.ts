/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * Admin Simple API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The status of the user
 */
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UserStatus = {
  active: 'active',
  inactive: 'inactive',
  pending: 'pending',
} as const
