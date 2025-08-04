<script setup lang="ts">
import { computed, watchEffect } from 'vue'

import { useGetProducts } from '@/shared/services/api'
import { useLoadingStore } from '@/shared/ui/app/loading/store'

import { ProductManagerTable, mapProductsFromDto } from '@/features/products/manager-table'

/**
 * loadingStore
 */
const loadingStore = useLoadingStore()

/**
 * load products
 */
const { data: rawProducts, isFetching, refetch } = useGetProducts()

const products = computed(() => {
  return mapProductsFromDto(rawProducts.value || [])
})

/**
 * watchEffect to toggle loading
 */
watchEffect(() => {
  if (!isFetching.value) {
    loadingStore.closeLoading()
    return
  }

  loadingStore.loading()
})
</script>

<template>
  <div>
    <section>Products</section>
    <ProductManagerTable :products="products" />
    <button @click="refetch()">Refresh</button>
  </div>
</template>
