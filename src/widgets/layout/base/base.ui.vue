<script setup lang="ts">
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

import { useBreadcrumbStore } from '@/features/breadcrumb/breadcrumb.store'
import { useThemeStore } from '@/features/theme/switch-theme/store'
import { Sidebar } from '@/widgets/sidebar'

import Header from '@/widgets/header/header.ui.vue'

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
  <div class="flex h-screen w-full overflow-hidden">
    <Sidebar />
    <main class="bg-background relative flex w-full flex-1 flex-col overflow-y-auto">
      <Header />
      <div class="mt-4 px-2">
        <router-view v-slot="{ Component, route }">
          <keep-alive
            :include="['DashboardPage', 'ProductListPage']"
            :max="10"
          >
            <component
              v-if="route.meta.keepAlive"
              :is="Component"
            />
            <component
              v-else
              :is="Component"
            />
          </keep-alive>
        </router-view>
      </div>
    </main>
  </div>
</template>
