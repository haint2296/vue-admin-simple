<script setup lang="ts">
import { useSessionStore } from '@/features/auth'
import { Avatar } from 'primevue'

const sessionStore = useSessionStore()
</script>
<template>
  <div class="text-muted-foreground flex flex-row items-center gap-2 p-2 text-sm">
    <Avatar
      label="U"
      size="small"
      class="min-w-[32px] bg-[#ece9fc] text-sm text-[#2a1261]"
      shape="circle"
    />
    <span class="text-muted-foreground truncate text-sm">{{ sessionStore.user?.name }}</span>
  </div>
</template>
