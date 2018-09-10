//$(function() {
//提示弹出框

function g_alert(type, cont, url) {
    //html

    var html = '<div id="g_all"></div><div id="g_box" style="z-index:1; position:fixed"><div id="g_cont"><a class="close" id="SubmitBtn"><svg class="icon-close" viewBox="0 0 1024 1024" p-id="3679"><path d="M1007.564105 1007.551606 1007.564105 1007.551606c-21.797871 21.797871-57.494385 21.797871-79.292257 0l-911.910946-911.910946c-21.797871-21.797871-21.797871-57.494385 0-79.292257l0 0c21.797871-21.797871 57.494385-21.797871 79.292257 0l911.910946 911.910946C1029.461967 950.057221 1029.461967 985.753735 1007.564105 1007.551606z" p-id="3680"></path><path d="M1007.564105 16.448394 1007.564105 16.448394c21.797871 21.797871 21.797871 57.494385 0 79.292257l-911.910946 911.910946c-21.797871 21.797871-57.494385 21.797871-79.292257 0l0 0c-21.797871-21.797871-21.797871-57.494385 0-79.292257l911.910946-911.910946C950.06972-5.449468 985.766234-5.449468 1007.564105 16.448394z" p-id="3681"></path></svg></a><p id="g_msg">' + cont + '</p></div></div>';
    $('body').append(html);

    //css
    var css = "<style id='g_css'>";
    css += "#g_all{width:100%;height:100%; z-index:1; position:fixed;filter:Alpha(opacity=55);background:#000;top:0;left:0;opacity:.55}";
    css += "#g_cont{min-height:120px;height:auto;background-color:#fff;padding:2.5% 0 6%;text-align:left;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;position:relative;z-index:-1;}";
    css += "#g_cont p{text-align:left;padding:0 30px;}";
    css += "#g_cont p#g_msg{display:block;width:100%;font-size:18px;line-height:24px;margin:15px auto 10px;box-sizing:border-box;}";
    css += "#g_cont a.close{display:block;cursor:pointer;width:20px;height:20px;text-align:center;color:#fff;position:absolute;top:10px;right:10px;}"
    css += "#g_cont a.close svg.icon-close{fill:#b0b0b0;width:15px;height:15px;transition: transform .3s ease-in;-webkit-transition: transform .3s ease-in;}";
    css += "#g_cont a.close:hover svg.icon-close{fill:#00b374;-webkit-transform:scale(.9) rotate(180deg);-webkit-transform-origin:50% 50%;transform:scale(.9) rotate(180deg);transform-origin: 50% 50%;}";
    css += "#g_box{width:25%;min-width:300px;}</style>";
    $('head').append(css);

    //类型为confirm
    if (type == 'warn') {}

    function close(){
	$('#g_all').remove();
	$('#g_box').remove();
	$('#g_css').remove();
	return true;
    }

    //点击SubmitBtn
    $('#SubmitBtn').click(function() {
	//$('#g_all').remove();
	//$('#g_box').remove();
	//$('#g_css').remove();
	//return true;
	close();
    });
    $(".cancel").click(function(){
	close();
    })

    //居中
    var _widht = document.documentElement.clientWidth; //屏幕宽
    var _height = document.documentElement.clientHeight; //屏幕高

    var boxWidth = $("#g_box").width();
    var boxHeight = $("#g_box").height();

    $("#g_box").css({
	top: (_height - boxHeight) / 2 + "px",
	left: (_widht - boxWidth) / 2 + "px"
    }); //定位弹出框在屏幕的位置

}
//提示弹出框――END!


//用户选择支付金额

function paysum(price) {
    $('#paymoneya').html(price);
}

$(function() {

    $(".pay_money ul li.leng-detail").click(function() {
	$(this).addClass("leng-selected").siblings().removeClass("leng-selected");
	$(".pay_money .leng-detail input").attr('checked',false);
	$(this).children("input").attr("checked",true);
	paysum($(this).children("input").attr("price"));
    })

})

$(":input[name='ptype']").click(function() {
    $(":input[name='pay_way']").attr("value", $(this).val());
    $(":input[name='bank']").attr("checked", "");

})

$(".pay_money input").click(function() {
    var this_price = $(this).attr("price");
});

//用户选择支付金额----END!



//订单提交信息提示。。
function go_to_pay(oid, pw, aid, pid) {
    var url = '/payment/goto_pay_page';
    var temp_form = document.createElement("form");
    if ($('.order_form').length != 0) {
        alert('请不要重复提交!');
        return false;
    }
    temp_form.action = url;
    temp_form.class = "order_form";
    temp_form.method = "post";
    temp_form.style.display = "none";
    var tempInput = document.createElement("input");
    tempInput.type = "hidden";
    tempInput.name = "order_id";
    tempInput.value = oid;

    temp_form.appendChild(tempInput);
    var tempInput = document.createElement("input");
    tempInput.type = "hidden";
    tempInput.name = "package_id";
    tempInput.value = pid;
    temp_form.appendChild(tempInput);
    var tempInput = document.createElement("input");
    tempInput.type = "hidden";
    tempInput.name = "activity_id";
    tempInput.value = aid;
    temp_form.appendChild(tempInput);

    if (pw != 0) {
        var tempInput = document.createElement("input");
        tempInput.type = "hidden";
        tempInput.name = "pay_way";
        tempInput.value = pw;
        temp_form.appendChild(tempInput);
    }

    document.body.appendChild(temp_form);
    temp_form.submit();
}
