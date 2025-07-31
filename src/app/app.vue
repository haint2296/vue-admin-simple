<script setup lang="ts">
import { Toast } from 'primevue'

import { Loading } from '@/shared/ui/app/loading'
</script>

<template>
  <div>
    <Toast />
    <router-view />
    <!-- Loading -->
    <Loading />
  </div>
</template>
