const loginPath = {
  base: {
    path: '/login',
    name: 'login-page-route',
    meta: {
      title: 'Sign in',
      requiresAuth: false,
    },
  },
  redirect: {
    path: '/login/redirect',
    name: 'login-page-redirect-route',
    meta: {
      title: 'Sign in',
      requiresAuth: false,
    },
  },
} as const

export { loginPath }
