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

export type { SidebarContentMenuItemProps, SidebarProviderProps }
