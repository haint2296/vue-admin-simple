<script setup lang="ts">
import { provideSidebarMenuContext } from '../../context'

provideSidebarMenuContext()
</script>

<template>
  <ul class="flex min-w-0 flex-col gap-1">
    <slot />
  </ul>
</template>
