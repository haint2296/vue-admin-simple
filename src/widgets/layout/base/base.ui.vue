<script setup lang="ts">
import { SidebarProvider } from '@/widgets/sidebar'
defineOptions({
  name: 'BaseLayout',
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
