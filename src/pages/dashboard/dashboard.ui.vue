<template>
  <section>
    <h1>Dashboard</h1>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import { useLoadingStore } from '@/features/loading'

defineOptions({
  name: 'DashboardPage',
  meta: {
    keepAlive: true,
  },
})

const loadingStore = useLoadingStore()

onMounted(() => {
  loadingStore.closeLoading()
})
</script>
