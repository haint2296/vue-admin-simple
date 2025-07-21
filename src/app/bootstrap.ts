import { worker } from '@/shared/services/msw/browser'

async function bootstrap() {
  // if (import.meta.env.DEV) {

  const prefix = import.meta.env.DEV ? '' : '/vue-admin-simple'
  await worker.start({
    serviceWorker: {
      url: `${prefix}/mockServiceWorker.js`,
    },
  })
  // }
}

export { bootstrap }
