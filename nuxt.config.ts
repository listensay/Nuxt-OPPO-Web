import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['normalize.css', '@/assets/css/global.less', '@/assets/cus-font/iconfont.css'],
  build: {
    // 该文件需要进行Babel转义
    transpile: ['element-plus/es']
  },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "~/assets/css/variables.less";'
        }
      }
    },
    plugins: [eslintPlugin()]
  },
  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt',
    // Simple usage
    '@nuxtjs/eslint-module',
    // With options
    ['@nuxtjs/eslint-module']
  ]
})
