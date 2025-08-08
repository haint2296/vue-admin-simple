<script setup lang="ts">
import { InputText } from 'primevue'

interface Props {
  onSearch: (value: string) => void
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  onSearch: () => {},
  placeholder: 'Search...',
})

const model = defineModel<string>('search')
</script>

<template>
  <InputText
    v-model="model"
    size="small"
    :placeholder="props.placeholder"
    @update:modelValue="value => props.onSearch(value ?? '')"
  />
</template>
