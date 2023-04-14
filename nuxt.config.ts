import { NuxtConfig } from '@nuxt/types';

const defineNuxtConfig: NuxtConfig = {
//   buildModules: ['@nuxtjs/style-resources'],
//   styleResources: {
//     scss: ['~/assets/style/functions.scss'],
//   },
  // Nuxt.js 2.9 이전 버전에서 사용하던 옵션들
  css: ['~/assets/style/fonts.scss', '~/assets/style/common.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/functions.scss";',
        },
      },
    },
  },
};

export default defineNuxtConfig;
