import { Bell, Home, Palette, Settings, ShoppingCart, UserRoundCog, Users } from 'lucide-vue-next'

const sidebarContents = [
  {
    group: 'Platform',
    menus: [
      {
        title: 'Home',
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
        icon: ShoppingCart,
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
