const fs = require('fs');
const path = require('path');

(function() {
  let name = process.argv[2];
  let htmlPath = './src/specials/';
  let staticPath = './src/static/specials/';
  // 如果为空，报错提醒
  if (name === undefined) throw ('参数为空，创建文件失败！');
  // 如果已经有该文件名，报错提醒；
  let exists = fs.existsSync(path.resolve(__dirname, `${htmlPath}${name}.html`));
  if (exists) throw ('文件名已经存在，重复创建文件导致失败！');
  try {
    fs.appendFileSync(path.resolve(__dirname, `${htmlPath}${name}.html`), 'txt', 'utf8');
    fs.appendFileSync(path.resolve(__dirname, `${staticPath}css/${name}.scss`), '@import \'../../../common/scss/_tool.scss\';', 'utf8');
    fs.appendFileSync(path.resolve(__dirname, `${staticPath}js/${name}.js`), `import style from '../css/${name}.scss'`, 'utf8');
    console.log('创建静态资源文件成功！');
  } catch (e) {
    // 执行删除操作，把该次未成功创建的文件删除
    let existsHtml = fs.existsSync(path.resolve(__dirname, `${htmlPath}${name}.html`));
    if (existsHtml) {
      fs.unlinkSync(path.resolve(__dirname, `${htmlPath}${name}.html`));
    }
    let existsCss = fs.existsSync(path.resolve(__dirname, `${staticPath}css/${name}.scss`));
    if (existsCss) {
      fs.unlinkSync(path.resolve(__dirname, `${staticPath}css/${name}.scss`));
    }
    let existsJs = fs.existsSync(path.resolve(__dirname, `${staticPath}js/${name}.js`));
    if (existsJs) {
      fs.unlinkSync(path.resolve(__dirname, `${staticPath}js/${name}.js`));
    }
    console.log('创建文件失败！');
  } 
})();
