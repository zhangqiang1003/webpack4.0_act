// import flexible from './flexible.js'
// import $ from 'jquery'
import style from '../css/app_msg_details.scss'

(function (win) {
  // 获取url的查询字符串
  function parseQueryStr () {
    const query = decodeURIComponent(window.location.search);
    let obj = {};
    const exp = /^\?/.test(query);
    let arr = [];
    if (exp) {
      query.slice(1).split('&').forEach(function(val) {
        arr = val.split('=');
        obj[arr[0]] = arr[1];
      })
      return obj;
    }
    return;
  }
  let query = parseQueryStr();
  
  // 判断Android or ios
  function checkAndroidOrIos() {
    var ret = 'android';
    var u = navigator.userAgent;
    let reg = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    if ((u.indexOf('Android') > -1) || (u.indexOf('Adr') > -1)) {
      ret = 'android';
    } else if (reg) {
      ret = 'ios';
    }
    return ret;
  }
  let checkOs = checkAndroidOrIos()

  // 根据系统类型调用不同的方法
  if (checkOs === 'android') {
    console.log('android')
  } else {
    try {
      win.webkit.messageHandlers.getContent.postMessage({})
    }
    catch (err) {
      console.log(err)
    }
  }

  // 接口请求，获取详细信息
  function getMsgDetails (data) {
    dealView(data);
  }
  win.getMsgDetails = getMsgDetails
  let getData = {
    notice_title: '给安卓ios的公告',
    add_time: '2018-09-11 10:25:10',
    content: '<h1>给安卓ios的公告</h1><br/><img src="http://nodetest.qeeyou.cn/static/ue_upload/image/QQ图片201809101058181536632655392130.jpg" /><br /><p>这就是一个测试这就是一个测试这就是一个测试这就是一个测试这就是一个测试这就是一个测试这，就是一个测试这。就是一个测试这就是，一个测试这就是一，个测试这就是一个测试这，就是一个测试这就是一个测试这就是一个测试这就是一个测试这就是一个测试这就是一个测试这就是一个测试这就是一个测试这就是一个测试这就是一个测试这就是一个测试这就是一个测试这就是一个测试这就是一个测试这就是一个测试</p>'
  }
  // </img>
  // dealView(getData);
  // 处理视图
  function dealView (data) {
    console.log(data.add_time)
    let reg = /\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/;
    let time = reg.exec(data.add_time)[0]
    let oH2 = $('.h2');
    let oTime = $('.time');
    let oCon = $('.content-wrapper');
    oH2.html(data.notice_title);
    oTime.html(time);
    oCon.html(data.content);
  }
})(window)
