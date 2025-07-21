import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'
import App from './app.vue'
import { bootstrap } from './bootstrap'

//** router */
import router from './providers/routers'
//** css */
import '@/shared/styles/main.css'
import 'primeicons/primeicons.css'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import Button from 'primevue/button'

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

  app.component('Button', Button)

  app.mount('#ctx-app')
})
