console.log('删除');
console.log(process.argv);
const fs = require('fs');
const path = require('path');

(function() {
  let htmlPath = './src/specials/';
  let staticPath = './src/static/specials/';
  let type = process.argv[2]; // 判断是删除打包后上线版本的文件还是本地开发的源文件；值为：local 或 remote
  console.log(type);
  if (type !== 'local' && type !== 'remote') throw ('参数错误！');
  let name = process.argv[3];
  // 检查要删除的文件是否存在
  let exists = fs.existsSync(path.resolve(__dirname, `${htmlPath}${name}.html`));
  if (!exists) throw ('无法找到要删除的文件！');
  console.log(name);
})();