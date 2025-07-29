<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-2 p-2">
    <ul class="flex w-full min-w-0 flex-col gap-1">
      <li class="relative">
        <button class="flex w-full items-center gap-2 overflow-hidden p-2 group-data-[collapsible=icon]:p-1!">
          <img
            src="/logo.png"
            alt="logo"
            width="24"
            height="24"
            class="h-6 w-6 flex-shrink-0 text-left transition-all duration-150"
          />
          <span class="truncate text-left text-sm font-medium">Vue Admin Simple</span>
        </button>
      </li>
    </ul>
  </div>
</template>
