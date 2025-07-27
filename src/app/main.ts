import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'
import App from './app.vue'
import { bootstrap } from './bootstrap'

//** router */
import router from './providers/routers'
//** css */
import '@/shared/styles/main.css'
import '@/shared/styles/sidebar.css'
import 'primeicons/primeicons.css'

import Nora from '@primeuix/themes/nora'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

bootstrap().then(() => {
  const app = createApp(App)
  const pinia = createPinia()
  app
    .use(pinia)
    .use(router)
    .use(VueQueryPlugin)
    .use(PrimeVue, {
      theme: {
        preset: Nora,
        options: {
          darkModeSelector: '.dark',
        },
      },
    })

  app.mount('#ctx-app')
})
