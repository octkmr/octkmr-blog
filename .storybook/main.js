const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  "stories": ["../components/**/*.mdx", "../components/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    "@chakra-ui/storybook-addon",
  ],
  features: {
    emotionAlias: false,
  },
  "framework": {
    name: "@storybook/nextjs",
    options: {}
  },
  docs: {
    autodocs: true
  },
  webpackFinal: async (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../');
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
  staticDirs: ["../public"],　//画像読み込み
};