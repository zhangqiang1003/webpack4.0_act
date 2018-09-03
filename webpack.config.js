/**
 * webpack 基础配置
 */
const webpack = require('webpack')

const path = require('path')
// 引入模板插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 提取css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 清理dist文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin')
// 引入丑化的插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// 打包压缩
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// 引入config.js
const config = require('./src/configHtml/config')
// 通过 html-webpack-plugin 生成的 HTML 集合
let HTMLPlugins = []
// 入口文件集合
let Entries = {}

// 生成多页面的集合
config.HTMLDirs.forEach((html) => {
  let page = html.page
  const htmlPlugin = new HTMLWebpackPlugin({
    filename: `specials/${page}.html`,
    template: path.resolve(__dirname, `./src/specials/${page}.html`),
    chunks: [page, 'commons'],
    minify: {
      'removeAttributeQuotes': true,
      'removeComments': true,
      'removeEmptyAttributes': true
    }
  })
  HTMLPlugins.push(htmlPlugin)
  Entries[page] = path.resolve(__dirname, `./src/static/specials/js/${page}.js`)
})

module.exports = (env, argv) => ({
  // 入口文件
  entry: Entries,
  // 输出文件
  output: {
    filename: 'static/specials/js/[name].[hash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js'] // 配置简写，配置过后，书写该文件路径的时候可以省略文件后缀
  },
  // 加载器
  module: {
    rules: [{
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          attrs: ['img:src', 'link:href'],
          interpolate: true
        }
      }]
    }, 
    {
      // 对css后缀名进行处理
      test: /\.css$/,
      // 不处理node_modules文件中的css文件
      exclude: /node_modules/,
      use: [
        argv.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'
      ]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }],
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          // 打包生成图片的名字
          name: 'static/specials/images/[name].[hash].[ext]',
        }
      }],
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['url-loader']
    },
    {
      test: /\.scss/,
      use: [
        argv.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader'
      ]
    },
    {
      test: /\.less/,
      use: [
        argv.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'less-loader'
      ]
    }
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin()
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  // 插件
  plugins: [
    // 自动生成html插件
    ...HTMLPlugins,
    new MiniCssExtractPlugin({
      filename: 'static/specials/css/[name].[hash].css'
    }),
    // 自动清理 dist 文件夹
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, './'), //根目录
      verbose: true, //开启在控制台输出信息
      dry: false //启用删除文件
    })
  ],
  devServer: {
    // 项目根目录
    contentBase: './dist',
    // 错误、警告展示设置
    overlay: {
      errors: true,
      warnings: true
    }
  }
});
