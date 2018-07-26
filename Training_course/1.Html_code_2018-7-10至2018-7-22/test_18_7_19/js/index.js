// 轮播图1
var k= 0;
var time;
$(function (){	
	//banner轮播图效果
	$(".swapImg").eq(0).show().siblings().hide();
	showTime();
	$(".shu").click(function() {
	    //获取到当前鼠标所在的下标的索引
	    k = $(this).index();
	    show();
	    clearInterval(time);
	  }, function () {
	    showTime();
	  });
});
//显示图片
function show() {	
	$(".swapImg").eq(k).fadeIn(500).siblings().fadeOut();
	$(".shu").eq(k).addClass("activeNum").siblings().removeClass("activeNum");
}
//设置定时器
function showTime()
   {
     time = setInterval(function () {
       k++;
       if (k == 5) {k = 0;}
       show();
     }, 3000);     
}

// 轮播图2
var i = 0;
var time2;
$(function ()
{
  //获取swapImg的第一个对象并显示，其兄弟元素隐藏
  $(".price_img").eq(0).show().siblings().hide();
  showTime2();
  //点击左右切换
  $(".goLeft").click(function ()
  {
    //点击之前要停止轮播
    clearInterval(time2);
    if (i == 0) {i =3;}
    i--;
    show2();
    showTime2();
  });
  $(".goRight").click(function () {
    //点击之前要停止轮播
    clearInterval(time2);
    if (i == 2) {i = -1;}
    i++;
    show2();
    showTime2();
  });
});
//显示图片
function show2() {
  $(".price_img").eq(i).fadeIn(300).siblings().fadeOut();
}
//设置定时器
function showTime2()
{
  time2 = setInterval(function () {
    i++;
    if (i == 3) {i = 0;}
    show2();
  }, 2000);
}


$(function (){	
	// find 盒子出现————有问题
	$(".find_box").mouseover(function(){
		console.log(222)
		//console.log("ok");
		// $(".find_content").removeClass("hide");
		$(this).find(".find_content").removeClass("hide");
	});
	$(".find_box").mouseout(function(){	
		// $(".find_content").addClass("hide");
		$(this).find(".find_content").addClass("hide");			
	});

	//小铃铛显示信息
	$(".ling_box").mouseover(function(){
		// console.log("ok");
		$(this).find(".ling_detail").show();
	});
	$(".ling_box").mouseout(function(){	
		// $(".head_detail").addClass("hide");
		$(this).find(".ling_detail").hide();			
	});

	//划过用户头像显示信息
	$(".head_img").mouseover(function(){
		console.log("ok");
		$(this).find(".head_detail").show();
	});
	$(".head_img").mouseout(function(){	
		// $(".head_detail").addClass("hide");
		$(this).find(".head_detail").hide();			
	});
});

	//回顶部标签
	$(document).scroll(function(){   //页面加载时，获取滚动条初始高度
		var distance = $(document).scrollTop();  //获取滚动条初始高度的值 ：0
		console.log(distance); //打印滚动条不同高度的位置的值
		if(distance >= 700) {  //当滚动条高度为0时
			// console.log("ok");
			$(".fiexdTool").removeClass('hide').addClass('show')  //移除某某css
		} else {
			$(".fiexdTool").removeClass('show').addClass('hide')   //添加某某css
		}		

		// 广告位置right_ad定位
		if(distance >= 1200) {  //当滚动条高度为0时
			// console.log("ok");
			$(".right_ad").addClass('right_ad_fiexd')  
		}else{
			$(".right_ad").removeClass('right_ad_fiexd')  
		} 

	});

//点击事件设置定时器动画滚动向上
	$(function(){
		$('.fiexdTool').click(function(){
			console.log(7777);
			$('html,body').animate({scrollTop:0+'px'},1000);
		})
	})

