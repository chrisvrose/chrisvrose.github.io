const withPWA = require("next-pwa")({
  dest: "public",
  publicExcludes: ["!static/**/*"],
});

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPWA({
  // default config
  output: "export",
  reactStrictMode: true,
});
