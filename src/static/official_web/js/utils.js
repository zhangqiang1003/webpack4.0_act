/* 公共工具*/

// 获取查询字符创的值
function getQueryStringFn(name) {
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
	var r = window.location.search.substr(1).match(reg);
	if (r != null) {
		return unescape(r[2]);
	}
	return null;
}

//获取client下载地址
function getDownloadAddress(dom) {
	var url = '/api/front/get_last_client ';
	$.ajax({
		type: 'post',
		url: url,
		dataType: 'json',
		success: function(data) {
			var downloadUrl = data.client_url;
			if(downloadUrl.indexOf('http') == -1) {
				downloadUrl = 'http://' + downloadUrl;
			}
			$(dom).attr('href', downloadUrl);
		},
		error: function() {
			
		}
	});

	$(dom).click(function(event) {
		getDownloadAmount();
	});
}

// 获取手游加速器Android最新下载客户端
// dom: 下载标签DOM
function getMobileLatestClient(dom, callback) {
	var url = '/api/front/get_last_client ';
	var data = {
		client_type_node: 20
	};
	$.ajax({
		type: 'post',
		url: url,
		data: data,
		dataType: 'json',
		success: function(data) {
			var downloadUrl = data.client_url;
			if(downloadUrl.indexOf('http') == -1) {
				downloadUrl = 'http://' + downloadUrl;
			}
			$(dom).attr('href', downloadUrl);
			callback();
		},
		error: function() {}
	});
}

// 手游加速器下载统计
// cid：渠道来源
// appType：android('android'), ios('ios')
function mobileDownloadAmount(cid, appType) {
	var url = '/api/collector/collect';
	var data = {
		action: 'download',
		cid: cid,
		client_type_node: 20,
		app_type: appType
	};
	$.ajax({
			type: 'post',
			url: url,
			data: data,
			dataType: 'json',
			success: function(data) {
				console.log('amount success');
			},
		});
}

//判断并存入cid
function getcid() {
	var cidReg = /cid=[0-9]+/;
	var href = window.location.href;
	if(href.indexOf('cid=') > -1) {
		var cidStr = href.match(cidReg)[0];
		var cid = cidStr.split('cid=')[1];
		var oldcid = getCookie('cid');
		if (cid == oldcid) {
			document.cookie = 'cid=' + cid + ';path=/';
		} else{
			var date = new Date();
	  		date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
	  		var expires = 'expires=' + date.toUTCString();
	  		document.cookie = 'cid=' + cid + '; ' + expires + ';path=/';
  		}
	}
}

// 从URL中获取cid
function getUrlCid() {
	var url = window.location.href;
	var cid = '';
	if (url.indexOf('cid=') !== -1) {
		cid = (url.split('cid='))[1];
	}
	return cid;
}

//set uv cookie
function setUVCookie() {
	var uvKey = 'UV_random_string';
	var cookieStr = document.cookie;
	if(cookieStr.indexOf(uvKey) == -1) {
		var date = new Date();
		var randomString = generateRandomString(7) + date.getTime();
		var curTamp = (date.getHours() * 60 * 60 * 1000) + 
			(date.getMinutes() * 60 * 1000) + 
			(date.getSeconds() * 1000) +
			(date.getMilliseconds());
		var leftTamp = (24 * 60 * 60 * 1000) - curTamp;
		date.setTime(date.getTime() + leftTamp);
		var expires = 'expires=' + date.toUTCString();
		document.cookie = uvKey + '=' + randomString + '; ' + expires + ';path=/';
	}
}

//generate random string
//input: digit
function generateRandomString(digit) {
	var randomString = '';
	var charArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	for(var i = 0; i < digit; i++) {
		var charTemp = Math.round(Math.random() * (charArray.length - 1));
		randomString += charArray[charTemp];
	}
	return randomString;
}

//post下载量
function getDownloadAmount() {
	var url = '/api/collector/collect';
	var findcid = document.cookie.indexOf('cid'); 
	var data = {action: 'download'};
	if(findcid != -1) { 
		data.cid = getCookie('cid');
	}
	$.ajax({
			type: 'post',
			url: url,
			data: data,
			dataType: 'json',
			success: function(data) {

			},
		});
}

//获取cookie
function getCookie(cname){
	var name = cname + '=';
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name) == 0)
		return c.substring(name.length, c.length);
	}
	return '';
}

// 判断微信浏览器
function checkWXBrowser() {
	var returnObj = false;
	const ua = window.navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) != null && ua.match(/MicroMessenger/i)[0] === 'micromessenger') {
		returnObj = true;
	} else {
		returnObj = false;
	}
	return returnObj;
}

// 判断Android or ios
function checkAndroidOrIos() {
	var ret = 'other';
	var u = navigator.userAgent;
	if ((u.indexOf('Android') > -1) || (u.indexOf('Adr') > -1)) {
		ret = 'android';
	} else if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
		ret = 'ios';
	}
	return ret;
}

// 获取登录状态
function getLoginStatus() {
	var url = '/api/front/login_status_check';
	$.ajax({
		type: 'post',
		url: url,
		data: {},
		dataType: 'json',
		success: function(data) {
			
		}
	});
}

getcid();
setUVCookie();