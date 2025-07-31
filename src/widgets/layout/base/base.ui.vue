<script setup lang="ts">
import { SidebarProvider } from '@/widgets/sidebar'
defineOptions({
  name: 'BaseLayout',
})
</script>

<template>
  <SidebarProvider>
    <router-view />
  </SidebarProvider>
</template>
