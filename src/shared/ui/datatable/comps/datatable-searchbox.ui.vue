<script setup lang="ts">
import { ref } from 'vue'

import { InputText } from 'primevue/'

const search = ref('')
</script>

<template>
  <InputText
    v-model="search"
    placeholder="Search"
  />
</template>
