import { defineConfig } from 'vitest/config'

export default defineConfig({
  optimizeDeps: {
    entries: [],
  },
  test: {
    globals: true,
    isolate: false,
    setupFiles: [],
    include: ['./src/**.test.ts', './src/**.test.tsx'],
    exclude: ['./dist', './tsc']
  }
});