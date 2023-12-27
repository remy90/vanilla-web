import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  assetsInclude: ['**/*.html'],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})
