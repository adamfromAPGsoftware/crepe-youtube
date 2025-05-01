import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
    port: 8080,
    open: '/test.html'
  },
  build: {
    rollupOptions: {
      input: './test.html'
    }
  }
}) 