'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const vuxLoader = require('vux-loader')


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

// 原来的 module.exports 代码赋值给变量 webpackConfig
const webpackConfig = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),

      'cube-ui': 'cube-ui/lib'
    }
  },
  module: {
    rules: [
      //空格不规范的情况下也不会再报错啦。
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [resolve('src'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {  //从这一段上面是默认的！不用改！下面是没有的需要你手动添加，相当于是编译识别sass!
         test: /\.scss$/,
         loaders: ["style", "css", "sass"]
      },
      {
        test: /\.scss$/,
        use: [
            {
                loader: 'style-loader' // creates style nodes from JS strings
            },
            {
                loader: 'css-loader' // translates CSS into CommonJS
            },
            {
                loader: 'sass-loader' // compiles Sass to CSS
            }
        ]
    }
    ]
  }
}
module.exports = vuxLoader.merge(webpackConfig, {
  plugins: [
    'vux-ui',
    'duplicate-style'
  ]
})
