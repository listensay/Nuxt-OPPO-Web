// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    // 该文件需要进行Babel转义
    transpile: ['element-plus/es']
  },
  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt',
    // Simple usage
    '@nuxtjs/eslint-module',
    // With options
    ['@nuxtjs/eslint-module', { /* module options */ }]
  ]
})
