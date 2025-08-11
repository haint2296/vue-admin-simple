<template>
  <section>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <h1 class="text-2xl font-bold">Tasks</h1>
        <span class="text-muted-foreground text-sm">Task manager</span>
      </div>
      <div class="flex flex-col gap-2">
        <TaskManagerTable
          :tasks="tasks || []"
          :loading="isFetching"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { watchEffect } from 'vue'

import { useGetTasksApi } from '@/entities/task'
import { useLoadingStore } from '@/features/loading'

import { TaskManagerTable } from '@/features/tasks/manager'

const loadingStore = useLoadingStore()

const { data: tasks, isFetching } = useGetTasksApi()

watchEffect(() => {
  if (!isFetching.value) {
    loadingStore.closeLoading()
  }
})
</script>
