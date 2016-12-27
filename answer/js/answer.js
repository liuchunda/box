var tag=document.getElementById('tag');
var list=document.getElementById('list');
var aryTitle=[
    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
];
var aryAnswer=[];
var flag=0;
var flag2=1;
console.log(tag);
list.onclick=function(e){
    if (e.target.nodeName=='LI'){
        flag2+=1;
        if (e.target.className=='N'){
            flag+=1;
        };
        tag.innerHTML='第'+flag2+'题'
        if (flag>=3){
            window.location.href='down.html';
        };
        if (flag2==12){
            window.location.href='succeed.html';
        }
    }
};
