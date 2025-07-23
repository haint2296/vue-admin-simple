<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const layout = computed(() => {
  if (route.meta.layout) {
    return route.meta.layout
  }

  return 'default'
})
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
