import { NuxtConfig } from "@nuxt/types";
import { createWebHistory, createMemoryHistory } from "vue-router";

const defineNuxtConfig: NuxtConfig = {
  css: ["~/assets/style/fonts.scss", "~/assets/style/common.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/functions.scss";',
        },
      },
    },
  },
  router: {
    history: process.client ? createWebHistory() : createMemoryHistory(),
    routes: [],
    extendRoutes(routes) {
      routes.push({
        name: "index",
        path: "/",
        component: "~/pages/index.vue",
      });
    },
  },
};

export default defineNuxtConfig;
