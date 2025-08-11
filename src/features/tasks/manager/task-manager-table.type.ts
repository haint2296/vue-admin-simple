import type { Task } from '@/entities/task'

type ManagerTableProps = {
  tasks: Task[]
  loading: boolean
}

type ManagerTableColumn = Pick<Task, 'id' | 'title' | 'description' | 'status' | 'priority' | 'createdAt'>

export type { ManagerTableColumn, ManagerTableProps }
