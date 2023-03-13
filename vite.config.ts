import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import generateSitemap from 'vite-ssg-sitemap'
import type { ViteSSGOptions } from 'vite-ssg'
import path from 'path'

const APP_URL_BASE = 'https://mikezotov.dev'

const ssgOptions: ViteSSGOptions = {
  concurrency: 1, // If pages are rendered in a parallel, route locales mixes and causes an error
  onFinished () {
    generateSitemap({
      hostname: APP_URL_BASE,
      changefreq: 'weekly',
      priority: 0.8
    })
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  ssgOptions,
  server: {
    port: 8082
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
