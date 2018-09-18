/**
 * 移动本地打包的文件到生产环境
 * tips：移动文件之前必须先执行npm run build，生成打包文件
 */
const fs = require('fs');
const path = require('path');

(function() {
  // 开发环境的打包文件目录
  const pathDist = './dist';
  const pathHtml = './dist/specials/';
  const pathStatic = './dist/static/specials/';
  // 生产环境的打包文件目录
  const pathProHtml = './production/templates/specials/';
  const pathProStatic = './production/static/specials/';
  // 获取命令行的参数
  const name = process.argv[2];
  // 读取dist文件夹是否存在
  function checkDist() {
    const exists = fs.existsSync(path.resolve(__dirname, `${pathDist}`));
    if (!exists) throw ('请先执行命令 npm run build 打包文件！');
  }
  checkDist();
  
  // 检查要移动的文件是否存在
  function checkFile() {
    const existsHtml = fs.existsSync(path.resolve(__dirname, `${pathHtml}${name}.html`));
    const existsCss = fs.existsSync(path.resolve(__dirname, `${pathStatic}css/${name}.css`));
    const existsJs = fs.existsSync(path.resolve(__dirname, `${pathStatic}/js/${name}.js`));
    if (!existsHtml) throw ('正在移动的文件无法找到！');
    // copy html文件
    fs.copyFileSync(path.resolve(__dirname, `${pathHtml}${name}.html`),
      path.resolve(__dirname, `${pathProHtml}${name}.html`));
    if (existsCss) {
      // copy css文件
      fs.copyFileSync(path.resolve(__dirname, `${pathStatic}css/${name}.css`),
        path.resolve(__dirname, `${pathProStatic}css/${name}.css`));
    }
    if (existsJs) {
      // copy js文件
      fs.copyFileSync(path.resolve(__dirname, `${pathStatic}js/${name}.js`),
        path.resolve(__dirname, `${pathProStatic}js/${name}.js`));
    }
    // 读取图片文件夹
    let imagesName = fs.readdirSync(path.resolve(__dirname, `${pathStatic}images/`));
    const reg = new RegExp(`${name}_`);
    let filter = imagesName.filter((val) => {
      return reg.test(val);
    });
    filter.forEach((val) => {
      // copy image文件
      fs.copyFileSync(path.resolve(__dirname, `${pathStatic}images/${val}`),
        path.resolve(__dirname, `${pathProStatic}images/${val}`));
    });
    console.log('文件移动成功！');
  }
  checkFile();
})();