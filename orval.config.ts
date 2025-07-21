import { defineConfig } from 'orval'

export default defineConfig({
  apiAdminSimple: {
    input: './openapi.yaml',
    output: {
      mode: 'tags-split',
      target: './src/shared/services/api/hooks/',
      schemas: './src/shared/services/api/models/',
      client: 'vue-query',
      clean: true,
      headers: true,
      allParamsOptional: true,
      override: {
        mutator: {
          path: './src/shared/lib/axios/index.ts',
          name: 'request',
        },
        query: {
          useQuery: true,
          signal: true,
        },
      },
      mock: {
        type: 'msw',
        delay: 1000,
        generateEachHttpStatus: true,
      },
      prettier: true,
    },
    hooks: {
      afterAllFilesWrite: {
        command: 'prettier --write .',
        injectGeneratedDirsAndFiles: false,
      },
    },
  },
  apiAdminSimpleZod: {
    input: './openapi.yaml',
    output: {
      mode: 'tags-split',
      target: './src/shared/services/api/types',
      client: 'zod',
      fileExtension: '.zod.ts',
      clean: true,
    },
    hooks: {
      afterAllFilesWrite: {
        command: 'prettier --write .',
        injectGeneratedDirsAndFiles: false,
      },
    },
  },
})
