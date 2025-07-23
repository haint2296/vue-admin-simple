// import { useAuthStore } from '@/features/auth'
import { homePath } from '@/shared/router'
import { usePostLogin } from '@/shared/services/api'
import { useRouter } from 'vue-router'

function useAuthLogin() {
  const router = useRouter()
  // const authStore = useAuthStore()
  const { mutate: login, isPending } = usePostLogin({
    mutation: {
      onSuccess: () => {
        // authStore.isAuthenticated = true
        router.push(homePath.base.path)
      },
    },
  })

  return { login, isPending }
}

export { useAuthLogin }
