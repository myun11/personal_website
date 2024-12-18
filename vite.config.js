import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "https://michaelyun.dev/",
  base:"/personal_website",
  build: {
    outDir: 'dist'
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})
