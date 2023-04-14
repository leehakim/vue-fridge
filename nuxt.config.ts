import { NuxtConfig } from '@nuxt/types';

const defineNuxtConfig: NuxtConfig = {
    buildModules: ['@nuxtjs/style-resources'],
    styleResources: {
        scss: ['~/assets/style/_functions.scss','~/assets/style/common.scss',],
    },
    // Nuxt.js 2.9 이전 버전에서 사용하던 옵션들
    css:  ['~/assets/style/_functions.scss','~/assets/style/common.scss',],
    // plugins: ['~/plugins/axios'],
    // …
};

export default defineNuxtConfig;
