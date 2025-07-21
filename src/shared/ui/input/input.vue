<template>
  <input
    v-bind="$attrs"
    v-model="model"
    :placeholder="props.placeholder"
    :type="props.type"
    :name="props.name"
    :class="
      cn(
        'transition-all duration-200',
        'text-base shadow-xs md:text-sm',
        'selection:bg-primary bg-transparent',
        'px-3 py-1',
        'rounded-md border border-[var(--input)]',
        'outline-none focus-visible:ring-[2px] focus-visible:ring-[var(--primary)]',
        'h-9 w-full max-w-xs min-w-0',
        props.disabled && 'cursor-not-allowed opacity-50',
      )
    "
    :autocomplete="props.autocomplete"
    :disabled="props.disabled"
  />
</template>

<script setup lang="ts">
import { cn } from '@/shared/lib/utils'
import { type InputProps } from './input.types'

const model = defineModel<string>({ required: true })

const props = withDefaults(defineProps<InputProps>(), {
  placeholder: '',
  type: 'text',
  autocomplete: 'off',
  disabled: false,
})
</script>
