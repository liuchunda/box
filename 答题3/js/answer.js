var tag=document.getElementById('tag');
var list=document.getElementById('list');
var aryTitle=[
    {topic:'2016',a:'',b:'',c:'',d:''},{topic:'',a:'',b:'',c:'',d:''},{topic:'',a:'',b:'',c:'',d:''},{topic:'',a:'',b:'',c:'',d:''},{topic:'',a:'',b:'',c:'',d:''},{topic:'',a:'',b:'',c:'',d:''},{topic:'',a:'',b:'',c:'',d:''},{topic:'',a:'',b:'',c:'',d:''},{topic:'',a:'',b:'',c:'',d:''},{topic:'',a:'',b:'',c:'',d:''},{topic:'',a:'',b:'',c:'',d:''},{topic:'',a:'',b:'',c:'',d:''},{topic:'',a:'',b:'',c:'',d:''},{topic:'',a:'',b:'',c:'',d:''},{topic:'',a:'',b:'',c:'',d:''},{topic:'',a:'',b:'',c:'',d:''}
];
var aryAnswer=['c','c','c','b','b','b','c','c'];
var aryNunmber=['一','二','三'];
var flag=0;
var flag2=0;
list.onclick=function(e){
    if (e.target.nodeName=='LI'){
        var curVal=e.target.getAttribute('flag');
        if (aryAnswer[flag2]!=curVal){
            flag+=1;
            console.log(0);
        }
        flag2+=1;
        tag.innerHTML='第'+flag2+'题';
        if (flag>=3){
            window.location.href='fault.html';
        };
        if (flag2==12){
            window.location.href='succeed.html';
        }
    }
};
