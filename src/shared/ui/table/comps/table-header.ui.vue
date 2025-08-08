<script setup lang="ts">
import { cn } from '@/shared/lib/utils'
defineOptions({ inheritAttrs: true })
</script>

<template>
  <thead
    data-slot="table-header"
    :class="cn('[&_tr]:border-b', $attrs.class as string)"
    v-bind="$attrs"
  >
    <slot />
  </thead>
</template>
