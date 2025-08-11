import { Bell, Home, ListCheck, Palette, Settings, ShoppingBasket, UserRoundCog, Users } from 'lucide-vue-next'

const sidebarContents = [
  {
    group: 'Platform',
    menus: [
      {
        title: 'Dashboard',
        icon: Home,
      },
      {
        title: 'Customers',
        icon: Users,
        items: [
          {
            title: 'List customers',
          },
          {
            title: 'Create new customer',
          },
          {
            title: 'Reports',
          },
        ],
      },
      {
        title: 'Products',
        icon: ShoppingBasket,
      },
      {
        title: 'Tasks',
        icon: ListCheck,
        items: [
          {
            title: 'Tasks',
            url: '/tasks',
          },
          {
            title: 'Categories',
            url: '/tasks/categories',
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
