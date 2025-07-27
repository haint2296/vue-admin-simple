<script setup lang="ts">
import SidebarInsetA from './sidebar-inset-a.ui.vue'
import Sidebar from './sidebar.ui.vue'
</script>

<template>
  <div class="flex">
    <Sidebar />
    <SidebarInsetA>
      <slot />
    </SidebarInsetA>
  </div>
</template>

<style></style>
