// next.config.js
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
//const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = withCSS(
  withSass(
    withImages({
      cssLoaderOptions: {
        url: false,
        import: true,
      },
      webpack(config, { webpack }) {
        const { module = {} } = config;

        return {
          ...config,
          module: {
            ...module,
            rules: [
              ...(module.rules || []),
              {
                test: /\.(zip)$/,
                loader: "file-loader",
              },
            ],
          },
        };
      },
    })
  )
);
