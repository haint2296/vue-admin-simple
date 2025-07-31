import type { Component } from 'vue'

type SidebarProviderProps = {
  modelValue: boolean
}

type SidebarContentMenuItemProps = {
  title: string
  icon?: Component
  items?: Array<SidebarContentMenuItemProps> | undefined
}

export type { SidebarContentMenuItemProps, SidebarProviderProps }
