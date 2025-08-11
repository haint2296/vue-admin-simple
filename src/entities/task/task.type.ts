import { z } from 'zod'

import type { TaskSchema } from './task.schema'

type Task = z.infer<typeof TaskSchema>

export type { Task }
