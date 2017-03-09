$.ajax({
    type : 'get', //posi
    url : "./json/data.txt",
    async : false, //true 异步
    dataType : 'json', //直接处理成json
    success : function (data){ //获取回来的数据
        //成功获取数据需要如何处理 绑定数据
        console.log(data);
    }
});

var mySwiper = new Swiper('.swiper-container',{
    autoplay : 2500,//可选选项，自动滑动
    speed:300,
    loop : true,//可选选项，开启循环
    pagination : '.pagination',
    paginationClickable :true,
    keyboardControl : false,//键盘左右键控制滑动
    mousewheelControl : false,//鼠标滑动控制滑动
    mousewheelControlForceToAxis:false,//鼠标滚动上下滑动
    //pagination : '.pagination',
});
$('#swiper-wrapper').mouseenter(function(){
    $('.displayNone').css('display','block');
}).mouseleave(function(){
    $('.displayNone').css('display','none');
});
$('#banner-prev').click(function(){
    mySwiper.swipePrev();
});
$('#banner-next').click(function(){
    mySwiper.swipeNext();
});

var winW = document.documentElement.clientWidth;
var bg=document.getElementById('head-Wrapper-bg');
bg.style.width=winW+'px';
$('#head-Wrapper-bg').width(winW);
console.log(winW);





//var slider=$('.banner').unslider({
//    speed: 500,               // 动画的速度,没有过度效果时为 false  (整型或布尔型)
//    delay: 3000,              // 幻灯片之间的延迟，没有自动播放时为false（整数或布尔）
//    complete: function() {},  // 播放每张幻灯片后调用的函数
//    keys: false,               // 允许键盘左右键控制
//    dots: true,               // 显示点导航
//    fluid: false              // 支持响应式设计
//});
//var data = slider.data('unslider');



