import pluginTs from '@typescript-eslint/eslint-plugin'
import parserTs from '@typescript-eslint/parser'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import vueParser from 'vue-eslint-parser'

export default defineConfig([
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'src/shared/services/api/types/**',
      'src/shared/services/api/hooks/**',
      'src/shared/services/api/models/**',
      'src/shared/services/msw/**',
      'vitest.config.ts',
      'vite-env.d.ts',
      'orval.config.ts',
    ],
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: parserTs,
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
        ecmaVersion: 2020,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      vue: pluginVue,
      '@typescript-eslint': pluginTs,
    },
    rules: {
      ...pluginVue.configs['flat/recommended'].rules,
      ...pluginTs.configs.recommended.rules,
      'vue/attributes-order': ['error', { alphabetical: true }],
    },
  },
])
