import colors from "vuetify/es5/util/colors";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - app",
    title: "app",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    /*
     * もし既に `modules` という項目が定義されていたら、その中の一番下に
     * この行から「*ここまで」と示した行までの部分
     * を追加してください
     */
    [
      "@nuxtjs/firebase",
      {
        // ここに構成スニペットの中身をペースト
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        config: {
          apiKey: "AIzaSyDIjy_QrFlmFMOqEYHlBLkqJgUD7wltClk",
          authDomain: "techpit-todoapp-516b7.firebaseapp.com",
          projectId: "techpit-todoapp-516b7",
          storageBucket: "techpit-todoapp-516b7.appspot.com",
          messagingSenderId: "543951480346",
          appId: "1:543951480346:web:ce435039af4b8c870693a3",
          measurementId: "G-7JSSKW4G5W",
        },
        // FirestoreとAnalyticsを有効にする
        services: {
          firestore: true,
          analytics: true,
        },
      },
    ],
    // *ここまで
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
