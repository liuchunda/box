setTimeout(function(){
	$('#pages1 .covers_lantern').addClass('p1-covers_lantern');
	$('#pages1 #logo').addClass('p1-logo')
},200)
//初始化，页面刷新的动画
var data=['1','2','3','4','5','6','7','8','9'];
var resultNum=0;
var onOff = true;
function dengMi(index,objInputVal,objSure,objShowLant,objPagesBtn,objTangyuan) {//每个灯谜页面的竞猜
	objInputVal.on('focus',inputVal);
	function inputVal() {
		$(this).val('');
		$(this).addClass('inputChange');
	}

	objSure.on('touchend',isSure);
	function isSure() {
		var userVal=objInputVal.val();
		var answer=data[index-2];
		if (answer===userVal) {
			//resultNum++;通过相等进行加一的操作
			$(this).hide();
			objShowLant.show();
			objShowLant.addClass('lantern');
		}
	}
	objPagesBtn.on('touchend',look);
	function look() {
		$(this).css('background','none').html(data[index-2]);
		objTangyuan.addClass('p3-tangyuan2');
	}
}
var s = new Slider({
	pagination: true,
	"loop": false,
	'direction' : 'vertical',
	"callback":function(index) {
		if(index===0){
			$('#pages1 .covers_lantern').addClass('p1-covers_lantern');
			$('#pages1 #logo').addClass('p1-logo');
		}
		if(index===1){
			$('#pages2 #word1').addClass('p2-word1');
			$('#pages2 #word2').addClass('p2-word2');
			$('#pages2 #pages2_lantern').addClass('p1-logo');
		}
		if(index===2){
			dengMi(index,$('#pages3 .inputVal'),$('#pages3 .sure'),$('#pages3 .show_lantern'),$('#pages3 .pages_btn'),$('#pages3 .tangyuan2'));
			
		}
		if(index===3){
			dengMi(index,$('#pages4 .inputVal'),$('#pages4 .sure'),$('#pages4 .show_lantern'),$('#pages4 .pages_btn'),$('#pages4 .tangyuan2'));
		}
		if(index===4){
			dengMi(index,$('#pages5 .inputVal'),$('#pages5 .sure'),$('#pages5 .show_lantern'),$('#pages5 .pages_btn'),$('#pages5 .tangyuan2'));
		}
		if(index===5){
			dengMi(index,$('#pages6 .inputVal'),$('#pages6 .sure'),$('#pages6 .show_lantern'),$('#pages6 .pages_btn'),$('#pages6 .tangyuan2'));
		}
		if(index===6){
			dengMi(index,$('#pages7 .inputVal'),$('#pages7 .sure'),$('#pages7 .show_lantern'),$('#pages7 .pages_btn'),$('#pages7 .tangyuan2'));
		}
		if(index===7){
			dengMi(index,$('#pages8 .inputVal'),$('#pages8 .sure'),$('#pages8 .show_lantern'),$('#pages8 .pages_btn'),$('#pages8 .tangyuan2'));		
		}
		if(index===8){
			dengMi(index,$('#pages9 .inputVal'),$('#pages9 .sure'),$('#pages9 .show_lantern'),$('#pages9 .pages_btn'),$('#pages9 .tangyuan2'));
		}
		if(index===9){
			dengMi(index,$('#pages10 .inputVal'),$('#pages10 .sure'),$('#pages10 .show_lantern'),$('#pages10 .pages_btn'),$('#pages10 .tangyuan2'));	
		}
		if(index===10){
			dengMi(index,$('#pages11 .inputVal'),$('#pages11 .sure'),$('#pages11 .show_lantern'),$('#pages11 .pages_btn'),$('#pages11 .tangyuan2'));
		}
		if(index===11){
			var str="";
			resultNum=$('.lantern').length;
			for (var i = 0; i<resultNum; i++) {
				str+='<li class="lantern_num"><img src="img/pages_lantern.png" alt=""></li>'
			}
			$('#pages12 #total').html(str);
		}
	}
})
