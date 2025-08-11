<template>
  <section>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <h1 class="text-2xl font-bold">Tasks</h1>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { watchEffect } from 'vue'

import { useGetTasks } from '@/shared/services/api'
import { useLoadingStore } from '@/shared/ui/app/loading'

const loadingStore = useLoadingStore()

const { data: rawTasks, isFetching } = useGetTasks()

watchEffect(() => {
  if (!isFetching.value) {
    loadingStore.closeLoading()

    console.log(rawTasks.value)
  }
})
</script>
