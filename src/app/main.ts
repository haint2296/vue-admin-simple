import { VueQueryPlugin } from '@tanstack/vue-query'
import Ripple from 'primevue/ripple'
import { createApp } from 'vue'
import App from './app.vue'
import { bootstrap } from './bootstrap'

//** router */
import router from './providers/routers'
//** css */
import '@/shared/styles/main.css'
import 'primeicons/primeicons.css'

import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { appPrimeVuePreset } from './providers/themes'

import StyleClass from 'primevue/styleclass'

import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'

/**
 * store persist
 */
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

/**
 * Bootstrap app with mock data
 */
bootstrap().then(() => {
  const app = createApp(App)
  /**
   * Setup pinia
   */
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)
  /**
   * Setup app
   */
  app
    .use(pinia)
    .use(router)
    .use(VueQueryPlugin, {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 60_000,
            refetchOnWindowFocus: true,
            refetchOnReconnect: true,
            refetchOnMount: 'always',
          },
        },
      },
    })
    .use(PrimeVue, {
      ripple: true,
      theme: {
        preset: appPrimeVuePreset,
        options: {
          darkModeSelector: '.dark',
          cssLayer: false,
        },
      },
    })

  /**
   * Setup app toast from primevue
   */
  app.use(ToastService)
  /**
   * Setup app directive
   */
  app.directive('ripple', Ripple)
  app.directive('styleclass', StyleClass)
  app.directive('tooltip', Tooltip)
  /**
   * Mount app
   */
  app.mount('#ctx-app')
})
