<script setup lang="ts">
import { Breadcrumb } from 'primevue'
import { useBreadcrumbStore } from './breadcrumb.store'

import { ChevronRight } from 'lucide-vue-next'
import { mapBreadcrumb } from './breadcrumb.lib'
import { BreadcrumbItem } from './comps'

const breadcrumbStore = useBreadcrumbStore()
</script>

<template>
  <Breadcrumb
    :model="breadcrumbStore.breadcrumbs"
    class="!m-0 !p-0"
  >
    <template #item="{ item: breadcrumb }">
      <BreadcrumbItem :breadcrumb="mapBreadcrumb(breadcrumb)" />
    </template>
    <template #separator>
      <ChevronRight class="text-muted-foreground mt-1 size-5" />
    </template>
  </Breadcrumb>
</template>
