<script setup lang="ts">
/**
 * Lucide icons
 */
import { Moon, Sun } from 'lucide-vue-next'
/**
 * Primevue components
 */
import { Button } from 'primevue'
/**
 * Store
 */
import { useThemeStore } from './store'

const themeStore = useThemeStore()
</script>

<template>
  <Button
    @click="themeStore.toggleTheme"
    variant="text"
    class="rounded-full !p-2"
  >
    <Moon
      v-if="themeStore.isDarkMode"
      class="h-4 w-4"
    />
    <Sun
      v-else
      class="h-4 w-4"
    />
  </Button>
</template>
