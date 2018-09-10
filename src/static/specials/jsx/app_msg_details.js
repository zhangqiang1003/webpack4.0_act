import flexible from './flexible.js'
import $ from 'jquery'
import style from '../css/app_msg_details.scss'

(function () {
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
  
  // 接口请求，获取详细信息
  function getMsgDetails () {
    let obj;
    dealView(obj); // 处理视图
  }
  getMsgDetails ();

  // 处理视图
  function dealView (data) {
    let oH2 = $('.h2');
    let oTime = $('.time');
    let oCon = $('.content-wrapper');
    console.log(oH2, oTime, oCon, data)
  }
})()
