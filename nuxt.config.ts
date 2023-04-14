// https://nuxt.com/docs/api/configuration/nuxt-config

// export default defineNuxtConfig({
//   buildModules: ['@nuxtjs/style-resources'],
//   styleResources: {
//     scss: [
//       'assets/style/_functions.scss',
//       'assets/style/_fonts.scss',
//       'assets/style/common.scss',
//     ],
//   },

//   vite: {
//     css: {
//       preprocessorOptions: {
//         scss: {
//           additionalData: '@use "@/assets/_colors.scss" as *;',
//         },
//       },
//     },
//   },
  
// });
import { defineNuxtConfig, NuxtOptionsBuildModules } from '@nuxt/types';

// import { defineNuxtConfig, NuxtOptionsBuildModules } from 'nuxt3';

const buildModules: NuxtOptionsBuildModules[] = ['@nuxtjs/style-resources'];

export default defineNuxtConfig({
  buildModules,
  styleResources: {
    scss: ['~/assets/scss/main.scss'],
  },
  // Nuxt.js 2.9 이전 버전에서 사용하던 옵션들
  css: ['~/assets/css/main.css'],
  plugins: ['~/plugins/axios'],
  // …
});