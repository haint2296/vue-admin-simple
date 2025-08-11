<script setup lang="ts">
import { computed, watchEffect } from 'vue'

import { useLoadingStore } from '@/features/loading'
import { useGetProducts } from '@/shared/services/api'

import { ProductManagerTable, mapProductsFromDto } from '@/features/products/manager-table'

/**
 * loadingStore
 */
const loadingStore = useLoadingStore()

/**
 * load products
 */
const { data: rawProducts, isFetching } = useGetProducts()

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
  <section class="mt-4 flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <span class="text-muted-foreground text-sm">Overview</span>
      <h1 class="text-2xl font-bold">Products</h1>
    </div>
    <ProductManagerTable :products="products" />
  </section>
</template>
