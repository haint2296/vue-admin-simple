import type { Component } from 'vue'

type SidebarProviderProps = {
  modelValue: boolean
}

type SidebarContentMenuItemProps = {
  title: string
  icon?: Component
  items?: Array<SidebarContentMenuItemProps> | undefined
  url?: string
  keyPanel?: string
}

type Menu = {
  title: string
  icon?: Component
  url?: string
  keyPanel?: string
}

type SidebarContentMenuItem = Menu & {
  subMenus?: Array<Menu> | undefined
}

type SidebarContent = {
  group: string
  menus: Array<SidebarContentMenuItem>
}

export type {
  SidebarContent,
  SidebarContentMenuItem,
  SidebarContentMenuItemProps,
  SidebarProviderProps,
}
