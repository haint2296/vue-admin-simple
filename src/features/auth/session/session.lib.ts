import { useGetMe } from '@/shared/services/api'

import { mapUserFromMeDto } from '@/entities/user'
import { useSessionStore } from './session.store'

const getCurrentUser = () => {
  const sessionStore = useSessionStore()
  const { data } = useGetMe()

  if (data?.value) {
    sessionStore.setSessionUser(mapUserFromMeDto(data.value))
  } else {
    sessionStore.setSessionUser(null)
  }

  return sessionStore.user
}

export { getCurrentUser }
