<script setup lang="ts">
import { sidebarContents } from '../../model/menu'
import SidebarContentGroup from './sidebar-content-group.ui.vue'
import SidebarContentMenuItem from './sidebar-content-menu-item.ui.vue'
import SidebarContentMenu from './sidebar-content-menu.ui.vue'
</script>

<template>
  <div class="flex flex-col gap-2 p-2">
    <div
      class="relative mb-4 flex w-full min-w-0 flex-col gap-2 group-data-[collapsible=icon]:mb-0!"
      v-for="content in sidebarContents"
      :key="content.group"
    >
      <SidebarContentGroup
        :title="content.group"
        class="group-data-[collapsible=icon]:hidden"
        v-if="!!content.group"
      />

      <SidebarContentMenu>
        <SidebarContentMenuItem
          v-for="menu in content.menus"
          :key="menu.title"
          :title="menu.title"
          :icon="menu.icon"
          :items="menu.items"
        />
      </SidebarContentMenu>
    </div>
  </div>
</template>
