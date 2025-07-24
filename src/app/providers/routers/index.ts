import { createRouter, createWebHistory } from 'vue-router'

import { routes } from './routers.routes'

import { mapUserFromMeDto } from '@/entities/user'
import { useSessionStore } from '@/features/auth'
import { loginPath } from '@/shared/router'
import { getMe } from '@/shared/services/api'

/**
 * @description Create a router with the base URL of the application
 */
const router = createRouter({
  /**
   * @description if vite.config.ts is configured to use a base URL, it will be used here
   * @description Create a router with the base URL of the application
   */
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

/**
 * @description Check if the user is authenticated
 *
 * @param to - The route to navigate to
 * @param _from - Not used: The route from which the user is navigating
 * @param next - The function to call to navigate to the next route
 */
router.beforeEach(async (to, _from, next) => {
  const sessionStore = useSessionStore()

  if (!sessionStore.isLoggedIn) {
    const data = await getMe()

    console.log('data', data)

    if (data) {
      sessionStore.setSessionUser(
        mapUserFromMeDto({
          id: data.id,
          name: data.name,
          email: data.email,
          address: data.address,
          phone: data.phone,
          website: data.website,
          gender: data.gender,
          roles: data.roles,
          status: data.status,
          created_at: data.created_at,
        }),
      )
    }
  }

  if (to.meta.requiresAuth && !sessionStore.isLoggedIn) {
    next({ name: loginPath.base.name, query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router
