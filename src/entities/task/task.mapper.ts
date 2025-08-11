import type { TaskDto } from './task.contract'
import type { Task } from './task.type'

function mapTaskListFromDto(taskDto: TaskDto[]): Task[] {
  return taskDto.map(task => ({
    id: task.id,
    title: task.title,
    description: task.description,
    progress_percent: task.progress_percent,
    status: task.status,
    priority: task.priority,
    categoryId: task.category.id,
    dueDate: task.due_date,
    createdAt: task.created_at,
    updatedAt: task.updated_at,
  }))
}

export { mapTaskListFromDto }
