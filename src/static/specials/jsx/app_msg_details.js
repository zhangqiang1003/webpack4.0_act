// import flexible from './flexible.js'
// import $ from 'jquery'
import style from '../css/app_msg_details.scss'

(function (win) {  
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
  let checkOs = checkAndroidOrIos();

  // 根据系统类型调用不同的方法
  if (checkOs === 'android') {
    win.sendData.getContent();
  } else {
    try {
      win.webkit.messageHandlers.getContent.postMessage({});
    }
    catch (err) {
      console.log(err);
    }
  }

  // 与APP通信，获取详细信息
  function getMsgDetails (data) {
    dealView(data);
  }
  win.getMsgDetails = getMsgDetails; // 全局挂载

  // 处理视图
  function dealView (data) {
    let reg = /\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/;
    let time = reg.exec(data.add_time)[0];
    let oH2 = $('.h2');
    let oTime = $('.time');
    let oCon = $('.content-wrapper');
    oH2.html(data.notice_title);
    oTime.html(time);
    oCon.html(data.content);
  }
})(window)
