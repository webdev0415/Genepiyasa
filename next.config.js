const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");

module.exports = withCSS(
  withSass(
    withImages({
      distDir: ".next",
      webpack(config, options) {
        return config;
      },
      env: {
        url: "https://hello-world.com",
      },
    })
  )
);
