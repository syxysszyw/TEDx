var winScreen = $(window).width();
// 窗口自适应方法
function autoDiv() {
	// if ( winScreen < 560 ) {

	// }
	var bannerH = $(window).height() - $(".topbar_content").height();
	$(".banner").css("height", bannerH);

	var windowW = $(window).width();
	var scaleUnit = windowW / 1800;
	if (windowW > 700) {
		$('.banner .TEDxLogos, .ted-line').css({
			'-webkit-transform': 'scale(' + scaleUnit + ')',
			'-ms-transform': 'scale(' + scaleUnit + ')',
			'transform': 'scale(' + scaleUnit + ')'
		})
	} else {
		$('.banner .TEDxLogos, .ted-line').css({
			'-webkit-transform': 'scale(1)',
			'-ms-transform': 'scale(1)',
			'transform': 'scale(1)'
		})
	}
	
}
$(window).resize(function() {
	autoDiv();
})
autoDiv();

//滚屏触发
(function() {
   $backToTopFuna = function() {
		var sta = $(document).scrollTop();
		if ( winScreen > 1171 ) {
			(sta > 20)? $(".header").addClass("active"): $(".header").removeClass("active");
			(sta > 20)? $(".banner").addClass("active"): $(".banner").removeClass("active");
			(sta > 20)? $(".ny_container").addClass("active"): $(".ny_container").removeClass("active");
		};
		
		
	};
	$(window).bind("scroll", $backToTopFuna);
	$(function() { $backToTopFuna(); });
})()


$(document).on('click', '.nav_btn', function(e) {
	$(".nav").toggleClass('show');
	// var $this = $(this);
	// $this
	// var $thisVal = $.trim($this.val());
	// var $thisItem = $this.next('[data-tag="item"]');
	// if ($thisVal) {
	// 	$thisItem.find('[data-tag="txt"]').text($thisVal);
	// 	$this.remove();
	// 	$thisItem.show();
	// } else {
	// 	$this.remove();
	// 	$thisItem.show();
	// }
});
