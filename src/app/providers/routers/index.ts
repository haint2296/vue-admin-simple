import { createRouter, createWebHistory } from 'vue-router'

import { loginPath } from '@/shared/router'
import { routes } from './routers.routes'

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
 * @param to - The route to navigate to
 * @param _from - Not used: The route from which the user is navigating
 * @param next - The function to call to navigate to the next route
 */
router.beforeEach((to, _from, next) => {
  const isAuthenticated = localStorage.getItem('token')
  if (to.meta.requiresAuth && !isAuthenticated) {
    /**
     * Redirect to the login page if the user is not authenticated
     */
    next({ name: loginPath.base.name })
  } else {
    // If the user is authenticated, continue to the next route
    next()
  }
})

export default router
