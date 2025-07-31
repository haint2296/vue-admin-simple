import { ref } from 'vue'

import { defineStore } from 'pinia'

import type { CloseLoadingCallback } from '../types'

export const useLoadingStore = defineStore('loading-store', () => {
  const isLoading = ref(true)

  const openLoading = () => {
    isLoading.value = true
  }

  const closeLoading = (callback?: CloseLoadingCallback) => {
    callback?.()
    isLoading.value = false
  }

  const toggleLoading = () => {
    isLoading.value = !isLoading.value
  }

  return {
    isLoading,
    openLoading,
    closeLoading,
    toggleLoading,
  }
})
