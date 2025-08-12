import type { PathType } from './paths.types'

const taskPath: PathType = {
  base: {
    path: '/tasks',
    name: 'task-page-route',
    meta: {
      title: 'Tasks',
      requiresAuth: true,
    },
  },
  new: {
    path: '/tasks/new',
    name: 'task-new-page-route',
    meta: {
      title: 'New Task',
      requiresAuth: true,
    },
  },
  slug: {
    path: '/tasks/:slug',
    name: 'task-slug-page-route',
    meta: {
      title: 'Task',
      requiresAuth: true,
    },
  },
  categories: {
    path: '/tasks/categories',
    name: 'task-categories-page-route',
    meta: {
      title: 'Task Categories',
      requiresAuth: true,
    },
  },
} as const

export { taskPath }
