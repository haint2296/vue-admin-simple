<script setup lang="ts">
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

import { useBreadcrumbStore } from '@/features/breadcrumb/breadcrumb.store'
import { useThemeStore } from '@/features/theme/switch-theme/store'
import { SidebarProvider } from '@/widgets/sidebar'

defineOptions({
  name: 'BaseLayout',
})

const breadcrumbStore = useBreadcrumbStore()
const themeStore = useThemeStore()

breadcrumbStore.setBreadcrumbFromRoute(useRoute())

watchEffect(() => {
  if (themeStore.isDarkMode) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
  <div>
    <SidebarProvider>
      <!-- View  slot -->
      <router-view />
    </SidebarProvider>
  </div>
</template>
