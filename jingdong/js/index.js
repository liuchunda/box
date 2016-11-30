var banner = document.getElementById('banner');
var btnL = banner.getElementsByClassName('btnL')[0];
var btnR = banner.getElementsByClassName('btnR')[0];
var page = document.getElementById('list');
var list = page.getElementsByTagName('li');
var slipes = banner.getElementsByClassName('slipe');
var body = document.body;
var document = document.documentElement;
var nav = document.getElementById('nav');
var shop = document.getElementById('shop');
var shopList = shop.getElementsByClassName('wrap');
var tagList = document.getElementById('tagList');
var tagLists = tagList.getElementsByTagName('li');
var searchMessage =document.getElementById('shopList');
var searchInput=document.getElementById('searchInput');
console.log(searchMessage);
var city=document.getElementById('city');


    ajax({url:'./data/data.json',success:bind});//获取数据


function bind(data){
    var t=0;
    console.log(data);
    var str="";
    for(var i=0;i<7;i++){
        str+=`<ul>`;
        for(var j=0;j<5;j++){
            t++;
            str+=`<li><a href="#">${data[t]}</a></li>`
        }
        str+=`</ul>`;
    }
    console.log(str);
    city.innerHTML=str;
    window.onload();
};


list[0].style.backgroundColor = 'red';
slipes[0].style.opacity = 1;
var page = 0;
var timer1 = null;
function move() {
    page++;
    if (page == 4) {
        page = 0;
    }
    if (page < 0) {
        page = 3;
    }
    for (var i = 0; i < slipes.length; i++) {
        if (page == i) {
            window.clearInterval(timer1);
            var res = 0;
            slipes[page].style.opacity = 0;
            slipes[page].style.zIndex = 2;
            timer1 = window.setInterval(function () {
                slipes[page].style.opacity = res;
                list[page].style.backgroundColor = 'red';
                res += 0.1;
                if (res >= 1) {
                    window.clearInterval(timer1);
                    for (var i = 0; i < slipes.length; i++) {
                        if (i != page) {
                            slipes[i].style.opacity = 0;
                            list[i].style.backgroundColor = 'white';
                        }
                    }
                }
            }, 30);
        } else {
            slipes[i].style.zIndex = 1;
        }

    }
}
var time = window.setInterval(function () {
    move();
}, 2000);
banner.onmouseenter = function () {
    //console.log('clear')
    window.clearInterval(time);
};
banner.onmouseleave = function () {
    //console.log('move');
    time = window.setInterval(function () {
        move();
    }, 2000);
};
btnL.onclick = function () {
    page--;
    page--;
    move();
};
btnR.onclick = function () {
    move();
};
document.onscroll = function () {
    var scroll = document.scrollTop || body.scrollTop;
    if (scroll > 1000) {
        nav.className = 'move';
    } else {
        nav.className = '';
    }
    if (scroll > shopScroll - 200) {
        tagList.className = "tagList tagMove";
    } else {
        tagList.className = "tagList";
    };

    for (var i = 0; i <tagLists.length-1; i++) {
    //    console.log(parseFloat(window.getComputedStyle(shopList[i], null).height)+shopList[i].offsetTop);
        if (parseFloat(window.getComputedStyle(shopList[i], null).height)+shopList[i].offsetTop-400>scroll && scroll >parseFloat(shopList[i].offsetTop)-400) {
            tagLists[i].className='bg';
        }else{
            tagLists[i].className='';
        }
    }
};

var shopScroll = shop.offsetTop;
function offset(pre, xy) {
    if (xy == top) {

    } else {

    }
};
console.log(shop.offsetTop);
for (var i = 0; i < list.length; i++) {
    list[i].index = i;
    list[i].onclick = function () {
        page = this.index - 1;
        move();
    }
}
for (var i = 0; i < shopList.length; i++) {
    tagLists[i].index = i;
    tagLists[i].onclick = function (e) {
        var time = null;
        var curScroll = body.scrollTop || document.scrollTop;
        var targetScroll = shopList[this.index].offsetTop;

        if (curScroll > targetScroll) {
            time = window.setInterval(function () {
                (body.scrollTop = curScroll) || (document.scrollTop = curScroll);
                if (curScroll <= targetScroll) {
                    window.clearInterval(time);
                }
                curScroll -= 80;
            }, 10);
        }
        if (curScroll < targetScroll) {
            time = window.setInterval(function () {
                (body.scrollTop = curScroll) || (document.scrollTop = curScroll);
                if (curScroll >= targetScroll) {
                    window.clearInterval(time);
                }
                curScroll += 80;
            }, 10);
        }
        console.log(this.index);
        for(var i=0;i<shopList.length;i++){
            if(i==this.index){
                tagLists[i].className='bg';
                console.log(i);
            }else {
                tagLists[i].className='';
                console.log(i);
            }
        }
    };
}
function success(data){
    //console.log(54);
    var str="";
    if (data.s){
        searchMessage.style.display='block';
        for(var i=0;i<data.s.length;i++){
            str+=`<li>${data.s[i]}</li>`;
        }
    }else {
        searchMessage.style.display='none';
    }
    searchMessage.innerHTML=str;

    //console.log(str);
    searchMessage.onclick=function(e){
        if (e.target.localName=='li'){
            searchInput.value=e.target.innerHTML;
            searchMessage.style.display='none';
        }
    };
}
searchInput.onkeyup=function(){
    var val=searchInput.value;
    if (val==""){

    }else {
        searchMessage.style.display='block';
    }
    //console.log(searchInput.value);
    $.ajax({
        url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + val,
        type: 'get',
        dataType: 'jsonp',
        jsonp: 'cb',
        //jsonpCallback: 'success',
        success: function (result) {
            success(result);
        }
    });
};
