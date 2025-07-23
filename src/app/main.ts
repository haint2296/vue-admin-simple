import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'
import App from './app.vue'
import { bootstrap } from './bootstrap'

//** router */
import router from './providers/routers'
//** css */
import '@/shared/styles/main.css'
import 'primeicons/primeicons.css'

import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'

bootstrap().then(() => {
  const app = createApp(App)
  app
    .use(router)
    .use(VueQueryPlugin)
    .use(PrimeVue, {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark',
        },
      },
    })

  app.mount('#ctx-app')
})
