'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {
  var HeaderFooterPlugin = function () {
    function HeaderFooterPlugin() {
      _classCallCheck(this, HeaderFooterPlugin);

      this.headerEl = $('.new-plugin-header');
      this.serviceEl = $('.new-plugin-service');
      this.footerEl = $('.new-plugin-footer');
      this.headerStr = '\n      <div class="header-container">\n      <div class="logo"></div>\n      <div class="menus">\n        <a href="/#/main/index" class="menu">\u9996\u9875</a>\n        <a href="/specials/ljb-overview" class="menu ljb-overview">\u8054\u673A\u5B9D</a>\n        <a href="/specials/QeeyouMobile" class="menu mobile-game-menu">\u624B\u6E38\u52A0\u901F\u5668</a>\n        <a href="/#/main/service" class="menu">\u670D\u52A1</a>\n        <a href="/#/main/game" class="menu">\u6E38\u620F</a>\n        <a href="/#/main/help" class="menu">\u5E2E\u52A9</a>\n        <a href="/#/main/notice" class="menu">\u8D44\u8BAF/\u516C\u544A</a>\n        <div class="menu-btns">\n          <a class="login">\u767B\u5F55</a>\n          <a class="reg active" href="/#/register" target="_blank">\u514D\u8D39\u6CE8\u518C</a>\n        </div>\n        <div class="user-info">\n          <div class="avatar-container">\n            <div class="avatar"></div>\n            <a href="/#/member/center" class="user-account"></a>\n          </div>\n          <div class="user-menu">\n            <a href="/#/member/account/update" class="change-pass">\u4FEE\u6539\u5BC6\u7801</a>\n            <a href="" class="user-log-out">\u9000\u51FA</a>\n          </div>\n        </div>\n      </div>\n      <div class="login-modal">\n        <div class="modal-container">\n          <span class="close"></span>\n          <div class="modal-logo"></div>\n          <label for="username">\n            <input type="text" id="username" class="user-name" autocomplete="off" placeholder="\u624B\u673A\u53F7\u7801/\u90AE\u7BB1">\n          </label>\n          <label for="userpass">\n            <input type="password" id="userpass" class="user-pass" autocomplete="new-password" placeholder="\u5BC6\u7801">\n          </label>\n          <div id="geetest-box"></div>\n          <button class="modal-login-btn">\u767B\u5F55</button>\n          <p class="tip">\n            <span><a href="/#/forgot-password">\u5FD8\u8BB0\u5BC6\u7801\uFF1F</a></span>\n            <span>\u6CA1\u6709\u5947\u6E38\u8D26\u53F7\uFF1F<a href="/#/register" class="modal-reg">\u7ACB\u5373\u6CE8\u518C</a></span>\n          </p>\n        </div>\n      </div>\n    </div>\n      ';
      this.serviceStr = '\n      <div class="service-container">\n      <a class="service-item-wrapper">\n        <div class="service-bg">\n          <div class="service-top-bg"></div>\n          <div class="service-bottom-bg"></div>\n        </div>\n        <div class="service-dis">\n          <h5 class="number">5\u5929</h5>\n          <p class="dis">\u65E0\u7406\u7531\u9000\u6B3E</p>\n        </div>\n      </a>\n      <a class="service-item-wrapper">\n        <div class="service-bg">\n          <div class="service-top-bg"></div>\n          <div class="service-bottom-bg"></div>\n        </div>\n        <div class="service-dis">\n          <h5 class="number">24\u5C0F\u65F6</h5>\n          <p class="dis">\u6280\u672F\u8FD0\u7EF4</p>\n        </div>\n      </a>\n      <a class="service-item-wrapper">\n        <div class="service-bg">\n          <div class="service-top-bg"></div>\n          <div class="service-bottom-bg"></div>\n        </div>\n        <div class="service-dis">\n          <h5 class="number">7x12\u5C0F\u65F6</h5>\n          <p class="dis">\u5BA2\u670D\u56E2\u961F\u652F\u6301</p>\n        </div>\n      </a>\n    </div>\n      ';
      this.footerStr = '\n      <div class="footer-container">\n      <div class="top">\n        <div class="left-wrapper">\n          <div class="footer-logo"></div>\n          <div class="left-footer-content">\n            <p class="title">\u4EA7\u54C1\u4E2D\u5FC3</p>\n            <a href="/specials/ljb-overview" target="_blank">\u8054\u673A\u5B9D</a>\n            <a href="/#/main/index" target="_blank">Windows\u5BA2\u6237\u7AEF</a>\n            <a href="/specials/QeeyouMobile" target="_blank">\u624B\u6E38\u52A0\u901F\u5668</a>\n          </div>\n          <div class="left-footer-content">\n            <p class="title">\u670D\u52A1\u4E2D\u5FC3</p>\n            <a href="/#/main/notice/103">\u5145\u503C\u6307\u5357</a>\n            <a href="/#/main/service">\u5957\u9910\u9009\u62E9</a>\n            <a href="/#/main/notice/104">\u652F\u4ED8\u65B9\u5F0F</a>\n            <a href="/#/main/notice/27">\u552E\u540E\u653F\u7B56</a>\n          </div>\n          <div class="left-footer-content">\n            <p class="title">\u5173\u4E8E</p>\n            <a href="http://www.junyun.jobs/">\u5173\u4E8E\u6211\u4EEC</a>\n            <a href="http://www.junyun.jobs/">\u8BDA\u5F81\u82F1\u624D</a>\n            <a href="/#/main/notice/83">\u7528\u6237\u534F\u8BAE</a>\n            <a href="/#/main/brand-intro">\u54C1\u724C</a>\n          </div>\n        </div>\n        <div class="right-wrapper">\n          <div class="contact-us">\n            <h5 class="phone">0871-65099992</h5>\n            <p class="time">\u5468\u4E00\u81F3\u5468\u65E5 9:30-21:30</p>\n          </div>\n          <div class="cell-center">\n            <a href="https://www.sobot.com/chat/pc/index.html?sysNum=072c38afdfa44956a84fc2fcc697b069" target="_blank" class="online">\u5728\u7EBF\u5BA2\u670D</a>\n            <a href="http://wpa.qq.com/msgrd?v=3&uin=1205205970&site=qq&menu=yes" target="_blank" class="complain">\u6295\u8BC9\u5EFA\u8BAE</a>\n            <div class="shares">\n              <div class="share-item weixin">\n                <div class="share-qrcode">\n                  <div class="qrcode-item">\n                    <div class="qrcode weixin"></div>\n                    <p>\u5947\u6E38\u7535\u7ADE\u52A0\u901F\u5668</p>\n                  </div>\n                </div>\n              </div>\n              <div class="share-item weibo">\n                <div class="share-qrcode weibo-share">\n                  <div class="qrcode-item">\n                    <div class="qrcode weibo"></div>\n                    <p>\n                      <a href="https://weibo.com/u/3647878343" target="_blank">\u5947\u6E38\u7535\u7ADE\u52A0\u901F\u5668</a>\n                    </p>\n                  </div>\n                  <div class="qrcode-item">\n                    <div class="qrcode weibo-ljb"></div>\n                    <p>\n                      <a href="https://weibo.com/u/6415004550" target="_blank">\u5947\u6E38\u8054\u673A\u5B9D</a>\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="line"></div>\n      <div class="bottom">\n        <div class="info">\n          <p class="copyright">\n            <span>\xA92014-2018 \u5947\u6E38\u7535\u7ADE\u52A0\u901F\u5668 All Rights Reserved </span>\n            <span>\u6606\u660E\u4FCA\u4E91\u79D1\u6280\u6709\u9650\u516C\u53F8</span>\n          </p>\n          <p class="put-on-records ">\u6EC7\u516C\u7F51\u5B89\u5907 53010302000130\u53F7 \u6EC7ICP\u590714005523\u53F7-1 ICP\u8BC1\u7F16\u53F7\uFF1A\u6EC7B2-20160043</p>\n        </div>\n      </div>\n    </div>\n      ';
      this.rightBtnStr = '<div class="new-plugin-right-buttons">\n      <div class="item activity-btn" title="\u9650\u65F6\u6D3B\u52A8"><span></span></div>\n      <div class="activities-wrapper">\n      </div>\n      <div class="item zhi-chi zhiCustomBtn" id="zhichiScript" title="\u5728\u7EBF\u5BA2\u670D"><span></span></div>\n      <div class="item to-top" title="\u8FD4\u56DE\u9876\u90E8"><span></span></div>\n    </div>';
      // this.rightBtnStr = `<div class="new-plugin-right-buttons-temporary">
      //     <div class="item righte-btn-title-temporary">钜惠活动</div>
      //   <div class="item activity-btn-temporary"><a href="/specials/20180831BananaCamera" target="_blank"><span class="act-icon"></span>集结猎人激活折扣</a></div>
      //   <div class="item activity-btn-temporary"><a href="/specials/20180901ljb_presell" target="_blank"><span class="act-icon"></span>联机宝畅玩版预售</a></div>
      //   <div class="item activity-btn-temporary"><a href="/specials/fourYearBrandPublicity" target="_blank"><span class="act-icon"></span>品牌升级电竞赋能</a></div>
      //   <div class="item zhi-chi zhiCustomBtn" id="zhichiScript" title="在线客服"><span class="act-kf"></span>客服服务</div>
      //   <div class="item to-top-temporary to-top"><span class="act-go-top"></span>顶部</div>
      // </div>`;
      this.activityStr = '<div class="activity-mask">\n        <div class="relative activity-wrapper">\n            <div class="activity-close">\n                <img src="/static/specials/images/close40x40.png">\n            </div>\n            <div class="activity-replace01">\n              <div class="right-btn-swiper-container">\n                <div class="swiper-wrapper">\n                </div>\n              </div>\n            </div>\n        </div>\n        <div>\n            <div class="activity-replace02">\n            </div>\n         </div>\n       </div>';
      this.loginStatus = false;
      this.geestRight = false;
      this.userName = '';
      this.userPass = '';
      this.captchaObj = null;
      this.activityShow = false;
      this.activityData = [];
      this.rightSwiper = null;
    }

    // 初始化


    _createClass(HeaderFooterPlugin, [{
      key: 'init',
      value: function init() {
        var _this2 = this;

        var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'white';

        $($('head')[0]).append('<link rel="stylesheet" type="text/css" href="/static/specials/css/swiper4.3.5.css">');
        $($('head')[0]).append('<script src="/static/specials/js/swiper4.3.5.js"></script>');
        if (theme === 'dark') {
          $('body').addClass('dark');
        }
        this.headerEl.html(this.headerStr);
        this.serviceEl.html(this.serviceStr);
        this.footerEl.html(this.footerStr);
        $('body').append(this.rightBtnStr);

        this.scrollDirection();
        this.showToTopBtn();
        this.toTop();
        this.jionUpZhiChi();
        this.getLoginStatus();
        // 获取活动
        this.getActivity();
        // 事件
        $(this.headerEl).on('click', '.login', function () {
          // 显示登录蒙层
          _this2.showLoginModal();
        });

        $(this.headerEl).on('click', '.close', function () {
          // 关闭蒙层
          _this2.closeLoginModal();
        });

        $(this.headerEl).on('input propertychange', 'input', function (e) {
          // input框监测
          _this2.userName = $(_this2.headerEl).find('.user-name').val();
          _this2.userPass = $(_this2.headerEl).find('.user-pass').val();
          if (_this2.userName && _this2.userPass) {
            $(_this2.headerEl).find('.modal-login-btn').addClass('active');
          } else {
            $(_this2.headerEl).find('.modal-login-btn').removeClass('active');
          }
        });

        $(this.headerEl).on('click', '.user-log-out', function () {
          _this2.logOut();
        });

        if (window.location.pathname === '/specials/QeeyouMobile') {
          $('.new-plugin-header').find('.mobile-game-menu').addClass('active');
        }
        if (window.location.pathname === '/specials/ljb-overview') {
          $('.new-plugin-header').find('.ljb-overview').addClass('active');
        }
      }
    }, {
      key: 'getActivity',
      value: function getActivity() {
        var _this = this;
        $.ajax({
          type: 'post',
          url: '/api/category/index',
          dataType: 'json',
          data: {
            'web_type': 'PC'
          },
          success: function success(res) {
            _this.activityData = res.data;
            if (_this.activityData.length > 0) {
              // 如果有活动数据
              $('body').find('.new-plugin-right-buttons .activity-btn').css({
                'display': 'flex',
                'opacity': 1
              });
              var menuStr = '';
              _this.activityData.forEach(function (item) {
                menuStr += '<a href="' + item.link + '" class="activity-menu" title="' + item.title + '">' + item.title + '</a>';
              });
              $('body').find('.activities-wrapper').html(menuStr);
              // 设置动画的中心点
              _this.setAnimaitionOrigin();
              // 展示活动按钮
              $('.new-plugin-right-buttons .activity-btn').css('display', 'flex');
              // 点击活动按钮弹出 活动页面
              $('.new-plugin-right-buttons').on('click', '.activity-btn', function () {
                if (_this.activityShow === false) {
                  // 先在body里注入页面
                  $('body').append(_this.activityStr);
                  // 替换掉页面中的数据
                  var linkStr = '';
                  var itemStr = '';
                  _this.activityData.forEach(function (item, index) {
                    linkStr += '\n                  <div class="right-btn-activity swiper-slide">\n                  <a href="' + item.link + '">\n                      <img src="' + item.image + '" class="act-img">\n                  </a>\n                  </div>\n                  ';
                    itemStr += '<div data-index="' + index + '" class="activity-item ' + (index === 0 ? 'activity-item-active' : '') + '">\n                                            <div class="activity-item-bg"></div>\n                                            <div class="activity-item-inner">' + item.title + '</div>\n                                        </div>';
                  });
                  $('.activity-mask .activity-replace01 .swiper-wrapper').html(linkStr);
                  $('.activity-mask .activity-replace02').html(itemStr);
                  // 动画开始
                  setTimeout(function () {
                    $('.activity-mask').addClass('activity-animate-in');
                    setTimeout(function () {
                      $('.activity-mask').css('opacity', 1);
                      _this.activityShow = true;
                    }, 500);
                  }, 0);

                  setTimeout(function () {
                    _this.rightSwiper = new Swiper('.right-btn-swiper-container', {
                      loop: false,
                      autoplay: true,
                      on: {
                        slideChangeTransitionEnd: function slideChangeTransitionEnd() {
                          var activeIndex = this.activeIndex;
                          $('body').find('.activity-mask').find('.activity-item').removeClass('activity-item-active');
                          $('body').find('.activity-mask').find('[data-index=\'' + activeIndex + '\']').addClass('activity-item-active');
                        }
                      }
                    }, 1000);
                  });
                }
              });
              // 关闭活动页面
              $('body').on('click', '.activity-close', function () {
                if (_this.activityShow === true) {
                  // 先移除进入时的动画
                  $('.activity-mask').removeClass('activity-animate-in');
                  // 动画开始
                  setTimeout(function () {
                    $('.activity-mask').addClass('activity-animate-out');
                    setTimeout(function () {
                      $('.activity-mask').remove();
                      _this.activityShow = false;
                    }, 800);
                  }, 0);
                }
              });
              // 切换当前展示活动
              $('body').on('click', '.activity-mask .activity-item', function () {
                $(this).siblings().removeClass('activity-item-active');
                $(this).addClass('activity-item-active');
                var index = $(this).attr('data-index');
                _this.rightSwiper.slideTo(index);
              });
            }
          }
        });
      }
    }, {
      key: 'setAnimaitionOrigin',
      value: function setAnimaitionOrigin() {
        var actBottom = $('body').find('.new-plugin-right-buttons').find('.activity-btn').offset().top - $(window).scrollTop();
        console.log(actBottom);
        var style = '<style id="activity-mask-style" type="text/css">\n                                      .activity-mask {\n                                          transform-origin: ' + ($(window).width() - 28) * 100 / $(window).width() + '% ' + (actBottom + 28) * 100 / $(window).height() + '%;\n                                      }\n                                 </style>';
        $('head').append(style);
        $(window).resize(function () {
          var actBottom = $('body').find('.new-plugin-right-buttons').find('.activity-btn').offset().top - $(window).scrollTop();
          var style = '<style id="activity-mask-style" type="text/css">\n                                      .activity-mask {\n                                          transform-origin: ' + ($(window).width() - 28) * 100 / $(window).width() + '% ' + (actBottom + 28) * 100 / $(window).height() + '%;\n                                      }\n                                 </style>';
          $('head').append(style);
        });
      }

      // header滚动显示隐藏

    }, {
      key: 'scrollDirection',
      value: function scrollDirection() {
        var fs = true;
        var beforeScrollTop = $(document).scrollTop();
        $(window).on('scroll', function () {
          var afterScrollTop = $(document).scrollTop();
          var delta = afterScrollTop - beforeScrollTop;
          if (delta >= 10) {
            if (fs) {
              $('.new-plugin-header').stop().animate({
                top: '-100px'
              }, 100, 'linear');
              fs = false;
            }
          } else if (delta < -10) {
            $('.new-plugin-header').stop().animate({
              top: '0px'
            }, 100, 'linear');
            fs = true;
          }
          beforeScrollTop = afterScrollTop;
        });
      }

      // 返回顶部

    }, {
      key: 'toTop',
      value: function toTop() {
        $('.new-plugin-right-buttons').on('click', '.to-top', function () {
          $('body,html').animate({
            scrollTop: 0
          }, 500);
        });
      }

      // 返回顶部按钮显示隐藏

    }, {
      key: 'showToTopBtn',
      value: function showToTopBtn() {
        var _this = this;
        $(window).on('scroll', function () {
          var top = $(document).scrollTop();
          if (top > 300) {
            $('.new-plugin-right-buttons').find('.to-top').css('opacity', '1');
            _this.setAnimaitionOrigin();
          } else {
            $('.new-plugin-right-buttons').find('.to-top').css('opacity', '0');
            _this.setAnimaitionOrigin();
          }
        });
      }

      // 接入智齿客服

    }, {
      key: 'jionUpZhiChi',
      value: function jionUpZhiChi() {
        // zhiManager智齿客服系统JS-API
        var zhiManager = getzhiSDKInstance();
        zhiManager.on("load", function () {
          zhiManager.initBtnDOM();
        });
        zhiManager.set('title', '在线客服'); // 建议长度为 8 个字符之内，文案仅对 PC组件有效，移动端没有文案
        zhiManager.set('customBtn', 'true'); // true 自定义咨询按钮 废弃系统默认按钮
        // zhiManager.set('location',1); 设置入口方位
        // zhiManager.set('horizontal', 200); 设置水平边距，默认水平为 20 像素
        // zhiManager.set('vertical', 300); // 设置垂直边距，默认垂直为 40 像素
        zhiManager.set('size', {
          'width': 480, // 最小宽度360像素，最大宽度640像素，默认360像素
          'height': 620 // 最小高度430像素，最大高度720像素，默认540像素 
        });
        zhiManager.set('customMargin', 100); // 当为左下时，则水平距离左边100px。当为右下时，则水平距离右边100px
      }

      /**
       * 极验证
       */

    }, {
      key: 'geestInit',
      value: function geestInit() {
        var _this = this;
        $.ajax({
          type: 'get',
          url: '/api/front/get_captcha',
          dataType: 'json',
          success: function success(data) {
            initGeetest({
              gt: data['gt'],
              challenge: data['challenge'],
              offline: !data['success'],
              new_captcha: true,
              product: 'bind',
              width: '100%'
            }, function (captchaObj) {
              _this.captchaObj = captchaObj;
              _this.captchaObj.appendTo('#geetest-box');
              _this.captchaObj.onSuccess(function () {
                var result = captchaObj.getValidate();
                $.ajax({
                  url: '/api/front/captcha_valid',
                  type: 'POST',
                  dataType: 'json',
                  data: {
                    geetest_challenge: result.geetest_challenge,
                    geetest_validate: result.geetest_validate,
                    geetest_seccode: result.geetest_seccode
                  }
                }).done(function (data1) {
                  if (data1.status == 'success') {
                    _this.geestRight = true;
                    _this.login(_this.userName, _this.userPass);
                    if (_this.userName && _this.userPass) {
                      $(_this.headerEl).find('.modal-login-btn').addClass('active');
                    }
                  } else {
                    window.alert('验证失败，请重新验证！');
                  }
                });
              });

              $(_this.headerEl).on('click', '.modal-login-btn', function () {
                // 登录
                if (_this.userPass && _this.userName) {
                  captchaObj.verify();
                }
              });

              _this.captchaObj.onError(function (da) {
                console.log(da);
              });
            });
          }
        });
      }

      // 显示登录蒙层

    }, {
      key: 'showLoginModal',
      value: function showLoginModal() {
        $(this.headerEl).find('.login-modal').addClass('active');
        this.geestInit();
      }

      // 关闭登录蒙层

    }, {
      key: 'closeLoginModal',
      value: function closeLoginModal() {
        $(this.headerEl).find('.login-modal').removeClass('active');
        // 清空极验证
        $(this.headerEl).find('#geetest-box').html('');
      }

      // 登录状态监测

    }, {
      key: 'getLoginStatus',
      value: function getLoginStatus() {
        var loginUrl = '/api/front/login_status_check';
        var _this = this;
        $.ajax({
          type: 'post',
          url: loginUrl,
          dataType: 'json',
          success: function success(data) {
            if (data.status == 200) {
              _this.loginStatus = true;
              $(_this.headerEl).find('.user-account').text(data.member.member_name);
              $(_this.headerEl).find('.menu-btns').addClass('hide');
              $(_this.headerEl).find('.user-info').addClass('active');
            } else {
              _this.loginStatus = false;
            }
          }
        });
      }

      // 登录

    }, {
      key: 'login',
      value: function login(username, pwd) {
        var _this = this;
        $.post('/api/front/login', {
          csrf: '414c7ad55625f289003613764448a055',
          username: username,
          pwd: pwd
        }, function (data, textStatus, xhr) {
          data = JSON.parse(data);
          if (data.status == 1) {
            window.location.reload(true);
          } else {
            layer.msg(data.msg);
            $(this.headerEl).find('#geetest-box').empty();
            _this.captchaObj.reset();
          }
        });
      }

      // 退出登录

    }, {
      key: 'logOut',
      value: function logOut() {
        var logoutUrl = "/api/front/logout";
        $.ajax({
          type: 'post',
          url: logoutUrl,
          dataType: 'json',
          success: function success(data) {
            window.location.reload();
          }
        });
      }
    }]);

    return HeaderFooterPlugin;
  }();

  var newPlugin = new HeaderFooterPlugin();

  window.newPlugin = newPlugin;
});