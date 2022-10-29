const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
const path = require('path');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'portfolio',
    projectName: 'main',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    resolve: {
      alias: {
        '@app': path.resolve(__dirname, 'src/'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@core': path.resolve(__dirname, 'src/core'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@pages': path.resolve(__dirname, 'src/pages'),
      },
    },
  });
};
