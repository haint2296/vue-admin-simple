import { z } from 'zod'

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string().optional(),
  address: z
    .object({
      street: z.string().optional(),
      city: z.string().optional(),
      state: z.string().optional(),
      zip: z.string().optional(),
      country: z.string().optional(),
    })
    .optional(),
  phone: z.string().optional(),
  website: z.string().optional(),
  gender: z.string().optional(),
  roles: z.object({
    role: z.string(),
    permissions: z.array(z.string()).optional(),
    permissions_groups: z.array(z.string()).optional(),
  }),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
})

type User = z.infer<typeof UserSchema>

export { UserSchema }
export type { User }
