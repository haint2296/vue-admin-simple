import type { SidebarContent } from '../types'

import { customersPath, dashboardPath, productPath, taskPath } from '@/shared/router'

import {
  Bell,
  Home,
  ListCheck,
  Palette,
  Settings,
  ShoppingBasket,
  UserRoundCog,
  Users,
} from 'lucide-vue-next'

const sidebarContents: Array<SidebarContent> = [
  {
    group: 'Platform',
    menus: [
      {
        title: 'Dashboard',
        icon: Home,
        url: dashboardPath.base.path,
      },
      {
        title: 'Customers',
        icon: Users,
        url: customersPath.base.path,
        subMenus: [
          {
            title: 'List customers',
            url: customersPath.base.path,
          },
          {
            title: 'Create new customer',
            url: customersPath.base.path,
          },
          {
            title: 'Reports',
            url: customersPath.base.path,
          },
        ],
      },
      {
        title: 'Products',
        icon: ShoppingBasket,
        url: productPath.base.path,
      },
      {
        title: 'Tasks',
        icon: ListCheck,
        subMenus: [
          {
            title: 'Tasks',
            url: taskPath.base.path,
          },
          {
            title: 'Categories',
            url: taskPath.categories.path,
          },
          {
            title: 'New Task',
            url: taskPath.new.path,
          },
        ],
      },
    ],
  },
  {
    group: 'Notifications',
    menus: [
      {
        title: 'Notifications',
        icon: Bell,
      },
    ],
  },
  {
    group: 'Settings',
    menus: [
      {
        title: 'General',
        icon: Settings,
      },
      {
        title: 'Themes',
        icon: Palette,
      },
      {
        title: 'Account',
        icon: UserRoundCog,
      },
    ],
  },
]

export { sidebarContents }
