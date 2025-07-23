export type PathType = {
  [key: string]: {
    path: string
    name: string
    meta: {
      title: string
      requiresAuth: boolean
    }
  }
}
