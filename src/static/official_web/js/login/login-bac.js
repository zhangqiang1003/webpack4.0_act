/*
登录注册弹框
直接套用登录注册逻辑后期重构再进行优化处理
使用：1.引入js  
		<script type="text/javascript" src="/static/specials/js/jquery.js"></script>
		<script type="text/javascript" src="/static/official_web/js/login/gt.js"></script>
		<script type="text/javascript" src="/static/plugins/layer/layer.js"></script>
		<script type="text/javascript" src="/static/official_web/js/login/login.js"></script>
		<script type="text/javascript" src="/static/official_web/js/login/clipboard.min.js"></script>
	2.$(function() {
		with(plugin) {
			login_init();//页面初始化调用
		}
		with(plugin) {
			login_register();//根据事件调用
			login_login();
		}
	})
*/
;(function(undefined) {
    "use strict"
    var _global;

    var plugin = {
		login_init: login_init,
		login_register: login_register,
		login_login: login_login,
		// login_register_success: login_register_success,
		// login_forgot_password: login_forgot_password,
		// login_email_identify: login_email_identify,
		// login_tele_identify: login_tele_identify
	};
	function login_init() {
		var style1 = document.createElement("link");
		style1.href = "/static/official_web/css/login/common.css";
		style1.rel = "stylesheet";
		style1.type = "text/css";
		document.getElementsByTagName("HEAD").item(0).appendChild(style1);
		var style2 = document.createElement("link");
		style2.href = "/static/official_web/css/login/account.css";
		style2.rel = "stylesheet";
		style2.type = "text/css";
		document.getElementsByTagName("HEAD").item(0).appendChild(style2);

		// var script1 = document.createElement("script");
		// script1.type = "text/javascript";
		// script1.src = "/static/specials/js/jquery.js";
		// document.getElementsByTagName("body").item(0).appendChild(script1);
		// var script2 = document.createElement("script");
		// script2.type = "text/javascript";
		// script2.src = "/static/official_web/js/login/gt.js";
		// document.getElementsByTagName("body").item(0).appendChild(script2);
		// var script3 = document.createElement("script");
		// script3.type = "text/javascript";
		// script3.src = "/static/plugins/layer/layer.js";
		// document.getElementsByTagName("body").item(0).appendChild(script3);
		// var script4 = document.createElement("script");
		// script4.type = "text/javascript";
		// script4.src = "/static/official_web/js/login/clipboard.min.js";
		// document.getElementsByTagName("body").item(0).appendChild(script4);

		var mainTem = `
			<div class="plugin-bg">
				<div class="plugin-main">
					<img src="/static/official_web/images/login/close-icon.png" class="plugin-close-icon">
					<div id="plugin-content">
						
					</div>
				</div>
			</div>`;
		$('body').append(mainTem);
		closeWindow();
		$('.plugin-close-icon').click(function(event) {
			closeWindow();
		});
	}
	

	//注册页面
	function login_register() {
		var registerTem = `
			<div class="plugin-head">
				<span class="plugin-head-text">邮箱账号注册</span>
				<span class="plugin-head-tip">已有账号？马上<span id="login-link-id" class="plugin-head-link">登录<span></span>
			</div>
			<div>
				<div class="account-input-cont c-relative">
					<input id="regist-email" type="text" placeholder="邮箱" autocomplete=off class="account-input plugin-input">
					<div class="c-input-checked-icon c-hide regist-email-checked"></div>
				</div>
				<div id="email-tip" class="account-tip-cont">
					<div class="c-error-icon c-hide"></div>
					<div class="c-tip-text">请输入您的qq邮箱</div>
				</div>
			</div>
			<div>
				<div class="account-input-cont c-relative">
					<input id="regist-psw" type="password" placeholder="密码" autocomplete=off class="account-input plugin-input">
					<div class="c-input-checked-icon c-hide regist-psw-checked"></div>
				</div>
				<div id="account-psw-tip" class="c-hide">
					<div class="c-tip-cont psw-check1">
						<div class="c-tip-icon"></div>
						<div class="c-tip-text-black">不能包含空格或特殊字符</div>
					</div>
					<div class="c-tip-cont psw-check2">
						<div class="c-tip-icon"></div>
						<div class="c-tip-text-black">长度6-18位</div>
					</div>
					<div class="c-tip-cont psw-check3">
						<div class="c-tip-icon"></div>
						<div class="c-tip-text-black">必须包含数字、大写和小写字母</div>
					</div>
				</div>
			</div>
			<div>
				<div id="captcha-box" style="margin-top: 20px;margin-bottom: 10px;"></div>
				<div id="machine-verify-tip" class="account-tip-cont c-hide">
					<div class="c-error-icon"></div>
					<div class="c-tip-text c-error-text"></div>
				</div>
			</div>
			<div id="tel-cont" class="c-hide">
				<div>
					<div class="account-tel-cont">
						<div class="account-free-btn plugin-free-btn">免费24小时体验</div>
						<input type="text" placeholder="手机号码" autocomplete=off class="account-tel plugin-tel">
						<div class="c-input-checked-icon c-hide"></div>
					</div>
					<div id="tel-tip" class="account-tip-cont c-hide">
						<div class="c-error-icon"></div>
						<div class="c-tip-text c-error-text"></div>
					</div>
				</div>
				<div id="verify-cont">
					<div class="account-verify-cont">
						<input type="text" placeholder="短信验证码" autocomplete=off class="account-verify-input plugin-verify-input">
						<div class="account-verify-btn c-btn-primary plugin-verify-btn account-verify-btn-disable">发送短信验证码</div>
					</div>
					<div id="verify-tip" class="account-tip-cont c-hide">
						<div class="c-error-icon"></div>
						<div class="c-tip-text c-error-text"></div>
					</div>
				</div>
			</div>
			<div class="account-regist-btn account-regist-btn-disabled c-btn-primary plugin-regist-btn">立即注册</div>
			<div class="account-protocol-tip-cont c-hide">
				<div id="account-protocol-tip">
					<div class="c-error-icon"></div>
					<div class="c-tip-text c-error-text">请先同意服务条款</div>
				</div>
			</div>
			<div class="c-clear">
				<div class="account-protocol">
					<div id="checked" class="c-checkbox c-checkbox-checked"></div>
					<div>我已阅读并同意相关<span onclick="window.open('/category/protocol')">服务条款和隐私政策</span></div>
				</div>
			</div>`;
		$('#plugin-content').html(registerTem);
		openWindow();

		$('#login-link-id').click(function(event) {
			login_login();
		});

		var time = 60;
		var emailCheck = false;
		var passwordCheck = false;
		var telCheck = false;
		var verifyCheck = false;
		var checkboxCheck = true;
		var geetestCheck = false;

		$('#regist-email').focus();
		var handler = function(captchaObj) {
			captchaObj.appendTo('#captcha-box');
		   	captchaObj.onSuccess(function() {
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
			   	})
			   	.done(function(data1) {
			   		if(data1.status == "success") {
			   			geetestCheck = true;
			   			$('#tel-cont').show();
			   			$('#machine-verify-tip').hide();
			   		}
			   		else {
			   			layer.msg("验证失败，请重新验证！");
			   			geetestInit();
			   		}
			   	})
			   	.fail(function() {
			   		console.log("error");
			   	});
		   	});
		   	window.gt = captchaObj;
		};
		var geetestInit = function() {
			$.ajax({
				url: '/api/front/get_captcha',
				type: 'POST',
				dataType: 'json',
			})
			.done(function(data) {
				initGeetest({
				   	gt: data.gt,
				   	challenge: data.challenge,
				   	offline: !data.success,
				   	new_captcha: true,

				   	product: "popup",
				   	width: "100%"
				}, handler)
			})
			.fail(function() {
				console.log("error");
			});
		};
		geetestInit();
		
		$(".c-checkbox").click(function(event) {
			if($(this).attr('id') == "check") {
				$(this).attr('id', 'checked');
				$(this).removeClass('c-checkbox');
				$(this).addClass('c-checkbox-checked');
				$(".account-protocol-tip-cont").hide();
				checkboxCheck = true;
			}
			else {
				$(this).attr('id', 'check');
				$(this).removeClass('c-checkbox-checked');
				$(this).addClass('c-checkbox');
				$(".account-protocol-tip-cont").show();
				checkboxCheck = false;
			}
			registerBtnCheck();
		});

		function emailFn(email) {
			var tel = $('.account-tel').val();
			email = $.trim(email);
			if(email != "") {
				if(!QQEmailCheck(email)) {
					$("#email-tip .c-error-icon").show();
					$("#email-tip .c-tip-text").addClass('c-error-text');
					$("#email-tip .c-tip-text").html("请输入正确qq邮箱");
					$(".regist-email-checked").hide();
					$("#regist-email").addClass('account-input-error');
					emailCheck = false;
					$('#email-tip').show();
					// telephoneFn(tel);
				}
				else {
					$.post('/api/front/is_registered', 
						{
							email: email
						}, 
						function(data, textStatus, xhr) {
							data = JSON.parse(data);
							if (data.status == 0) {
								$("#email-tip .c-error-icon").hide();
								$("#email-tip .c-tip-text").removeClass('c-error-text');
								$("#email-tip .c-tip-text").html("请输入您的qq邮箱");
								$(".regist-email-checked").show();
								$("#regist-email").removeClass('account-input-error');
								emailCheck = true;
								$('#email-tip').hide();
							} 
							else {
								$("#email-tip .c-error-icon").show();
								$("#email-tip .c-tip-text").addClass('c-error-text');
								$("#email-tip .c-tip-text").html(data.msg);
								$(".regist-email-checked").hide();
								$("#regist-email").addClass('account-input-error');
								emailCheck = false;
								$('#email-tip').show();
							}
							// telephoneFn(tel);
							verifyBtnCheck();
							registerBtnCheck();
					});
					
				}
			}
			else {
				$("#email-tip .c-error-icon").show();
				$("#email-tip .c-tip-text").addClass('c-error-text');
				$(".regist-email-checked").hide();
				$("#regist-email").addClass('account-input-error');
				emailCheck = false;
				$('#email-tip').show();
			}
			registerBtnCheck();
		}

		function telephoneFn(tel) {
			if(teleCheck(tel)) {
				$.ajax({
					url: '/api/front/is_registered',
					type: 'POST',
					dataType: 'json',
					data: {
						mobile: tel
					}
				})
				.done(function(data) {
					if(data.status == 1) {
						$('#tel-tip .c-error-text').html("该手机号码已注册");
						$('.account-tel').addClass('account-tel-error');
						$('.account-tel-cont .c-input-checked-icon').hide();
						$('#tel-tip').show();
						telCheck = false;

						$('.account-verify-btn').addClass('account-verify-btn-disable');
						verifyCanSend = false;
					}
					else {
						$('#tel-tip').hide();
						$('#verify-cont').show();
						$('.account-tel').removeClass('account-tel-error');
						$('.account-tel-cont .c-input-checked-icon').show();
						telCheck = true;

						if (emailCheck && time == 60) {
							$('.account-verify-btn').removeClass('account-verify-btn-disable');
							verifyCanSend = true;
						}
					}
				})
				.fail(function() {
					console.log("error");
				});
			}
			else {
				$('#tel-tip .c-error-text').html("请输入正确的手机号码");
				$('.account-tel').addClass('account-tel-error');
				$('.account-tel-cont .c-input-checked-icon').hide();
				$('#tel-tip').show();
				telCheck = false;

				$('.account-verify-btn').addClass('account-verify-btn-disable');
				verifyCanSend = false;
			}
			
			registerBtnCheck();
		}

		$("#regist-email").bind('input propertychange', function(event) {
			var email = $(this).val();
			emailFn(email);
		});

		$("#regist-psw").focus(function(event) {
			$("#account-psw-tip").show();
			
			passwordTip(passwordType($("#regist-psw").val()));
			//$('.password-type-con').show();
		});
		$("#regist-psw").blur(function(event) {
			if(passwordCheck) {
				$("#account-psw-tip").hide();
				$('#regist-psw').removeClass('account-input-error');

				passwordTip(passwordType($("#regist-psw").val()));
				//$('.password-type-con').hide();
			}
			else {
				$('#regist-psw').addClass('account-input-error');
			}
			registerBtnCheck();
		});
		$("#regist-psw").bind('input propertychange', function() {
			passwordTip(passwordType($("#regist-psw").val()));
			//$('.password-type-con').show();

			var psw = $("#regist-psw").val();
			var check1 = false;
			var check2 = false;
			var check3 = false;

			//空格校验
			var charReg = /[^a-zA-Z0-9,\.<>/?;:'\"\[\]\{\}\|\\`~!@#\$%\^&\*\(\)_\+-=]+/;
			if(psw.length == 0) {
				$(".psw-check1 .c-tip-icon").removeClass('c-tip-icon-correct');
				check1 = false;
			}
			else if((psw.indexOf(" ") == -1) && !charReg.test(psw)) {
				$(".psw-check1 .c-tip-icon").addClass('c-tip-icon-correct');
				check1 = true;
			}
			else {
				$(".psw-check1 .c-tip-icon").removeClass('c-tip-icon-correct');
				check1 = false;
			}

			//长度校验
			if((psw.length >= 6) && (psw.length <= 18)) {
				$(".psw-check2 .c-tip-icon").addClass('c-tip-icon-correct');
				check2 = true;
			}
			else {
				$(".psw-check2 .c-tip-icon").removeClass('c-tip-icon-correct');
				check2 = false;
			}

			//数字、大小写字母校验
			var numAndLetterReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/;
			if(numAndLetterReg.test(psw)) {
				$(".psw-check3 .c-tip-icon").addClass('c-tip-icon-correct');
				check3 = true;
			} 
			else {
				$(".psw-check3 .c-tip-icon").removeClass('c-tip-icon-correct');
				check3 = false;
			}

			if(check1 && check2 && check3) {
				$(".regist-psw-checked").show();
				passwordCheck = true;
			}
			else {
				$(".regist-psw-checked").hide();
				passwordCheck = false;
			}
		});

		var verifyCanSend = false;
		$('.account-tel').bind('input propertychange', function(event) {
			var tel = $(this).val();
			telephoneFn(tel);
		});
		$('.account-tel').blur(function(event) {
			var tel = $(this).val();
			telephoneFn(tel);
		});

		function verifyBtnCheck() {
			if (emailCheck && telCheck) {
				$('.account-verify-btn').removeClass('account-verify-btn-disable');
				verifyCanSend = true;
			} 
			else {
				$('.account-verify-btn').addClass('account-verify-btn-disable');
				verifyCanSend = false;
			}
		}

		var verifyDisabled = false;
		//发送验证码event
		$('.account-verify-btn').click(function(event) {
			var mobile = $('.account-tel').val();
			var email = $('#regist-email').val();
			if(geetestCheck) {
				$('#machine-verify-tip').hide();
				if (!verifyDisabled && verifyCanSend) {
					var inter = setInterval(function() {
						if(time <= 0) {
							clearInterval(inter);
							$('.account-verify-btn').removeClass('account-verify-btn-disable');
							$('.account-verify-btn').html("发送短信验证码");
							time = 60;
							verifyDisabled = false;
						}
						else {
							$('.account-verify-btn').addClass('account-verify-btn-disable');
							$('.account-verify-btn').html(time + "s后重新发送");
							verifyDisabled = true;
							time = time - 1;
						}
					}, 1000);
					$.post(
						'/api/front/get_sms_code', 
						{
							'mobile': mobile,
							'email': email
						}, 
						function(data, textStatus, xhr) {
							data = JSON.parse(data);
							if(data.status == 0) {
								$('#verify-tip').hide();
								
							}
							else {
								$('#verify-tip .c-error-text').html(data.msg);
								$('#verify-tip').show();
							}
					});
				}
			}
			else {
				$('#machine-verify-tip .c-error-text').html("请先完成验证");
				$('#machine-verify-tip').show();
			}
		});

		var registerDisabled = true;
		function registerFn() {
			var email = $.trim($('#regist-email').val());
			var password = $('#regist-psw').val();
			var mobile = $('.account-tel').val();
			var verifyCode = $('.account-verify-input').val();
			if (registerDisabled) {
				if (emailCheck && passwordCheck && telCheck && verifyCheck && checkboxCheck && geetestCheck) {
					registerDisabled = false;
					$.post(
						'/api/front/register', 
						{
							email: email,
							password: password,
							mobile: mobile,
							sms_code: verifyCode
						}, 
						function(data, textStatus, xhr) {
							data = JSON.parse(data);
							if (data.status == 1) {
								login_register_success();
							}
							else if(data.status == 3) {
								login_register_success(3);
							}
							else if(data.status == 5) {
								$('#verify-tip .c-error-text').html("验证码错误");
								$('#verify-tip').show();
								registerDisabled = true;
							}
							else {
								registerDisabled = true;
								layer.msg(data.msg);
							}
					});
				}
			}
		}
		$('.account-regist-btn').click(function(event) {
			 registerFn();
		});

		$('.account-verify-input').bind('input propertychange', function(event) {
			var verifyCode = $(this).val();
			if (verifyCode == "") {
				$(this).addClass('account-input-error');
				verifyCheck = false;
			} else {
				$(this).removeClass('account-input-error');
				verifyCheck = true;
			}
			registerBtnCheck();
		});
		$('.account-verify-input').keyup(function(event) {
			if (event.keyCode == 13) {
				registerFn();
			}
		});

		function init() {
			var emial = $('#regist-email').val();
			var tel = $('.account-tel').val();
			emailFn(emial);
			telephoneFn(tel);
		}

		//QQ邮箱校验
		function QQEmailCheck(email) {
			// var QQEmailReg = /^\d{5,12}@[qQ][qQ]\.(com|cn)$/;
			var QQEmailReg = /@([qQ][qQ]|vip\.[qQ][qQ]|hotmail)\.(com|cn)$/;
			return QQEmailReg.test($.trim(email)) && (($.trim(email)).indexOf(' ') == -1);
		}
		//手机号码校验
		function teleCheck(tel) {
			// var telReg = /^1[3|4|5|8][0-9]\d{8}$/;
			var telReg = /^1[0-9]\d{9}$/;
			return telReg.test(tel);
		}

		//注册按钮灰化检查
		function registerBtnCheck() {
			if (emailCheck && passwordCheck && telCheck && verifyCheck && checkboxCheck && geetestCheck) {
				$('.account-regist-btn').removeClass('account-regist-btn-disabled');
			} 
			else {
				$('.account-regist-btn').addClass('account-regist-btn-disabled');
			}
		}

		//密码复杂度判断
		function passwordType(psw) {
			//小写字母
			var reg1 = /^((?![a-z]).)*$/;
			//大写字母
			var reg2 = /^((?![A-Z]).)*$/;
			//数字
			var reg3 = /^((?![0-9]).)*$/;

			if((!reg1.test(psw) && !reg2.test(psw)) || 
				!reg1.test(psw) && !reg3.test(psw) ||
				!reg2.test(psw) && !reg3.test(psw)) {
				if(!reg1.test(psw) && !reg2.test(psw) && !reg3.test(psw)) {
					return 3;
				} else {
					return 2;
				}
			} else {
				return 1;
			}
		}

		//密码复杂度提示 type: 0(不显示) 1(弱) 2(中) 3(强)
		function passwordTip(type) {
			if(type != 0) {
				if(type == 1) {
					$('.password-type-con .password-type-btn:nth-child(1)').css('background', '#FF5B5B');
					$('.password-type-con .password-type-btn:nth-child(2)').css('background', '#EEE');
					$('.password-type-con .password-type-btn:nth-child(3)').css('background', '#EEE');
					$('.password-type-con .password-type-text').css('color', '#CCC');
					$('.password-type-con .password-type-text').html('弱');
				} else if(type == 2) {
					$('.password-type-con .password-type-btn:nth-child(1)').css('background', '#F5A623');
					$('.password-type-con .password-type-btn:nth-child(2)').css('background', '#F5A623');
					$('.password-type-con .password-type-btn:nth-child(3)').css('background', '#EEE');
					$('.password-type-con .password-type-text').css('color', '#CCC');
					$('.password-type-con .password-type-text').html('中');
				} else if(type == 3) {
					$('.password-type-con .password-type-btn:nth-child(1)').css('background', '#00B374');
					$('.password-type-con .password-type-btn:nth-child(2)').css('background', '#00B374');
					$('.password-type-con .password-type-btn:nth-child(3)').css('background', '#00B374');
					$('.password-type-con .password-type-text').css('color', '#00B374');
					$('.password-type-con .password-type-text').html('强');
				}
				$('.password-type-con').show();
			} else {
				$('.password-type-con').hide();
			}
		}
	}
	
	//登录页面
	function login_login() {
		var loginTem = `
			<div class="plugin-head">
				<span class="plugin-head-text">会员登录</span>
				<span class="plugin-head-tip">没有账号？马上<a href="/#/register" target="_blank" id="register-link-id" class="plugin-head-link">注册</a></span>
			</div>
			<div class="account-input-cont c-relative">
				<input id="regist-email" type="text" placeholder="邮箱" class="account-input plugin-input">
				<div class="c-input-checked-icon c-hide regist-email-checked"></div>
			</div>
			<div class="account-input-cont c-relative account-info-mg">
				<input id="regist-psw" type="password" placeholder="密码" class="account-input plugin-input">
				<div class="c-input-checked-icon c-hide regist-psw-checked"></div>
			</div>
			<div id="captcha-box" style="margin-top: 20px;margin-bottom: 10px;"></div>
			<!--<a class="account-forger-text">忘记密码？</a>-->
			<a class="account-regist-btn account-login-mg c-btn-primary plugin-regist-btn account-regist-btn-disabled">登录</a>`;
		$('#plugin-content').html(loginTem);
		openWindow();

		var geetestCheck = false;
		var btnDisable = false;
		var handler = function(captchaObj) {
			captchaObj.appendTo('#captcha-box');
		   	captchaObj.onSuccess(function() {
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
			   	})
			   	.done(function(data1) {
			   		if(data1.status == "success") {
			   			geetestCheck = true;
			   		}
			   		else {
			   			layer.msg("验证失败，请重新验证！");
			   			geetestInit();
			   		}
			   		canclick();
			   	})
			   	.fail(function() {
			   		console.log("error");
			   	});
		   	});
		   	window.gt = captchaObj;
		};
		var geetestInit = function() {
			geetestCheck = false;
			canclick();
			$.ajax({
				url: '/api/front/get_captcha',
				type: 'POST',
				dataType: 'json',
			})
			.done(function(data) {
				initGeetest({
				   	gt: data.gt,
				   	challenge: data.challenge,
				   	offline: !data.success,
				   	new_captcha: true,
				   	product: "popup",
				   	width: "100%"
				}, handler)
			})
			.fail(function() {
				console.log("error");
			});
		};
		geetestInit();

		$('#register-link-id').click(function(event) {
			login_register();
		});

		$('.account-forger-text').click(function(event) {
			login_forgot_password();
		});
		$('#regist-email').bind("input propertychange", function(event) {
			if ($(this).val() != "") {
				$(this).removeClass('account-input-error');
			}
			canclick();
		});
		$('#regist-psw').bind("input propertychange", function(event) {
			if ($(this).val() != "") {
				$(this).removeClass('account-input-error');
			}
			canclick();
		});

		function canclick() {
			var email = $('#regist-email').val();
			var password = $('#regist-psw').val();
			if((email !='') && (password != '') && geetestCheck) {
				btnDisable = true;
				$('.account-regist-btn').removeClass('account-regist-btn-disabled');
			} else {
				btnDisable = false;
				$('.account-regist-btn').addClass('account-regist-btn-disabled');
			}
		}

		function loginFn() {
			if(btnDisable) {
				var email = $('#regist-email').val();
				var password = $('#regist-psw').val();
				if(email == "") {
					$('#regist-email').addClass('account-input-error');
					return;
				}

				if (password == "") {
					$('#regist-psw').addClass('account-input-error');
					return;
				}

				if(!geetestCheck) {
					layer.msg('请完成人机验证！');
					return;
				}

				$.post('/api/front/login', 
					{
						username: email,
						pwd: password,
						csrf: '414c7ad55625f289003613764448a055'
					}, 
					function(data, textStatus, xhr) {
						data = JSON.parse(data);
						if (data.status == 1) {
							window.location.reload(true);
						} 
						else {
							layer.msg(data.msg);
							$('#captcha-box').empty();
							geetestInit();
						}
				});
			}
		}
		$('.account-regist-btn').click(function(event) {
			loginFn();
		});
		$('#regist-psw').keyup(function(event) {
			if (event.keyCode == 13) {
				loginFn();
			}
		});
	}

	//注册成功页面
	function login_register_success() {
		var successTem = `
			<div class="plugin-head">
				<div class="plugin-head-text c-t-center">注册成功</div>
			</div>
			<div class="account-success-img">
				<div class="account-register-success-image"></div>
			</div>
			<div class="c-t-center account-email-cont">
				<span class="account-email-show"></span>
				<!--span class="acount-paper-icon" data-clipboard-action="copy" data-clipboard-target=".account-email-show" title="复制到粘贴板"></span-->
			</div>
			<div class="c-tip-text c-error-text c-float-none c-t-center">30分钟内未验证邮箱，该账号将会被注销。</div>
			<a class="account-regist-btn c-btn-primary plugin-regist-btn" href="" target="_blank">验证邮箱</a>
			<div class="account-email-retry">
				邮件发送失败？
				<a class="account-retry-text" style="display: inline;">重新发送</a>
			</div>`;
		$('#plugin-content').html(successTem);
		var copyDom = document.createElement("span");
		copyDom.setAttribute('class', 'acount-paper-icon');
		copyDom.setAttribute('data-clipboard-action', 'copy');
		copyDom.setAttribute('data-clipboard-target', '.account-email-show');
		copyDom.setAttribute('titile', '复制到粘贴板');
		$('.account-email-cont').append(copyDom);
		openWindow();

		$.post(
			'/api/front/get_register_info', 
			{}, 
			function(data, textStatus, xhr) {
				data = JSON.parse(data);
				$('.account-email-cont .account-email-show').html(data.email);
				$('.account-regist-btn').attr('href', data.email_provider_url);
				$('#copy-email').attr('value', data.email);

				var clipboard = new Clipboard('.acount-paper-icon');
			    clipboard.on('success', function(e) {
			        layer.msg("复制成功");
			    });
			    clipboard.on('error', function(e) {
			        layer.msg("复制失败");
			    });
		});

		$('.account-retry-text').click(function(event) {
			emailRetry();
		});

		function emailRetry() {
			$.post(
				'/api/front/resend_email', 
				{}, 
				function(data, textStatus, xhr) {
					data = JSON.parse(data);
					if (data.status == 1) {
						layer.msg("邮件重发成功，请查收！");
					}
					else {
						layer.msg(data.msg);
					}
			});
		}
		//判断是否已注册，重发邮件
		function isRegister() {
			var url = window.location.href;
			if (arguments.length > 0) {
				emailRetry();
			} 
		}
		isRegister();
	}

	//忘记密码页面
	function login_forgot_password() {
		var forgotTem = `
			<div class="plugin-head">
				<span class="plugin-head-text">填写账号</span>
				<span class="plugin-head-tip">没有账号？马上<span id="register-link-id" class="plugin-head-link">注册<span></span>
			</div>
			<div>
				<div class="account-input-cont c-relative">
					<input id="regist-email" type="text" placeholder="qq邮箱或手机号码" autocomplete=off class="account-input plugin-input">
					<div class="c-input-checked-icon c-hide regist-email-checked"></div>
				</div>
				<div id="email-tip" class="account-tip-cont c-hide">
					<div class="c-error-icon"></div>
					<div class="c-tip-text c-error-text">请输入正确的qq邮箱或手机号码</div>
				</div>
			</div>
			<div>
				<div id="captcha-box" style="margin-top: 20px;margin-bottom: 10px;"></div>
			</div>
			<div class="account-regist-btn c-btn-primary plugin-regist-btn account-regist-btn-disabled">下一步</div>`;
		$('#plugin-content').html(forgotTem);
		openWindow();
		$('#register-link-id').click(function(event) {
			login_register();
		});

		var accountCheck = false;
		var geetestCheck = false;

		var handler = function(captchaObj) {
			captchaObj.appendTo('#captcha-box');
		   	captchaObj.onSuccess(function() {
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
			   	})
			   	.done(function(data1) {
			   		if(data1.status == "success") {
			   			geetestCheck = true;
			   		}
			   		else {
			   			layer.msg("验证失败，请重新验证！");
			   			geetestInit();
			   		}
			   		btnDisabled();
			   	})
			   	.fail(function() {
			   		console.log("error");
			   	});
		   	});
		   	window.gt = captchaObj;
		};
		var geetestInit = function() {
			$.ajax({
				url: '/api/front/get_captcha',
				type: 'POST',
				dataType: 'json',
			})
			.done(function(data) {
				initGeetest({
				   	gt: data.gt,
				   	challenge: data.challenge,
				   	offline: !data.success,
				   	new_captcha: true,

				   	product: "popup",
				   	width: "100%"
				}, handler)
			})
			.fail(function() {
				console.log("error");
			});
		};
		geetestInit();

		$('#regist-email').bind('input propertychange', function(event) {
			var account = $(this).val();
			if (QQEmailCheck(account) || teleCheck(account)) {
				$('#email-tip').hide();
				$(this).removeClass('account-input-error');
				accountCheck = true;
			}
			else {
				$('#email-tip').show();
				$(this).addClass('account-input-error');
			}
			btnDisabled();
		});

		var disabled = false;
		$('.account-regist-btn').click(function(event) {
			var account = $('#regist-email').val();
			
			if (!disabled) {
				disabled = true;
				var type = "email";
				if (QQEmailCheck(account)) {
					type = "email";
				} 
				if (teleCheck(account)) {
					type = "mobile";
				}
				$.post('/api/front/validate_member', 
					{
						member_name: account,
						type: type
					}, 
					function(data, textStatus, xhr) {
						data = JSON.parse(data);
						if (data.status == 1) {
							login_email_identify();
						}
						else if (data.status == 2) {
							login_tele_identify();
						}
						else {
							layer.msg(data.msg);
						}
						disabled = false;
				});
			} else {

			}
		});

		function btnDisabled() {
			if (accountCheck && geetestCheck) {
				$('.account-regist-btn').removeClass('account-regist-btn-disabled');
			} 
			else {
				$('.account-regist-btn').addClass('account-regist-btn-disabled');
			}
		}

		//QQ邮箱校验
		function QQEmailCheck(email) {
			// var QQEmailReg = /^\d{5,12}@[qQ][qQ]\.(com|cn)$/;
			var QQEmailReg = /@([qQ][qQ]|vip\.[qQ][qQ]|hotmail)\.(com|cn)$/;
			return QQEmailReg.test(email);
		}
		//手机号码校验
		function teleCheck(tel) {
			// var telReg = /^1[3|4|5|8][0-9]\d{8}$/;
			var telReg = /^1[0-9]\d{9}$/;
			return telReg.test(tel);
		}
	}

	//email验证页面
	function login_email_identify() {
		var emailTem = `
			<div class="plugin-head">
				<div class="plugin-head-text c-t-center">身份验证</div>
			</div>
			<div class="account-iden-send">验证信息已发送至邮箱：</div>
			<div class="c-t-center account-email-cont">
				<span class="account-email-show"></span>
			</div>
			<a href="" class="account-regist-btn plugin-regist-btn c-btn-primary" target="_blank">查看邮箱</a>
			<div class="account-email-retry">
				邮件未收到？
				<a class="account-retry-text" style="display: inline;">更换手机验证</a>
			</div>`;
		$('#plugin-content').html(emailTem);
		openWindow();
		$('.account-retry-text').click(function(event) {
			login_forgot_password();
		});

		$.post('/api/front/get_reset_info', 
			{}, 
			function(data, textStatus, xhr) {
				data = JSON.parse(data);
				$('.account-email-show').html(data.email);
				$('.account-regist-btn').attr('href', data.email_provider_url);
		});
	}

	//电话验证页面
	function login_tele_identify() {
		var teleTem = `
			<div class="plugin-head">
				<div class="plugin-head-text c-t-center">身份验证</div>
			</div>
			<div class="account-iden-send">请用绑定手机「<span></span>」获取短信验证码：</div>
			<div id="verify-cont">
				<div class="account-verify-tel">
					<input type="text" placeholder="验证码" class="account-verify-input plugin-verify-input">
					<div class="account-verify-btn c-btn-primary plugin-verify-btn">免费获取验证码</div>
				</div>
				<div id="verify-tip" class="account-tip-cont c-hide">
					<div class="c-error-icon"></div>
					<div class="c-tip-text"></div>
				</div>
			</div>
			<a class="account-regist-btn plugin-regist-btn c-btn-primary">确定</a>
			<div class="account-email-retry">
				短信用不了？
				<a class="account-retry-text" style="display: inline;">更换邮箱验证</a>
			</div>`;
		$('#plugin-content').html(teleTem);
		openWindow();
		$('.account-retry-text').click(function(event) {
			login_forgot_password();
		});

		$.post('/api/front/get_reset_info', 
			{}, 
			function(data1, textStatus, xhr) {
				data1 = JSON.parse(data1);
				var teleShow = data1.mobile.substr(0, 3) + "****" + data1.mobile.substr(7);
				$('.account-iden-send span').html(teleShow);

				var time = 60;
				var verifyDisabled = false;
				//发送验证码event
				$('.account-verify-btn').click(function(event) {
					if (!verifyDisabled) {
						$.post(
							'/api/front/get_sms_code', 
							{
								'mobile': data1.mobile,
								'email': data1.email
							}, 
							function(data, textStatus, xhr) {
								data = JSON.parse(data);
								if(data.status == 0) {
									$('#verify-tip').hide();
									var inter = setInterval(function() {
										if(time <= 0) {
											clearInterval(inter);
											$('.account-verify-btn').removeClass('account-verify-btn-disable');
											$('.account-verify-btn').html("发送短信验证码");
											time = 60;
											verifyDisabled = false;
										}
										else {
											$('.account-verify-btn').addClass('account-verify-btn-disable');
											$('.account-verify-btn').html(time + "s后重新发送");
											verifyDisabled = true;
										}
										time = time - 1;
									}, 1000);
								}
								else {
									layer.msg(data.msg);
								}
						});
					}
				});

				function confirmFn() {
					var code = $('.account-verify-input').val();
					$.post('/api/front/validate_reset_sms_code', 
						{
							sms_code: code
						}, 
						function(data, textStatus, xhr) {
							data = JSON.parse(data);
							if (data.status == 1) {
								login_reset_password();
							} 
							else {
								layer.msg(data.msg);
							}
					});
				}
				$('.account-regist-btn').click(function(event) {
					confirmFn();
				});
				$('.account-verify-input').keyup(function(event) {
					if (event.keyCode == 13) {
						confirmFn();
					}
				});
		});
	}
	
	//设置密码页面
	function login_reset_password() {
		var resetTem = `
			<div class="plugin-head">
				<span class="plugin-head-text">设置新密码</span>
				<span class="plugin-head-tip">没有账号？马上<span id="register-link-id" class="plugin-head-link">注册<span></span>
			</div>
			<div>
				<div class="account-input-cont c-relative">
					<input id="regist-psw" type="password" placeholder="新密码" class="account-input plugin-input">
					<div class="c-input-checked-icon c-hide regist-psw-checked"></div>
				</div>
				<div id="account-psw-tip" class="c-hide">
					<div class="c-tip-cont psw-check1">
						<div class="c-tip-icon"></div>
						<div class="c-tip-text-black">不能包含空格或特殊字符</div>
					</div>
					<div class="c-tip-cont psw-check2">
						<div class="c-tip-icon"></div>
						<div class="c-tip-text-black">长度6-18位</div>
					</div>
					<div class="c-tip-cont psw-check3">
						<div class="c-tip-icon"></div>
						<div class="c-tip-text-black">必须包含数字、大写和小写字母</div>
					</div>
				</div>
			</div>
			<div>
				<div class="account-input-cont c-relative">
					<input id="psw-confirm" type="password" placeholder="再次确认新密码" class="account-input plugin-input">
					<div class="c-input-checked-icon c-hide psw-confirm-checked"></div>
				</div>
				<div id="psw-confirm-tip" class="account-tip-cont c-hide">
					<div class="c-error-icon"></div>
					<div class="c-tip-text c-error-text"></div>
				</div>
			</div>
			<div class="account-regist-btn c-btn-primary plugin-regist-btn account-regist-btn-disabled">登录会员中心</div>`;
		$('#plugin-content').html(resetTem);
		openWindow();
		$('#register-link-id').click(function(event) {
			login_register();
		});

		var passwordCheck = false;
		var confirmCheck = false;

		$("#regist-psw").focus(function(event) {
			$("#account-psw-tip").show();
		});
		$("#regist-psw").blur(function(event) {
			if(passwordCheck) {
				$("#account-psw-tip").hide();
				$('#regist-psw').removeClass('account-input-error');
			}
			else {
				$('#regist-psw').addClass('account-input-error');
			}
			totalCheck();
		});
		$("#regist-psw").bind('input propertychange', function() {
			var psw = $("#regist-psw").val();
			var check1 = false;
			var check2 = false;
			var check3 = false;

			//空格校验
			var charReg = /[^a-zA-Z0-9,\.<>/?;:'\"\[\]\{\}\|\\`~!@#\$%\^&\*\(\)_\+-=]+/;
			if(psw.length == 0) {
				$(".psw-check1 .c-tip-icon").removeClass('c-tip-icon-correct');
				check1 = false;
			}
			else if((psw.indexOf(" ") == -1) && !charReg.test(psw)) {
				$(".psw-check1 .c-tip-icon").addClass('c-tip-icon-correct');
				check1 = true;
			}
			else {
				$(".psw-check1 .c-tip-icon").removeClass('c-tip-icon-correct');
				check1 = false;
			}

			//长度校验
			if((psw.length >= 6) && (psw.length <= 18)) {
				$(".psw-check2 .c-tip-icon").addClass('c-tip-icon-correct');
				check2 = true;
			}
			else {
				$(".psw-check2 .c-tip-icon").removeClass('c-tip-icon-correct');
				check2 = false;
			}

			//数字、大小写字母校验
			var numAndLetterReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/;
			if(numAndLetterReg.test(psw)) {
				$(".psw-check3 .c-tip-icon").addClass('c-tip-icon-correct');
				check3 = true;
			} 
			else {
				$(".psw-check3 .c-tip-icon").removeClass('c-tip-icon-correct');
				check3 = false;
			}

			if(check1 && check2 && check3) {
				$(".regist-psw-checked").show();
				passwordCheck = true;
			}
			else {
				$(".regist-psw-checked").hide();
				passwordCheck = false;
			}

			var confirmPsw = $('#psw-confirm').val();
			if((psw != "") && (confirmPsw != "") && (psw != confirmPsw)) {
				$('#psw-confirm-tip').show();
				$('#psw-confirm-tip .c-error-text').html("两次密码输入不一致");
				$('.psw-confirm-checked').hide();
				$(this).addClass('account-input-error');
				confirmCheck = false;
			}
			else {
				$('#psw-confirm-tip').hide();
				$('.psw-confirm-checked').show();
				$(this).removeClass('account-input-error');
				confirmCheck = true;
			}
			// confirmCheckFn();
		});

		function confirmCheckFn() {
			var psw = $('#regist-psw').val();
			var confirmPsw = $('#psw-confirm').val();
			if((psw != "") && (confirmPsw != "") && (psw != confirmPsw)) {
				$('#psw-confirm-tip').show();
				$('#psw-confirm-tip .c-error-text').html("两次密码输入不一致");
				$('.psw-confirm-checked').hide();
				$(this).addClass('account-input-error');
				confirmCheck = false;
			}
			else {
				$('#psw-confirm-tip').hide();
				$('.psw-confirm-checked').show();
				$(this).removeClass('account-input-error');
				confirmCheck = true;
			}
			totalCheck();
		}
		$("#psw-confirm").bind('input propertychange', function(event) {
			confirmCheckFn();
		});

		var disabled = false;
		$('.account-regist-btn').click(function(event) {
			if (!disabled) {
				if (passwordCheck && confirmCheck) {
					disabled = true;
					var password = $('#regist-psw').val();
					var confirm = $('#psw-confirm').val();
					$.post('/api/front/reset_password', 
						{
							password: password,
							password_confirm: confirm
						}, 
						function(data, textStatus, xhr) {
							data = JSON.parse(data);
							if (data.status == 1) {
								layer.open({
									title: "操作提示",
									content: "设置新密码成功，5s后自动跳转登录。",
									time: 5000,
									btn: ["登录会员中心"],
									loginFn: function() {
										login_login();
									}
								});
								loginTimer();
							} 
							else {
								layer.msg(data.msg);
							}
							disabled = false;
					});
				}
			}
		});

		function totalCheck() {
			if (confirmCheck && passwordCheck) {
				$('.account-regist-btn').removeClass('account-regist-btn-disabled');
			} 
			else {
				$('.account-regist-btn').addClass('account-regist-btn-disabled');
			}
		}
		function loginTimer() {
			var time = 5;
			var inter = setInterval(function() {
				time = time - 1;
				if(time < 0) {
					clearInterval(inter);
					login_login();
				}
				else {
					$('.layui-layer-content').html("设置新密码成功，" + time + "s后自动跳转登录。");
				}
			}, 1000);
		}
	}

	//关闭窗口
	function closeWindow() {
		$('.plugin-bg').hide();
	}
	//打开窗口
	function openWindow() {
		$('.plugin-bg').show();
	}

    // 最后将插件对象暴露给全局对象
    _global = (function(){ return this || (0, eval)('this'); }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = plugin;
    } else if (typeof define === "function" && define.amd) {
        define(function(){return plugin;});
    } else {
        !('plugin' in _global) && (_global.plugin = plugin);
    }
}());
