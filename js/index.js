// 首页幻灯片切换
$(function() {
	var Ani; // 定义动画变量
	var Time = 6000; // 自动播放间隔时间 毫秒
	var num = 800; // 切换图片间隔的时间 毫秒
	var page = 0; // 定义变量
	var len = $(".banner_list li").length; // 获取图片的数量
	$(".banner_list li").css("opacity", 0); // 设置全部的图片透明度为0
	$(".banner_list li:first").css("opacity", 1); // 设置默认第一张图片的透明度为1
	function fun() { // 封装
		$(".banner_bottom_wrap li").eq(page).addClass("current").siblings().removeClass("current"); // 切换小点
		$(".banner_list li").eq(page).addClass("on").animate({
			"opacity": 1
		}, num).siblings().removeClass("on").animate({
			"opacity": 0
		}, num); // 切换图片
	}

	function run() { // 封装
		if (!$(".banner_list li").is(":animated")) { // 判断li是否在动画
			if (page == len - 1) { // 当图片切换到了最后一张的时候
				page = 0; // 把page设置成0 又重新开始播放动画
				Time = 6000;
				fun();
			} else { // 继续执行下一张
				page++;
				Time = 3000;
				fun();
			}
		}
		//console.log(Ani)
	}
	$(".banner_bottom_wrap li").click(function() { // 点击小点
		if (!$(".banner_list li").is(":animated")) { // 判断li是否在动画
			var index = $(".banner_bottom_wrap li").index(this); // 获取点击小点的位置
			page = index; // 同步于page
			fun();
		}
	});

	// if(Ani) clearInterval(Ani);
	// if ( page == len - 1) {
	// 		Time = 6000;
	// 	} else{
	// 		Time = 3000;
	// 	};
	// $( ".banner_bottom_list" ).hover( function(){    // 鼠标放上去图片的时候清除动画
	// 	clearInterval( Ani );
	// }, function(){     // 鼠标移开图片的时候又开始执行动画
	// 	Ani = setInterval( run, Time );
	// }).trigger( "mouseleave" );
	Ani = setInterval(run, Time);
});
var num_user = 2800;
var num_time = 15987;
var max_user = 4300;
var max_time = 21987;
var obj_user = $('.banner_1_txt .num_user');
var obj_time = $('.banner_1_txt .num_time');
var id;

function add() {
	if (num_user < max_user) {
		num_user += 15;
		num_time += 60;
		id = setTimeout("add()", 10);
		obj_user.text(obj_user.val() + num_user);
		obj_time.text(obj_time.val() + num_time);
	} else {
		clearTimeout(id);
	}
}
setTimeout('add()', 3800);