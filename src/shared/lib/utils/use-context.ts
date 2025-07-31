import { inject } from 'vue'

type ContextOptions = {
  message?: string
}

export function useContext(context: symbol, options?: ContextOptions) {
  const injected = inject(context, null)
  if (!injected) {
    console.error(options?.message || 'Context must be used within a ContextProvider.')

    throw new Error(options?.message || 'Context must be used within a ContextProvider.')
  }
  return injected
}
