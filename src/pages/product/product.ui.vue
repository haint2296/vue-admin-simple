<template>
  <div>
    <section>Products</section>
    {{ products?.length }}
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'

import { useGetProducts } from '@/shared/services/api'
import { useLoadingStore } from '@/shared/ui/app/loading/store'

/**
 * loadingStore
 */
const loadingStore = useLoadingStore()

/**
 * load products
 */
const { data: products, isFetching } = useGetProducts()

/**
 * watchEffect to toggle loading
 */
watchEffect(() => {
  if (!isFetching.value) {
    loadingStore.closeLoading()
    return
  }

  loadingStore.openLoading()
})
</script>
