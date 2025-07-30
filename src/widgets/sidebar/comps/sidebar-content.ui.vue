<script setup lang="ts">
import { Home, ShoppingCart } from 'lucide-vue-next'
import SidebarContentGroup from './sidebar-content-group.ui.vue'
import SidebarContentMenuItem from './sidebar-content-menu-item.ui.vue'
import SidebarContentMenu from './sidebar-content-menu.ui.vue'
</script>

<template>
  <div class="flex flex-col gap-2 p-2">
    <div class="relative mb-4 flex w-full min-w-0 flex-col gap-2">
      <SidebarContentGroup
        title="Platform"
        class="group-data-[collapsible=icon]:hidden"
      />
      <SidebarContentMenu>
        <SidebarContentMenuItem
          title="Home"
          :icon="Home"
        />
        <SidebarContentMenuItem
          title="Customers"
          :icon="Home"
          :subItems="[
            {
              title: 'Settings reports',
            },
            {
              title: 'Events reports',
            },
            {
              title: 'Users reports',
            },
          ]"
        />
        <SidebarContentMenuItem
          title="Products"
          :icon="ShoppingCart"
        />
        <SidebarContentMenuItem
          title="Reports"
          :dropdown="true"
          :icon="Home"
          :subItems="[
            {
              title: 'Settings reports',
            },
            {
              title: 'Events reports',
            },
            {
              title: 'Users reports',
            },
          ]"
        />
      </SidebarContentMenu>
    </div>
  </div>
</template>

<style scoped></style>
