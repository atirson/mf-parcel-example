const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',

  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@app': path.resolve(__dirname, '../src/'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@core': path.resolve(__dirname, '../src/core'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@pages': path.resolve(__dirname, '../src/pages'),
    };

    return config;
  },

  core: {
    builder: '@storybook/builder-webpack5',
  },
};
