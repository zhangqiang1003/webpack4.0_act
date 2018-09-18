const fs = require('fs');
const path = require('path');

(function() {
  const name = process.argv[2];
  const htmlPath = './src/specials/';
  const staticPath = './src/static/specials/';
  const htmlModuleStr = `
<!DOCTYPE html>
<html>
  <head>
      <title>自行在生成的html页面更改相应内容</title>
      <meta name="keywords" content="" />
      <meta name="description" content="" />
      <meta charset="UTF-8">
      <meta name="robots" content="all">
      <meta name="author" content="Tencent-CP">
      <meta name="Copyright" content="Tencent">
      <link rel="shortcut icon" href="/static/portal/web/favicon.ico">
      <link rel="stylesheet" href="/static/specials/css/animate.min.css">
      <link rel="stylesheet" href="/static/specials/css/new_plugin_header_footer.css">
  </head>
  <body>
      <div class="new-plugin-header"></div>
      <div class="new-plugin-service"></div>
      <div class="new-plugin-footer"> </div>
      <script type="text/javascript" src="/static/specials/js/jquery.js"></script>
      <script type="text/javascript" src="/static/plugins/layer/layer.js"></script>
      <script type="text/javascript" src="/static/official_web/js/utils.js"></script>
      <script type="text/javascript" src="/static/official_web/js/login/gt.js"></script>
      <script src="/static/specials/js/flexible_pc.js"></script>
      <script src="https://www.sobot.com/chat/frame/js/entrance.js?sysNum=072c38afdfa44956a84fc2fcc697b069" class="zhiCustomBtn"
          id="zhichiScript" data-args="manual=true"></script>
      <script type="text/javascript" src="/static/specials/js/new_plugin_header_footer.js"></script>
      <script type="text/javascript">
          $(function () {
              getDownloadAddress(".download-dom");
              newPlugin.init('dark');
          });
      </script>
  </body>
  <script type="text/javascript">
      //百度统计代码
      var _hmt = _hmt || [];
      (function () {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?2306e386141b6bd7acdeef46503ec82d";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
      })();
  </script>
</html>
  `
  // 如果为空，报错提醒
  if (name === undefined) throw ('参数为空，创建文件失败！');
  // 如果已经有该文件名，报错提醒；
  const exists = fs.existsSync(path.resolve(__dirname, `${htmlPath}${name}.html`));
  if (exists) throw ('文件名已经存在，重复创建文件导致失败！');
  try {
    fs.appendFileSync(path.resolve(__dirname, `${htmlPath}${name}.html`), `${htmlModuleStr}`, 'utf8');
    fs.appendFileSync(path.resolve(__dirname, `${staticPath}css/${name}.scss`), '@import \'../../../common/scss/_tool.scss\';', 'utf8');
    fs.appendFileSync(path.resolve(__dirname, `${staticPath}js/${name}.js`), `import style from '../css/${name}.scss'`, 'utf8');
    console.log('创建静态资源文件成功！');
  } catch (e) {
    // 未创建成功，执行删除操作，把此次创建的文件删除
    const existsHtml = fs.existsSync(path.resolve(__dirname, `${htmlPath}${name}.html`));
    if (existsHtml) {
      fs.unlinkSync(path.resolve(__dirname, `${htmlPath}${name}.html`));
    }
    const existsCss = fs.existsSync(path.resolve(__dirname, `${staticPath}css/${name}.scss`));
    if (existsCss) {
      fs.unlinkSync(path.resolve(__dirname, `${staticPath}css/${name}.scss`));
    }
    const existsJs = fs.existsSync(path.resolve(__dirname, `${staticPath}js/${name}.js`));
    if (existsJs) {
      fs.unlinkSync(path.resolve(__dirname, `${staticPath}js/${name}.js`));
    }
    console.log('创建文件失败！');
  } 
})();
