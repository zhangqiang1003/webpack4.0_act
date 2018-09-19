### 1.项目描述
基于webpack4.x,搭建多页面前端开发环境，用于公司开发游戏专题及活动专题页面
>主要功能（通过命令行实现）
- 自动生成新的静态资源文件
- 本地开发和打包
- 移动本地打包文件到生产环境的仓库
- 删除开发环境或生产环境指定的静态资源
>项目特点
- 可拓展，支持与目前流行的三大前端框架整合
- 灵活，可在现有基础上增加新的功能配置或修改配置
- 基本配置完善，能满足一般的前端开发需求，只需修改路径就可在自己的项目中实现同样的功能
### 2.开发环境
>开发环境
- 系统：win10
- npm(5.6.0)
- node(8.11.4)
- webpack(4.17.1)
>配置
- crete.js - 自动生成新的静态资源文件
- move.js - 移动本地打包文件到生产环境的仓库
- delete.js - 删除开发环境或生产环境指定的静态资源
- webpack.config.js - 本地开发和打包（详细配置说明见下文）
- webpack相关配置用到的loader或plugin，查看package.json文件

### 3.项目结构简介
```
|-- webpack_act // 项目文件夹
    |-- .babelrc // 处理es6->es5
    |-- .eslintrc // eslint检测
    |-- .gitignore // git提交时需要忽略的文件（夹）
    |-- create.js // [配置文件]自动生成新的静态资源文件
    |-- delete.js // [配置文件]删除开发环境或生产环境指定的静态资源
    |-- move.js // [配置文件]移动本地打包文件到生产环境的仓库
    |-- package-lock.json // 不用管它是啥
    |-- package.json // 记录项目所需的各种模块，及配置信息，使用npm init生成
    |-- postcss.config.js // 对css的处理（该项目没有进行配置）
    |-- webpack.config.js // [配置文件]webpack的配置文件
    |-- production // 用于模拟我们项目的生产环境目录结构，你可以不用在意这个
    |   |-- static // 生产环境存放静态资源的目录
    |   |   |-- specials
    |   |       |-- css
    |   |       |-- images
    |   |       |-- js
    |   |-- templates
    |       |-- specials  // 生产环境存放html文件的目录
    |-- src // 开发环境的源文件目录
        |-- common // 本地开发所需的公共资源，参与打包，并以commons.js文件输出
        |   |-- scss // 针对scss的语法进行简单封装
        |   |   |-- _mixin.scss
        |   |   |-- _tool.scss
        |   |-- service // 存放公共的服务
        |       |-- utils.js
        |-- specials // 本地开发环境的html文件存放目录
        |-- static // 本地开发环境的静态资源源文件存放目录
            |-- official_web // 生产环境的公共资源，不参与打包，使用插件直接移动到构建目录dist/对应的路径下，你可以不用在意这部分，并且可以删除这部分，及其对应的配置
            |-- plugins // 生产环境的公共资源
            |-- portal // 生产环境的公共资源
            |-- specials // 本地开发环境的静态资源源文件存放目录
                |-- css // 支持后缀名为.css，.scss及.less的文件
                |-- images // 图片
                |-- js // js文件
                |-- plugin // 存放我们项目的公共插件，，不参与打包，你可以删除这部分，及对应的配置
                    |-- css
                    |-- js

```
### 4.更新链接

```
https://github.com/zhangqiang1003/webpack4.0_act.git
```


### 5.使用说明
>clone代码
```
git clone https://github.com/zhangqiang1003/webpack4.0_act.git
```
>进入根目录,下载依赖和模块
```
cd webpack4.0_act && npm install
```
>创建名称为myTest的资源文件
```
npm run create myTest

执行该命令的结果：
- 在路径/src/specials/下自动生成myTest.html文件；
- 在路径/src/static/specials/css/自动下生成myTest.scss文件；
- 在路径/src/static/specials/js/自动下生成myTest.js文件
```
```
- 注意：图片资源文件命名以myTest_开头，然后手动放到路径/src/static/specials/images/下
- 注意：在执行npm run create myTest时，会自动启动npm start命令，开启本地服务器
```
>开启本地服务器
```
npm start

- 会自动打开浏览器
```

>本地打包
```
npm run build

- 打包的文件会放到dist/文件夹下
```

