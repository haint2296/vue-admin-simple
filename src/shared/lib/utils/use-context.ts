import { inject } from 'vue'

type ContextOptions = {
  message?: string
}

export function useContext<T>(context: symbol, options?: ContextOptions): T | null {
  const injected = inject(context, null)
  if (!injected) {
    throw new Error(options?.message || 'Context must be used within a ContextProvider.')
  }
  return injected
}
