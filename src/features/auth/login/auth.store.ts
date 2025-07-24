import { ref } from 'vue'

import { defineStore } from 'pinia'

const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)

  return { isAuthenticated }
})

export { useAuthStore }
