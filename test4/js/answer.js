var tag = document.getElementById('tag');
var list = document.getElementById('list');
var blanks=list.getElementsByTagName('p');
var spanText=list.getElementsByTagName('span');
var title =document.getElementById('title');
var listLis=list.getElementsByTagName('li');
var bg=document.getElementById('bg');
var liWidth=parseInt(window.getComputedStyle(listLis[0],null).width);
var aryTitle = [
    {topic: '2016年_____，习近平总书记主持召开网络安全和信息化工作座谈会。', url: './img/answer-deti1.jpg', a: 'A.2月27日', b: 'B.3月19日', c: 'C.4月19日', d: 'D.4月29日'},
    {topic: '下列哪句古语习近平总书记在网络安全和信息化工作座谈会上没有提及。', url: './img/answer-deti2.jpg', a: 'A.聪者听于无声，明着见于未行。', b: 'B.知屋漏者在宇下，知失政者在草野。', c: 'C.日日行，不怕千万里；常常做，不怕千万事。', d: 'D.读书破万卷，下笔如有神。'},
    {topic: '截至2016年7月，中国网民规模达______亿。', url: './img/answer-deti3.jpg', a: 'A. 6.88亿', b: 'B.7.10亿', c: 'C.6.56亿', d: 'D.13亿'},
    {topic: '2016年国家网络安全宣传周在_____举行开幕式等重要活动，这是国家网络安全宣传周首次在北京以外的城市举行。', url: './img/answer-deti4.jpg', a: 'A.上海', b: 'B.武汉', c: 'C.南京', d: 'D.广州'},
    {topic: '根据相关规定，每年____开展国家网络安全宣传周。', url: './img/answer-deti5.jpg', a: 'A.9月第三周 ', b: 'B.10月第二周', c: 'C.11月第三周 ', d: 'D.8月第一周'},
    {topic: '哪座新场馆在第三届世界互联网大会市首次启用，并成为永久场馆？', url: './img/answer-deti6.jpg', a: 'A.南宁国际会展中心（图片）', b: 'B.乌镇大剧院（图片）', c: 'C.博鳌亚洲论坛国际会议中心（图片）', d: 'D.乌镇互联网国际会展中心（图片）'},
    {topic: '下列哪项科技成果没有在世界互联网领先成果发布会推出？', url: './img/answer-deti7.jpg',a: 'A.微软Hololens混合现实全息眼镜', b: 'B.“神威•太湖之光”超级计算机', c: 'C.量子通讯技术', d: 'D.射电望远镜“天眼”'},
    {topic: '2016年11月7日，_____在十二届全国人大常委会第二十四次会议上高票通过。(http://www.cac.gov.cn/2016-11/15/c_111\t9916701.htm)', url: './img/answer-deti8.jpg', a: 'A.《未成年人网络保护条例》', b: 'B.《移动互联网应用程序信息服务管理规定》', c: 'C.《中华人民共和国网络安全法》', d: 'D.《互联网新闻信息服务管理规定》'},
    {topic: '2016年中央网信办牵头开展______系列专项行动，深入整治网络顽疾。', url: './img/answer-deti9.jpg', a: 'A.“清朗” ', b: 'B.“清净”', c: 'C.“清爽”', d: 'D.“清理”'},
    {topic: '今年互联网领域出台了哪些新规定？今年互联网领域出台了哪些新规定？', url: './img/answer-deti10.jpg', a: 'A.网约车新规', b: ' B.互联网广告新规', c: 'C.网络直播新规', d: 'D.以上都有'},
    {topic: '7月25日，全国网信办主任座谈会在京召开，对网站管理问题提出“重双基 强双责”要求，下列不属于要求的是：', url: './img/answer-deti11.jpg', a: 'A.重基本规范', b: 'B.强化网民主体责任', c: 'C.重基础管理', d: 'D.强化属地管理责任'},
    {topic: '十三五”规划纲要中哪个篇章涉及网络强国战略？', url: './img/answer-deti12.jpg', a: 'A.《拓展网络经济空间》', b: 'B.《实现创新驱动发展战略》', c: 'C.《推进农业现代化》', d: 'D.《推动区域协调发展》'}
];
var aryAnswer = ['c', 'd', 'b', 'b', 'a', 'd', 'd', 'c', 'a', 'd', 'b', 'a'];
var aryNunmber = ['一','二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
var flag2 = 0;
bind();
function click(e){
    for(var f=0;f<listLis.length;f++){
        listLis[f].onclick=null;
    }
    if (this.lastChild.nodeName=='SPAN'){
        var answer=this.lastChild.getAttribute('fl');
        for(var i=0;i<listLis.length;i++){
            if (this.lastChild.parentNode==listLis[i]){
                if (answer!=aryAnswer[flag2]){
                    listLis[i].className='n';
                }else {
                    listLis[i].className='y';
                }
            }else {
                listLis[i].className='';
            }
        }
        if (answer!=aryAnswer[flag2]){
            window.setTimeout(window.location.href=('./fault.html'),500);
            return false;
        }
        flag2+=1;
        if (flag2>=12){
            window.location.href=('./succeed.html');
            return true;
        }
        window.setTimeout(bind,300);
    }
};

function bind(){
    var width=0;
    tag.innerHTML='第'+aryNunmber[flag2]+'题';
    bg.src=aryTitle[flag2].url;
    title.innerHTML=aryTitle[flag2].topic;
    for(var i=0;i<spanText.length;i++){
        switch (i){
            case 0:spanText[i].innerHTML=aryTitle[flag2].a;
                break;
            case 1:spanText[i].innerHTML=aryTitle[flag2].b;
                break;
            case 2:spanText[i].innerHTML=aryTitle[flag2].c;
                break;
            case 3:spanText[i].innerHTML=aryTitle[flag2].d;
                break;
        }
        var curWidth=parseInt(window.getComputedStyle(spanText[i],null).width);
        if (curWidth>width){
            width=curWidth;
        };
    };
    for(var j=0;j<blanks.length;j++){
        blanks[j].style.width=(liWidth-width)/2-1+'px';
        listLis[j].className='';
    }
    //list.onclick=click;
    for(var f=0;f<listLis.length;f++){
        listLis[f].onclick=click;
    }
}
