export type AuthStore = {
  isAuthenticated: boolean
  user: {
    name: string
    email: string
    roles: {
      role: 'user' | 'admin' | 'superadmin' | 'sale' | 'marketing' | 'finance' | 'it' | 'hr' | 'other'
      permissions: string[]
      permissions_groups: string[]
    }
    avatar?: string
    created_at?: string
    last_login_at?: string
  }
}
