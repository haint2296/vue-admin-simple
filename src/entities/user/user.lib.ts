import { UserSchema } from './user.model'

import type { User } from '@/shared/services/api'

function mapUserFromMeDto(dto: User) {
  try {
    return UserSchema.parse({
      id: dto.id,
      name: dto.name,
      email: dto.email,
      address: dto.address,
      phone: dto.phone,
      website: dto.website,
      gender: dto.gender,
      roles: dto.roles,
      status: dto.status,
      createdAt: dto.created_at,
    })
  } catch (error) {
    console.error(error)
    return null
  }
}

export { mapUserFromMeDto }
