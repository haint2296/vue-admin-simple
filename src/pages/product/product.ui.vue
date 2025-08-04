<script setup lang="ts">
import { watchEffect } from 'vue'

// import { DataTable } from '@/shared/ui/datatable'

// import { columnDef } from './product.columns'

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

  loadingStore.loading()
})
</script>

<template>
  <div>
    <section>Products</section>
    {{ products?.length }}
    <!-- <DataTable
      :data="products ?? []"
      :columns="columnDef"
    /> -->
  </div>
</template>
