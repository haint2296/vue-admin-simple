import { computed, ref } from 'vue'

import type { User } from '@/entities/user'
import { defineStore } from 'pinia'

const useSessionStore = defineStore('session-store', () => {
  const user = ref<User | null>(null)

  const isLoggedIn = computed(() => !!user.value)

  function setSessionUser(newUser: User | null) {
    user.value = newUser
  }

  return { user, isLoggedIn, setSessionUser }
})

export { useSessionStore }
