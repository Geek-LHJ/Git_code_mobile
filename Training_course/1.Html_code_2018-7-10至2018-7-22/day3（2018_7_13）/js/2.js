/**
 * Created by geeklhj on 2018/7/13.
 */
var i = 0;
var time;
$(function ()
{
  //获取swapImg的第一个对象并显示，其兄弟元素隐藏
  $(".swapImg").eq(0).show().siblings().hide();
  showTime();
  //当鼠标放到下标上显示该图片，鼠标移走继续轮播
  $(".tab").hover(
    function () {
      //获取到当前鼠标所在的下标的索引
      i = $(this).index();
      show();
      clearInterval(time);
    }, function () {
      showTime();
    });
  //点击左右切换
  $(".btnLeft").click(function ()
  {
    //点击之前要停止轮播
    clearInterval(time);
    if (i == 0) {
      i =6;
    }
    i--;
    show();
    showTime();
  });
  $(".btnRight").click(function () {
    //点击之前要停止轮播
    clearInterval(time);
    if (i == 5) {
      i = -1;
    }
    i++;
    show();
    showTime();
  });
});
//显示图片
function show() {
  $(".swapImg").eq(i).fadeIn(300).siblings().fadeOut();
  $(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
}
//设置定时器
function showTime()
{
  time = setInterval(function () {
    i++;
    if (i == 6) {i = 0;}
    show();
  }, 2000);
}
