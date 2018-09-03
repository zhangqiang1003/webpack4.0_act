### 配置
- 在config/下的几个文件里配置

### 特点
```bash
1. 支持定制化静态资源的引用路径
2. css支持less，sass，自动编译
3. js支持es6语法，自动编译
4. js资源支持es6的import模块化引用
5. 支持热更新和代码检查
6. 支持jquery
7. 第三方插件使用npm下载，在js中使用import引入
```

### 注意
```bash
1. 如果引入第三方插件，需要同时引入common.js

```

### 使用
```bash
1. 在/src/configHtml的先配置html文件名
2. 在对应的目录下写html，css，js和图片文件
3. 在js文件中使用import方法引入css,js及第三方插件
```

#### 命令行操作
```bash
# 开发环境
npm run dev || npm start
# 打包构建
npm run build

具体可以在package.json中配置

```