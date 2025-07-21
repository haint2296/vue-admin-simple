import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'
import App from './app.vue'
import { bootstrap } from './bootstrap'

//** router */
import router from './providers/routers'
//** css */
import '@/shared/styles/main.css'

bootstrap().then(() => {
  createApp(App).use(router).use(VueQueryPlugin).mount('#ctx-app')
})
