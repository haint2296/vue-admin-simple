<script setup lang="ts">
import { Toast } from 'primevue'

import { Loading } from '@/features/loading'
</script>

<template>
  <div>
    <Toast />
    <router-view />
    <!-- Loading -->
    <Loading />
  </div>
</template>
