import { VueQueryPlugin } from '@tanstack/vue-query'
import Ripple from 'primevue/ripple'
import { createApp } from 'vue'
import App from './app.vue'
import { bootstrap } from './bootstrap'

//** router */
import router from './providers/routers'
//** css */
import '@/shared/styles/main.css'
import '@/shared/styles/sidebar.css'
import 'primeicons/primeicons.css'

import Aura from '@primeuix/themes/aura'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import StyleClass from 'primevue/styleclass'

bootstrap().then(() => {
  const app = createApp(App)
  const pinia = createPinia()
  app
    .use(pinia)
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
  app.directive('ripple', Ripple)
  app.directive('styleclass', StyleClass)
  app.mount('#ctx-app')
})
