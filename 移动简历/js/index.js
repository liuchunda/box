var paginations=document.getElementsByClassName('swiper-pagination');
var nav=document.getElementsByClassName('nav');
var list=document.getElementsByClassName('swiper-slide');
var info=document.getElementsByClassName('info')[0];
var work=document.getElementsByClassName('work')[0];
var item=document.getElementById('item');

var mySwiper=new Swiper('.swiper-container',{
    direction:'vertical',
    effect:'slide',//fade cube  coverfllow flip
    loop:true,
    pagination:'.swiper-pagination',/*分页器*/
    //prevButton:'.swiper-button-prev',/*导航按钮*/
    //nextButton:'.swiper-button-next',
    //scrollbar:'.swiper-scrollbar',/*滚动条*/
    onSlideChangeEnd:function(swiper){
        var page=null;
        var slides=swiper.slides;//所有滑块
        var curIndex=swiper.activeIndex;/*当前滑块索引*/
        console.log(curIndex);
        page=curIndex-2;
        if (curIndex==4){
            item.className='list jsList'
        }else {
            item.className='list'
        }
        if(curIndex==2){
            info.className='info rotateInUpLeft animated';
            console.log(11111111111)
        }else {
            info.className='info';
        }
        if(curIndex==3){
            work.className='work swing animated';
            console.log(11111111111)
        }else {
            work.className='work';
        }
        switch (curIndex){
            case 1:page=1;
                break;
            case slides.length-1:page=1;
                break;
        };
        bg(page);
    },
    onInit:function(){

    }
});
function bg(number){
    for(var i=0;i<nav.length;i++){
        var liList=nav[i].getElementsByTagName('li');
        for(var j=0;j<liList.length;j++){
            if (number==j){
                liList[j].className='bg animated shake';
            }else {
                liList[j].className='';
            }

        }
    }
}
var music=document.getElementsByClassName('music')[0];
var beyond=document.getElementById('beyond');
window.setTimeout(function(){
    beyond.play();
},1000);
music.addEventListener("click",function(){
    if(beyond.paused){
        beyond.play();
        music.className="music play"
    }else {
        beyond.pause();
        music.className="music"
    }
});
