import { z } from 'zod'

const TaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  progress_percent: z.number().min(0).max(100),
  status: z.enum(['Pending', 'In Progress', 'Cancelled', 'Backlog', 'Todo', 'In Review', 'Completed']),
  priority: z.enum(['Low', 'Medium', 'High']),
  categoryId: z.string(),
  dueDate: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export { TaskSchema }
