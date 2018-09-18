const fs = require('fs');
const path = require('path');

(function() {
  const htmlPath = './src/specials/'; // 本地开发环境的html资源路径
  const staticPath = './src/static/specials/'; // 本地开发环境的静态资源路径
  const htmlRemotePath = './production/templates/specials/'; // 远端
  const staticRemotePath = './production/static/specials/';
  const type = process.argv[2]; // 判断是删除打包后上线版本的文件还是本地开发的源文件；值为：local 或 remote
  const name = process.argv[3]; // 要删除的文件名

  // 先做一些检查
  function check() {
    if (type !== 'local' && type !== 'remote') throw ('参数错误！');
    // 检查要删除的文件是否存在
    if (type === 'local') {
      const existsLocal = fs.existsSync(path.resolve(__dirname, `${htmlPath}${name}.html`));
      if (!existsLocal) throw ('无法找到要删除的文件！');
      delLocalFile();
    } else if (type === 'remote') {
      const existsRemote = fs.existsSync(path.resolve(__dirname, `${htmlRemotePath}${name}.html`));
      if (!existsRemote) throw ('无法找到要删除的文件！');
      delRemoteFile();
    }
  }
  check();
  // 删除本地开发环境的源代码
  function delLocalFile() {
    // 删除之前赢检查是否存在
    const existsCss = fs.existsSync(path.resolve(__dirname, `${staticPath}css/${name}.scss`));
    const existsJs = fs.existsSync(path.resolve(__dirname, `${staticPath}js/${name}.js`));
    fs.unlinkSync(path.resolve(__dirname, `${htmlPath}${name}.html`)); // 删除html文件
    if (existsCss) {
      fs.unlinkSync(path.resolve(__dirname, `${staticPath}css/${name}.scss`)); // 删除scss文件
    }
    if (existsJs) {
      fs.unlinkSync(path.resolve(__dirname, `${staticPath}js/${name}.js`)); // 删除js文件
    }
    // 删除image文件
    let imagesName = fs.readdirSync(path.resolve(__dirname, `${staticPath}images/`));
    const reg = new RegExp(`${name}_`);
    let filter = imagesName.filter((val) => {
      return reg.test(val);
    });
    filter.forEach((val) => {
      fs.unlinkSync(path.resolve(__dirname, `${staticPath}images/${val}`)); // 逐个删除image文件
    });
    console.log('文件删除成功！');
  }

  // 删除远端生产环境的打包代码
  function delRemoteFile() {
    // 删除之前应检查是否存在
    const existsCss = fs.existsSync(path.resolve(__dirname, `${staticRemotePath}css/${name}.css`));
    const existsJs = fs.existsSync(path.resolve(__dirname, `${staticRemotePath}js/${name}.js`));
    fs.unlinkSync(path.resolve(__dirname, `${htmlRemotePath}${name}.html`)); // 删除html文件
    if (existsCss) {
      fs.unlinkSync(path.resolve(__dirname, `${staticRemotePath}css/${name}.css`)); // 删除css文件
    }
    if (existsJs) {
      fs.unlinkSync(path.resolve(__dirname, `${staticRemotePath}js/${name}.js`)); // 删除js文件
    }

    // 删除image文件
    let imagesName = fs.readdirSync(path.resolve(__dirname, `${staticRemotePath}images/`));
    const reg = new RegExp(`${name}_`);
    let filter = imagesName.filter((val) => {
      return reg.test(val);
    });
    filter.forEach((val) => {
      fs.unlinkSync(path.resolve(__dirname, `${staticRemotePath}images/${val}`)); // 逐个删除image文件
    });
    console.log('文件删除成功！');
  }
})();