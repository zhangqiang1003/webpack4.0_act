$(function () {
  class HeaderFooterPlugin {
    constructor() {
      this.headerEl = $('.new-plugin-header');
      this.serviceEl = $('.new-plugin-service');
      this.footerEl = $('.new-plugin-footer');
      this.headerStr = `
      <div class="header-container">
      <div class="logo"></div>
      <div class="menus">
        <a href="/#/main/index" class="menu">首页</a>
        <a href="/specials/ljb-overview" class="menu ljb-overview">联机宝</a>
        <a href="/specials/QeeyouMobile" class="menu mobile-game-menu">手游加速器</a>
        <a href="/#/main/service" class="menu">服务</a>
        <a href="/#/main/game" class="menu">游戏</a>
        <a href="/#/main/help" class="menu">帮助</a>
        <a href="/#/main/notice" class="menu">资讯/公告</a>
        <div class="menu-btns">
          <a class="login">登录</a>
          <a class="reg active" href="/#/register" target="_blank">免费注册</a>
        </div>
        <div class="user-info">
          <div class="avatar-container">
            <div class="avatar"></div>
            <a href="/#/member/center" class="user-account"></a>
          </div>
          <div class="user-menu">
            <a href="/#/member/account/update" class="change-pass">修改密码</a>
            <a href="" class="user-log-out">退出</a>
          </div>
        </div>
      </div>
      <div class="login-modal">
        <div class="modal-container">
          <span class="close"></span>
          <div class="modal-logo"></div>
          <label for="username">
            <input type="text" id="username" class="user-name" autocomplete="off" placeholder="手机号码/邮箱">
          </label>
          <label for="userpass">
            <input type="password" id="userpass" class="user-pass" autocomplete="new-password" placeholder="密码">
          </label>
          <div id="geetest-box"></div>
          <button class="modal-login-btn">登录</button>
          <p class="tip">
            <span><a href="/#/forgot-password">忘记密码？</a></span>
            <span>没有奇游账号？<a href="/#/register" class="modal-reg">立即注册</a></span>
          </p>
        </div>
      </div>
    </div>
      `;
      this.serviceStr = `
      <div class="service-container">
      <a class="service-item-wrapper">
        <div class="service-bg">
          <div class="service-top-bg"></div>
          <div class="service-bottom-bg"></div>
        </div>
        <div class="service-dis">
          <h5 class="number">5天</h5>
          <p class="dis">无理由退款</p>
        </div>
      </a>
      <a class="service-item-wrapper">
        <div class="service-bg">
          <div class="service-top-bg"></div>
          <div class="service-bottom-bg"></div>
        </div>
        <div class="service-dis">
          <h5 class="number">24小时</h5>
          <p class="dis">技术运维</p>
        </div>
      </a>
      <a class="service-item-wrapper">
        <div class="service-bg">
          <div class="service-top-bg"></div>
          <div class="service-bottom-bg"></div>
        </div>
        <div class="service-dis">
          <h5 class="number">7x12小时</h5>
          <p class="dis">客服团队支持</p>
        </div>
      </a>
    </div>
      `;
      this.footerStr = `
      <div class="footer-container">
      <div class="top">
        <div class="left-wrapper">
          <div class="footer-logo"></div>
          <div class="left-footer-content">
            <p class="title">产品中心</p>
            <a href="/specials/ljb-overview" target="_blank">联机宝</a>
            <a href="/#/main/index" target="_blank">Windows客户端</a>
            <a href="/specials/QeeyouMobile" target="_blank">手游加速器</a>
          </div>
          <div class="left-footer-content">
            <p class="title">服务中心</p>
            <a href="/#/main/notice/103">充值指南</a>
            <a href="/#/main/service">套餐选择</a>
            <a href="/#/main/notice/104">支付方式</a>
            <a href="/#/main/notice/27">售后政策</a>
          </div>
          <div class="left-footer-content">
            <p class="title">关于</p>
            <a href="http://www.junyun.jobs/">关于我们</a>
            <a href="http://www.junyun.jobs/">诚征英才</a>
            <a href="/#/main/notice/83">用户协议</a>
            <a href="/#/main/brand-intro">品牌</a>
          </div>
        </div>
        <div class="right-wrapper">
          <div class="contact-us">
            <h5 class="phone">0871-65099992</h5>
            <p class="time">周一至周日 9:30-21:30</p>
          </div>
          <div class="cell-center">
            <a href="https://www.sobot.com/chat/pc/index.html?sysNum=072c38afdfa44956a84fc2fcc697b069" target="_blank" class="online">在线客服</a>
            <a href="http://wpa.qq.com/msgrd?v=3&uin=1205205970&site=qq&menu=yes" target="_blank" class="complain">投诉建议</a>
            <div class="shares">
              <div class="share-item weixin">
                <div class="share-qrcode">
                  <div class="qrcode-item">
                    <div class="qrcode weixin"></div>
                    <p>奇游电竞加速器</p>
                  </div>
                </div>
              </div>
              <div class="share-item weibo">
                <div class="share-qrcode weibo-share">
                  <div class="qrcode-item">
                    <div class="qrcode weibo"></div>
                    <p>
                      <a href="https://weibo.com/u/3647878343" target="_blank">奇游电竞加速器</a>
                    </p>
                  </div>
                  <div class="qrcode-item">
                    <div class="qrcode weibo-ljb"></div>
                    <p>
                      <a href="https://weibo.com/u/6415004550" target="_blank">奇游联机宝</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="bottom">
        <div class="info">
          <p class="copyright">
            <span>©2014-2018 奇游电竞加速器 All Rights Reserved </span>
            <span>昆明俊云科技有限公司</span>
          </p>
          <p class="put-on-records ">滇公网安备 53010302000130号 滇ICP备14005523号-1 ICP证编号：滇B2-20160043</p>
        </div>
      </div>
    </div>
      `;
      this.rightBtnStr = `<div class="new-plugin-right-buttons">
      <div class="item activity-btn" title="限时活动"><span></span></div>
      <div class="activities-wrapper">
      </div>
      <div class="item zhi-chi zhiCustomBtn" id="zhichiScript" title="在线客服"><span></span></div>
      <div class="item to-top" title="返回顶部"><span></span></div>
    </div>`;
      // this.rightBtnStr = `<div class="new-plugin-right-buttons-temporary">
      //     <div class="item righte-btn-title-temporary">钜惠活动</div>
      //   <div class="item activity-btn-temporary"><a href="/specials/20180831BananaCamera" target="_blank"><span class="act-icon"></span>集结猎人激活折扣</a></div>
      //   <div class="item activity-btn-temporary"><a href="/specials/20180901ljb_presell" target="_blank"><span class="act-icon"></span>联机宝畅玩版预售</a></div>
      //   <div class="item activity-btn-temporary"><a href="/specials/fourYearBrandPublicity" target="_blank"><span class="act-icon"></span>品牌升级电竞赋能</a></div>
      //   <div class="item zhi-chi zhiCustomBtn" id="zhichiScript" title="在线客服"><span class="act-kf"></span>客服服务</div>
      //   <div class="item to-top-temporary to-top"><span class="act-go-top"></span>顶部</div>
      // </div>`;
      this.activityStr = `<div class="activity-mask">
        <div class="relative activity-wrapper">
            <div class="activity-close">
                <img src="/static/specials/images/close40x40.png">
            </div>
            <div class="activity-replace01">
              <div class="right-btn-swiper-container">
                <div class="swiper-wrapper">
                </div>
              </div>
            </div>
        </div>
        <div>
            <div class="activity-replace02">
            </div>
         </div>
       </div>`;
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
    init(theme = 'white') {
      $($('head')[0]).append(`<link rel="stylesheet" type="text/css" href="/static/specials/css/swiper4.3.5.css">`);
      $($('head')[0]).append(`<script src="/static/specials/js/swiper4.3.5.js"></script>`)
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
      $(this.headerEl).on('click', '.login', () => { // 显示登录蒙层
        this.showLoginModal();
      });

      $(this.headerEl).on('click', '.close', () => { // 关闭蒙层
        this.closeLoginModal();
      });

      $(this.headerEl).on('input propertychange', 'input', (e) => { // input框监测
        this.userName = $(this.headerEl).find('.user-name').val();
        this.userPass = $(this.headerEl).find('.user-pass').val();
        if (this.userName && this.userPass) {
          $(this.headerEl).find('.modal-login-btn').addClass('active');
        } else {
          $(this.headerEl).find('.modal-login-btn').removeClass('active');
        }
      });

      $(this.headerEl).on('click', '.user-log-out', () => {
        this.logOut();
      })

      if (window.location.pathname === '/specials/QeeyouMobile') {
        $('.new-plugin-header').find('.mobile-game-menu').addClass('active');
      }
      if (window.location.pathname === '/specials/ljb-overview') {
        $('.new-plugin-header').find('.ljb-overview').addClass('active');
      }
    }

    getActivity() {
      let _this = this;
      $.ajax({
        type: 'post',
        url: '/api/category/index',
        dataType: 'json',
        data: {
          'web_type': 'PC'
        },
        success: function (res) {
          _this.activityData = res.data;
          if (_this.activityData.length > 0) { // 如果有活动数据
            $('body').find('.new-plugin-right-buttons .activity-btn').css({
              'display': 'flex',
              'opacity': 1
            })
            var menuStr = ''
            _this.activityData.forEach(function (item) {
              menuStr += `<a href="${item.link}" class="activity-menu" title="${item.title}">${item.title}</a>`
            })
            $('body').find('.activities-wrapper').html(menuStr)
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
                let linkStr = '';
                let itemStr = '';
                _this.activityData.forEach(function(item, index) {
                  linkStr += `
                  <div class="right-btn-activity swiper-slide">
                  <a href="${item.link}">
                      <img src="${item.image}" class="act-img">
                  </a>
                  </div>
                  `
                  itemStr += `<div data-index="${ index }" class="activity-item ${ index===0?'activity-item-active':''}">
                                            <div class="activity-item-bg"></div>
                                            <div class="activity-item-inner">${item.title }</div>
                                        </div>`
                })
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

                setTimeout(function(){
                  _this.rightSwiper = new Swiper('.right-btn-swiper-container', {
                    loop: false,
                    autoplay: true,
                    on: {
                      slideChangeTransitionEnd: function() {
                        var activeIndex = this.activeIndex
                        $('body').find('.activity-mask').find('.activity-item').removeClass('activity-item-active')
                        $('body').find('.activity-mask').find(`[data-index='${activeIndex}']`).addClass('activity-item-active')
                      }
                    }
                  }, 1000)
                })
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
            })
          }
        }
      })
    }

    setAnimaitionOrigin() {
      var actBottom = $('body').find('.new-plugin-right-buttons').find('.activity-btn').offset().top - $(window).scrollTop();
      console.log(actBottom)
      const style = `<style id="activity-mask-style" type="text/css">
                                      .activity-mask {
                                          transform-origin: ${($(window).width() - 28)*100/$(window).width()}% ${(actBottom + 28)*100/$(window).height()}%;
                                      }
                                 </style>`;
      $('head').append(style);
      $(window).resize(function () {
        var actBottom = $('body').find('.new-plugin-right-buttons').find('.activity-btn').offset().top - $(window).scrollTop();
        const style = `<style id="activity-mask-style" type="text/css">
                                      .activity-mask {
                                          transform-origin: ${($(window).width() - 28)*100/$(window).width()}% ${(actBottom + 28)*100/$(window).height()}%;
                                      }
                                 </style>`;
        $('head').append(style);
      });
    }

    // header滚动显示隐藏
    scrollDirection() {
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
    toTop() {
      $('.new-plugin-right-buttons').on('click', '.to-top', function () {
        $('body,html').animate({
          scrollTop: 0
        }, 500);
      })
    }

    // 返回顶部按钮显示隐藏
    showToTopBtn() {
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
    jionUpZhiChi() {
      // zhiManager智齿客服系统JS-API
      var zhiManager = (getzhiSDKInstance());
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
    geestInit() {
      var _this = this;
      $.ajax({
        type: 'get',
        url: '/api/front/get_captcha',
        dataType: 'json',
        success: function (data) {
          initGeetest({
              gt: data['gt'],
              challenge: data['challenge'],
              offline: !data['success'],
              new_captcha: true,
              product: 'bind',
              width: '100%'
            },
            captchaObj => {
              _this.captchaObj = captchaObj;
              _this.captchaObj.appendTo('#geetest-box');
              _this.captchaObj.onSuccess(() => {
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

              $(_this.headerEl).on('click', '.modal-login-btn', () => { // 登录
                if (_this.userPass && _this.userName) {
                  captchaObj.verify()
                }
              });

              _this.captchaObj.onError(function (da) {
                console.log(da);
              })
            }
          );
        }
      });
    }

    // 显示登录蒙层
    showLoginModal() {
      $(this.headerEl).find('.login-modal').addClass('active');
      this.geestInit();
    }

    // 关闭登录蒙层
    closeLoginModal() {
      $(this.headerEl).find('.login-modal').removeClass('active');
      // 清空极验证
      $(this.headerEl).find('#geetest-box').html('');
    }

    // 登录状态监测
    getLoginStatus() {
      var loginUrl = '/api/front/login_status_check';
      var _this = this;
      $.ajax({
        type: 'post',
        url: loginUrl,
        dataType: 'json',
        success: function (data) {
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
    login(username, pwd) {
      var _this = this;
      $.post('/api/front/login', {
          csrf: '414c7ad55625f289003613764448a055',
          username,
          pwd
        },
        function (data, textStatus, xhr) {
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
    logOut() {
      var logoutUrl = "/api/front/logout";
      $.ajax({
        type: 'post',
        url: logoutUrl,
        dataType: 'json',
        success: function (data) {
          window.location.reload();
        }
      })
    }
  }

  var newPlugin = new HeaderFooterPlugin();

  window.newPlugin = newPlugin;
})