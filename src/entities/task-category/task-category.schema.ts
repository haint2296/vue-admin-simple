import { z } from 'zod'

const TaskCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
})

export { TaskCategorySchema }
