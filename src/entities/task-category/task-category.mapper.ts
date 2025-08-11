import type { TaskCategoryDto } from './task-category.contract'
import type { TaskCategory } from './task-category.type'

function mapTaskCategoryListFromDto(taskCategoryDto: TaskCategoryDto[]): TaskCategory[] {
  return taskCategoryDto.map(taskCategory => ({
    id: taskCategory.id,
    name: taskCategory.name,
  }))
}

export { mapTaskCategoryListFromDto }
