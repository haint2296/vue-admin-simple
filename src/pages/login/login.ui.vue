<script setup lang="ts">
import { AuthLoginForm } from '@/features/auth'
import { useLoadingStore } from '@/features/loading'

const loadingStore = useLoadingStore()

loadingStore.closeLoading()
</script>

<template>
  <div class="bg-surface-50 dark:bg-surface-950 min-h-screen px-6 py-20 md:px-12 lg:px-20">
    <AuthLoginForm />
  </div>
</template>
