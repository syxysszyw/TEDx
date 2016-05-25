$(function(){
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


	var mobileKManchor = 'https://km.tencent.com/pkm/events/28210';
	if (Modernizr.touchevents) {
		$('#banner_buy').prop('href', mobileKManchor);
	}

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
	});

	// 分享相关
	wx.ready(function() {
        var shareTitle = 'TEDxTencent 2016年度盛典倒计时';
        var shareDesc = '6月6日，让我们一起做探索世界的思想战士';
        var shareLink = window.location.href;
        var shareImg = 'http://cdn.m.tencent.com/hr/TEDxTencent-/share2016.png';

        var shareDate = {
            title: shareTitle,
            desc: shareDesc,
            link: shareLink,
            imgUrl: shareImg
        }

        // 分享给朋友事件绑定
        wx.onMenuShareAppMessage(shareDate);

        // 分享到朋友圈
        wx.onMenuShareTimeline(shareDate);

        // 分享到QQ
        wx.onMenuShareQQ(shareDate);

        // 分享到微博
        wx.onMenuShareWeibo(shareDate);

        // 分享到QQ空间
        wx.onMenuShareQZone(shareDate);

    });

    var cUrl = window.location.href.replace(window.location.hash, '');
    $.ajax({
        url: 'http://5minute.cdc.qq.com/wxjssdk-signature/sign.php',
        type: 'GET',
        data: {url: cUrl},
        dataType: 'jsonp',
        success: function(res) {
            wx.config({
                    debug: false,
                    appId: res.data.appId,
                    timestamp: res.data.timestamp,
                    nonceStr: res.data.nonceStr,
                    signature: res.data.signature,
                    jsApiList: [
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo',
                        'onMenuShareQZone'
                    ]
            });
        }
    });
});