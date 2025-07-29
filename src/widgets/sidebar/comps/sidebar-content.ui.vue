<script setup lang="ts">
import { ChevronRight, Home, ShoppingCart, SquareDashed } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col gap-2 p-2">
    <div class="relative flex w-full min-w-0 flex-col gap-2">
      <div class="text-muted-foreground flex w-full items-center gap-2 text-xs group-data-[collapsible=icon]:hidden">
        Platform
      </div>
      <ul class="flex min-w-0 flex-col gap-1">
        <li class="relative">
          <button class="flex w-full items-center gap-2 overflow-hidden p-2 text-sm">
            <Home class="h-4 w-4 flex-shrink-0" />
            <span class="text-left">Home</span>
            <ChevronRight class="ml-auto h-4 w-4" />
          </button>
        </li>
        <li class="w-min-0 w-full truncate">
          <button class="flex w-full items-center justify-between gap-2 p-2 text-sm">
            <ShoppingCart class="h-4 w-4 flex-shrink-0" />
            <span class="flex-1 text-left">Products</span>
            <ChevronRight class="ml-auto h-4 w-4" />
          </button>
        </li>
        <li class="w-min-0 w-full truncate">
          <button class="flex w-full items-center justify-between gap-2 p-2 text-sm">
            <SquareDashed class="h-4 w-4 flex-shrink-0" />
            <span class="flex-1 text-left">Orders</span>
            <ChevronRight class="ml-auto h-4 w-4" />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
