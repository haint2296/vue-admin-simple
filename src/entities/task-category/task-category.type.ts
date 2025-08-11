import { z } from 'zod'

import type { TaskCategorySchema } from './task-category.schema'

type TaskCategory = z.infer<typeof TaskCategorySchema>

export type { TaskCategory }
