import { fileURIToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    visualizer()
  ],
  resolve: {
    alias: {
      '@': fileURIToPath(new URL('./src', import.meta.url))
    }
  }
})
