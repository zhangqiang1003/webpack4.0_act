/**
 * webpack 基础配置
 */
const webpack = require('webpack');

const path = require('path');
// 引入模板插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 提取css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 清理dist文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 引入js丑化的插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// 优化css打包
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 自动打开浏览器
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
// copy静态资源文件
const CopyWebpackPlugin = require('copy-webpack-plugin');
// 操作文件
const fs = require('fs-extra');
// 通过 html-webpack-plugin 生成的 HTML 集合
let HTMLPlugins = [];
// 入口文件集合
let Entries = {};
// html文件名的集合
let HtmlNames = [];
// 路径
const htmlPath = './src/specials/'; // 源文件html的路径
const srcStaticPath = './src/static/specials/'; // 源文件的静态资源路径
const serverStaticPath = 'static/specials/'; // 服务器的静态资源路径
const distStaticPath = './dist/static/specials/'; // 打包的静态资源的路径

console.log(process.argv);
// 读取指定路径下的文件夹(这里读取specials文件夹下的html文件)
function readDir () {
  try {
    HtmlNames = fs.readdirSync(path.resolve(__dirname, `${htmlPath}`), 'utf8');
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}
readDir();

// 填充其他专题页面到index页面的a标签
function writePageToIndex () {
  try {
    let strHeader = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>活动及专题页</title>
    </head>
    <body>
      <div id="wrapper">
    `;
    let strFooter = `
      </div>
    </body>
    </html>
    `;
    let strBody = '';
    HtmlNames.forEach((html) => {
      let reg = /\.html/ig;
      let page = html.replace(reg, '');
      if (page === 'index') {
        // console.log('')
      } else {
        strBody += `<a class="page" href="/specials/${html}" target="_blank">${page}</a>`;
      }
    })
    for (let i = 0; i < 7; i++) {
      strBody += '<div class="page bg"></div>'
    }
    let str = `${strHeader}${strBody}${strFooter}`;
    // console.log(str);
    fs.writeFileSync(path.resolve(__dirname, `${htmlPath}index.html`), str, 'utf8');
  } catch (err) {
    console.log(err)
  }
}
writePageToIndex();

// 生成多页面的集合
function createPagesCollections () {
  HtmlNames.forEach((html) => {
    let reg = /\.html/ig;
    let page = html.replace(reg, '');
    const htmlPlugin = new HTMLWebpackPlugin({
      filename: `specials/${page}.html`,
      template: path.resolve(__dirname, `${htmlPath}${page}.html`),
      chunks: [page, 'commons'],
      minify: {
        'removeAttributeQuotes': true,
        'removeComments': true,
        'removeEmptyAttributes': true
      }
    })
    HTMLPlugins.push(htmlPlugin);
    Entries[page] = path.resolve(__dirname, `${srcStaticPath}js/${page}.js`);
  })
}
createPagesCollections();

module.exports = (env, argv) => ({
  // 入口文件
  entry: Entries,
  // 输出文件
  output: {
    filename: `${serverStaticPath}js/[name].js`,
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
          name: `${serverStaticPath}images/[name].[ext]`,
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
        default: false,
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'async',
          priority: 10,
          enforce: true,
          reuseExistingChunk: true
        },
        commons: {
          name: 'commons',
          chunks: 'initial',
          minSize: 0,
          minChunks: 2
        }
      }
    }
  },
  // 插件
  plugins: [
    // 自动生成html插件
    ...HTMLPlugins,
    new MiniCssExtractPlugin({
      filename: `${serverStaticPath}css/[name].css`
    }),
    new CopyWebpackPlugin([ // 静态资源不打包
      {
        from: path.resolve(__dirname, `${srcStaticPath}plugin/css/`),
        to: path.resolve(__dirname, `${distStaticPath}css/`)
      },
      {
        from: path.resolve(__dirname, `${srcStaticPath}plugin/js/`),
        to: path.resolve(__dirname, `${distStaticPath}js/`)
      },
      {
        from: path.resolve(__dirname, './src/static/official_web/'),
        to: path.resolve(__dirname, './dist/static/official_web/')
      },
      {
        from: path.resolve(__dirname, './src/static/plugins/layer/'),
        to: path.resolve(__dirname, './dist/static/plugins/layer/')
      },
      {
        from: path.resolve(__dirname, `${srcStaticPath}images/`),
        to: path.resolve(__dirname, `${distStaticPath}images/`)
      }
    ]),
    // 自动清理 dist 文件夹
    new CleanWebpackPlugin(['dist'], {}),
    new OpenBrowserPlugin({url: 'http://localhost:8080/specials/'})
  ],
  devServer: {
    host: '0.0.0.0', // 配置为0.0.0.0，手机和pc在同一个网络环境下，手机可以连接本地服务器
    port: 8080,
    // 项目根目录
    contentBase: './dist',
    // 错误、警告展示设置
    overlay: {
      errors: true,
      warnings: true
    },
    proxy: {
      //使用代理的方式进行ajax跨域
      '/': {
        target: 'http://webtest.qeeyou.cn',
        changeOrigin: true,
        secure: false
      }
    }
  }
});
