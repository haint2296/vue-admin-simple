<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
// const router = useRouter()
// const sessionStore = useSessionStore()

// onMounted(async () => {
//   if (!sessionStore.isLoggedIn) {
//     const { data } = useGetMe()
//     if (data.value) {
//       sessionStore.setSessionUser(mapUserFromMeDto(data.value))
//     }
//   }

//   // Bắt buộc phải check sau khi session đã được set
//   if (route.meta.requiresAuth && !sessionStore.isLoggedIn) {
//     router.push({ name: loginPath.base.name })
//   }

//   console.log('route', route)
//   console.log('route.meta', route.meta.requiresAuth)
// })

const layout = computed(() => {
  if (route.meta.requiresAuth) {
    return 'auth' as const
  }

  return 'default' as const
})
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
