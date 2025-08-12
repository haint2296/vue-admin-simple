import { useGetTasks } from '@/shared/services/api'
import { mapTaskListFromDto } from './task.mapper'
import type { Task } from './task.type'

function useGetTasksApi() {
  return useGetTasks<Task[]>({
    query: {
      select: data => mapTaskListFromDto(data),
    },
  })
}

export { useGetTasksApi }
