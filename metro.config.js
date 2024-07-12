/**
 * Metro configuration for React Native
 * https://facebook.github.io/metro/docs/configuration
 *
 * @format
 */

module.exports = {
  resolver: {
    assetExts: ['txt', 'png', 'jpg', 'jpeg', 'gif', 'svg', 'json'],
  },
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  serializer: {
    getModulesRunBeforeMainModule: () => [
      require.resolve('react-native/Libraries/Core/InitializeCore'),
    ],
    getPolyfills: () => require('react-native/rn-get-polyfills')(),
  },
  server: {
    enhanceMiddleware: (middleware) => {
      return (req, res, next) => {
        if (req.url === '/') {
          req.url = '/index.html';
        }
        return middleware(req, res, next);
      };
    },
  },
};
