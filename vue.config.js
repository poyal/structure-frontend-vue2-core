const webpack = require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  publicPath: '/',

  pwa: {
    themeColor:             '#2a2a2e',
    appleMobileWebAppCache: 'yes',
    manifestOptions:        {
      background_color: '#f6f6f6',
      icons:            [
        {
          src:   './img/192.png',
          sizes: '192x192',
          type:  'image/png'
        },
        {
          src:   './img/512.png',
          sizes: '512x512',
          type:  'image/png'
        },
        {
          src:     './img/192.png',
          sizes:   '192x192',
          type:    'image/png',
          purpose: 'maskable'
        },
        {
          src:     './img/512.png',
          sizes:   '512x512',
          type:    'image/png',
          purpose: 'maskable'
        },
        {
          src:   './img/60.png',
          sizes: '60x60',
          type:  'image/png'
        },
        {
          src:   './img/76.png',
          sizes: '76x76',
          type:  'image/png'
        },
        {
          src:   './img/120.png',
          sizes: '120x120',
          type:  'image/png'
        },
        {
          src:   './img/152.png',
          sizes: '152x152',
          type:  'image/png'
        },
        {
          src:   './img/180.png',
          sizes: '180x180',
          type:  'image/png'
        },
        {
          src:   './img/180.png',
          sizes: '180x180',
          type:  'image/png'
        },
        {
          src:   './img/16.png',
          sizes: '16x16',
          type:  'image/png'
        },
        {
          src:   './img/32.png',
          sizes: '32x32',
          type:  'image/png'
        },
        {
          src:   './img/144.png',
          sizes: '144x144',
          type:  'image/png'
        },
        {
          src:   './img/150.png',
          sizes: '150x150',
          type:  'image/png'
        }
      ],
    },
  },

  configureWebpack: (config) => {
    config.entry = ['babel-polyfill', './src/main.ts'];

    if (process.env.VUE_CLI_MODERN_MODE) {
      config.optimization = {
        runtimeChunk: 'single',
        splitChunks:  {
          chunks:             'all',
          maxInitialRequests: Infinity,
          minSize:            120000,
          maxSize:            200000,
          cacheGroups:        {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                return `npm.${packageName.replace('@', '')}`;
              }
            }
          }
        }
      }

      config.output.filename = '[name].[hash:16].js';

      config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
    }
  },

  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compiler = require('vue-template-babel-compiler');
        return options
      });

    if (process.env.VUE_CLI_MODERN_MODE) {
      config.optimization.minimize(true);
      config.optimization.splitChunks = {
        name:   'vendor',
        chunks: 'initial'
      };

      config.plugins.delete('prefetch');
      config.plugin('CompressionPlugin').use(CompressionWebpackPlugin);
    }

    if (process.env.NODE_ENV === 'local') {
      config.plugin('fork-ts-checker').tap(args => {
        args[0].memoryLimit = 1024 * 8;
        args[0].workers = 4;
        return args
      });
    }
  },

  productionSourceMap: false,
  devServer:           {
    historyApiFallback: true,
    compress:           true,
    publicPath:         '/',
    host:               '0.0.0.0',
    port:               9091,
    public:             'local.niceday.io:9091'
  }
}
