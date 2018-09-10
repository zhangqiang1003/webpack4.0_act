//判断用户是否登录
$(document).ready(function() {
	var loginStatus = false;

	var loginUrl = "/api/front/login_status_check";
	$.ajax({
		type: 'post',
		url: loginUrl,
		dataType: 'json',
		success: function(data) {
			if(data.status == 200) {
				$("#login-email").text(data.member.member_name);
				$("#not-login-cont").hide();
				$("#login-cont").show();

				loginStatus = true;
			}
			else {
				$("#not-login-cont").show();
				$("#login-cont").hide();

				loginStatus = false;
			}
		},
		error: function() {
			$("#not-login-cont").show();
			$("#login-cont").hide();
			console.log("get userInfo error!");
		}
	});

	//获取用户登陆状态
	function getLoginStatus() {
		return loginStatus;
	}

	//用户退出
	function logout() {
		var logoutUrl = '/api/front/logout';
		$.post(logoutUrl, {}, function(data, textStatus, xhr) {
			data = JSON.parse(data);
			if (data.status == 1) {
				window.location.reload(true);
			}
		});
	}

	$('#login-cont .subnav li:last-child a').attr('href', 'javascript:void(0)');
	$('#login-cont .subnav li:last-child').click(function(event) {
		logout();
	});
	
	//$("ul.subnav").parent().append("<a></a>"); 只显示下拉时已启用 js-触发后 ul.subnav 添加空 a 标记
	$(".topnav a.username").hover(function() { //在单击(.click)触发器时......
		//下列事件应用于 subnav 本身 （向上和向下移动 subnav)
		$(this).parent().find("ul.subnav").slideDown(100).show(100); //下拉列表上单击 subnav.slideDown
		$("#tabs ul li a.first").click(function(){
			$(this).addClass("a.first").siblings().removeClass("a.first");	
		})

		$(this).parent().hover(function() {}, function(){	
			$(this).parent().find("ul.subnav").slideUp(200) //当鼠标悬停从 subnav 时，将其移动备份
		});

		//以下事件被适用于 （悬停事件触发器） 的触发器
		}).hover(function() { 
			$(this).addClass("subhover"); //上悬停，添加类"subhover"
		}, function(){	//悬停时出
			$(this).removeClass("subhover"); //悬停时出去，删除"subhover"类
	});
});