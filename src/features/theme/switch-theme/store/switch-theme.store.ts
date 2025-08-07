import { computed, ref, watchEffect } from 'vue'

import { defineStore } from 'pinia'

const useThemeStore = defineStore(
  'theme-store',
  () => {
    const mode = ref<'light' | 'dark'>('light')

    const toggleTheme = () => {
      mode.value = mode.value === 'light' ? 'dark' : 'light'
    }

    const isDarkMode = computed(() => mode.value === 'dark')

    watchEffect(() => {
      document.documentElement.classList.toggle('dark', mode.value === 'dark')
    })

    return {
      mode,
      isDarkMode,
      toggleTheme,
    }
  },
  {
    persist: {
      storage: sessionStorage,
      pick: ['mode'],
    },
  },
)

export { useThemeStore }
