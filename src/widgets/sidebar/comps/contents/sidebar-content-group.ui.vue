<script setup lang="ts">
const props = withDefaults(defineProps<{ title: string }>(), {
  title: '',
})
</script>

<template>
  <div class="text-muted-foreground flex w-full items-center gap-2 text-xs">
    {{ props.title }}
  </div>
</template>