>移动本地打包文件到生产环境的仓库（举例：这里移动名为myTest的资源文件，包括html，css,js，以及以myTest_开头的图片资源）
```
npm run move myTest

执行该命令的结果
- 将/dist/specials/下的myTest.html文件移动到/production/templates/specials/路径下;
- 将/dist/static/specials/css/下的myTest.css文件移动到/production/static/specials/css/路径下;
- 将/dist/static/specials/js/下的myTest.js文件移动到/production/static/specials/js/路径下;
- 将/dist/static/specials/images/下的myTest_开头的图片文件移动到/production/static/specials/images/路径下;
```

>删除开发环境或生产环境指定的静态资源
```
npm run delete remote myTest 

执行该命令的结果：
- 该命令会删除生产环境资源文件，包括myTest.html, myTest.css, myTest.js 以及以myTest_开头的图片文件


npm run delete local myTest 

执行该命令的结果:
- 该命令会删除本地开发环境的资源文件，包括myTest.html, myTest.scss, myTest.js以及以myTest_开头的图片文件
```

### 6.webpack.config.js的配置说明
1. 入口文件（entry）

- html模版插件-html-webpack-plugin [[点击学习](https://www.webpackjs.com/plugins/html-webpack-plugin/)]
- 配置如下：

```
// 引入模版插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 通过 html-webpack-plugin 生成的 HTML 集合
let HTMLPlugins = [];
// 入口文件集合
let Entries = {};
// html文件名的集合
let HtmlNames = [];
// 路径
const htmlPath = './src/specials/'; // 源文件html的路径
const srcStaticPath = './src/static/specials/'; // 源文件的静态资源路径
// 通过读取文件的第三方package包（fs-extra）读物html文件名
// 读取指定路径下的文件夹(这里读取specials文件夹下的html文件)
try {
    HtmlNames = fs.readdirSync(path.resolve(__dirname, `${htmlPath}`), 'utf8');
    console.log('success!')
} catch (err) {
    console.error(err)
}
// 生成多页应用的集合
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
// 入口文件
entry: Entries,
// 插件
plugins: [
    // 自动生成html插件
    ...HTMLPlugins,
]
```

2. 输出文件（output）
- 配置如下：

```
// 输出文件
output: {
    filename: `${serverStaticPath}js/[name].js`,
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
},
```

3. 模块解析（resolve）
- 配置如下：

```
resolve: {
    extensions: ['.js'] // 配置简写，配置过后，书写该文件路径的时候可以省略文件后缀
},
```

4. 模块（module）
- 说明：这里主要是使用loader处理一些文件，loader是webpack的一个核武器
- 说明：该项目目前仅仅是对html，css，scss，less，js以及图片进行了处理
- 什么是loader?[[点击学习](https://www.webpackjs.com/loaders/)]
- 配置如下：

```
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
```

5. 代码打包优化（optimization）
- 参考文章：[[webpack4：连奏中的进化](https://www.cnblogs.com/wmhuang/p/8967639.html)]-作者：Young Dreamer
- 参考文章：[[webpack4 系列教程(三): 多页面解决方案--提取公共代码](https://blog.csdn.net/AsuraDong/article/details/81513185)]-作者：GodBMW
- 查看文档[[点击学习](https://webpack.js.org/configuration/optimization/#src/components/Sidebar/Sidebar.jsx)]
- 配置如下：

```
// 引入js丑化的插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// 优化css打包
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 具体配置
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
```

6. 插件（plugins）
- 插件功能，webpack得以如此受欢迎的重要原因[[点击学习](https://www.webpackjs.com/concepts/plugins/)]
- 该项目使用插件如下：

插件 | 功能
---|---
[html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) | html模板插件
[mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin) | 提取css
[clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin) | 在构建打包文件之前清除dist文件夹
[uglifyjs-webpack-plugin](https://www.npmjs.com/package/uglifyjs-webpack-plugin) | 丑化js文件
[optimize-css-assets-webpack-plugin](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin) | 优化css
[open-browser-webpack-plugin](https://www.npmjs.com/package/open-browser-webpack-plugin) | 自动打开浏览器，如果你懒，就选它
[copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin) | 将指定的文件或文件夹直接复制到构建目录dist/下，不参与打包
[webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) | 用于本地开发的，启动本地服务器

- 配置如下：

```
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
```

7. 本地服务器（devServer）
- 用于本地开发，启动本地服务器
- 查看文档[[点击学习](https://www.webpackjs.com/configuration/dev-server/)]
- 配置如下：

```
devServer: {
    host: '0.0.0.0', // 配置为0.0.0.0，手机和pc在同一个网络环境下，手机可以连接本地服务
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
        target: 'http://XXXX.XXXXX.cn', // 填写你需要跨域的url地址
        changeOrigin: true,
        secure: false
      }
    }
  }
```
