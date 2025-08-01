<script setup lang="ts">
import { useRoute } from 'vue-router'

import { useBreadcrumbStore } from '@/features/breadcrumb/breadcrumb.store'
import { SidebarProvider } from '@/widgets/sidebar'

defineOptions({
  name: 'BaseLayout',
})

const breadcrumbStore = useBreadcrumbStore()

breadcrumbStore.setBreadcrumbFromRoute(useRoute())
</script>

<template>
  <div>
    <SidebarProvider>
      <!-- View  slot -->
      <router-view />
    </SidebarProvider>
  </div>
</template>
