import type { MenuItem } from 'primevue/menuitem'
import type { Component } from 'vue'

type Breadcrumbs = MenuItem & {
  label: string
  to: string
  iconComps?: Component
}

export type { Breadcrumbs }
