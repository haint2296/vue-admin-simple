<script setup lang="ts">
import { ProgressSpinner } from 'primevue'

import { useLoadingStore } from '../store'

const loadingStore = useLoadingStore()
</script>

<template>
  <div
    v-if="loadingStore.isLoading"
    class="fixed top-0 left-0 z-[999] flex h-full w-full items-center justify-center bg-white/30 backdrop-blur-[2px]"
  >
    <div class="flex flex-col items-center gap-2">
      <ProgressSpinner
        class="mb-4 !h-5 !w-5"
        strokeWidth="8"
        fill="transparent"
        animationDuration=".5s"
        aria-label="Custom ProgressSpinner"
      />
    </div>
  </div>
</template>
