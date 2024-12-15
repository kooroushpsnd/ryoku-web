const { defineConfig } = require('@vue/cli-service');
const fs = require("fs")

module.exports = defineConfig({
  css: {
    extract: true, // Extract CSS into separate files in production
  },
  transpileDependencies: true,

  devServer: {
    https: {
      key: fs.readFileSync('./ssl/rioku_origin.key'),  // Path to your private key
      cert: fs.readFileSync('./ssl/rioku_origin.crt'), // Path to your certificate
    },
    client: {
      logging: 'none', // Suppresses any client-side logging
      overlay: false,  // Disables the full-screen overlay on errors
    },
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: 'all'
  },

  pluginOptions: {
    vuetify: {
      // Vuetify plugin options can go here
    },
  },
});

