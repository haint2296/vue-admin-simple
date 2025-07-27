import { defineStore } from 'pinia'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const MOBILE_BREAKPOINT = 768

export const useMobileStore = defineStore('mobile-store', () => {
  const isMobile = ref(false)

  let mediaQuery: MediaQueryList

  const update = () => {
    isMobile.value = window.innerWidth < MOBILE_BREAKPOINT
  }

  onMounted(() => {
    mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    update()
    mediaQuery.addEventListener('change', update)
  })

  onUnmounted(() => {
    mediaQuery?.removeEventListener('change', update)
  })

  const isMobileComputed = computed(() => isMobile.value)

  return { isMobile: isMobileComputed }
})
