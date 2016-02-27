// JavaScript Document
/*
	长沙天二科技有限公司 2014 ? @BAYEE QQ:330850319
	http://www.t2wl.com 
	js件 罗明星
	2014-10-27
*/



/*QQ滚动事件*/
var scroll_to;
$(document).ready(function() {
    $(window).scroll(function(){
		
		var bot=1859;//qq显示
		
		scroll_to=(bot+$(window).scrollTop())>=($(document).height()-$(window).height())
		if(scroll_to){
			if(width_a1>=1298)//判断宽度
			$("#qq").css({display:"block"});
			}
		})
});


$(document).ready(function() {
    $(window).scroll(function(){
		
		var bot=1859;//qq隐藏
		if((bot+$(window).scrollTop())<=($(document).height()-$(window).height())){
			$("#qq").css({display:"none"});
			}
		})
});


function small_a(){
	$("#qq").css({background:"url(img/QQ22.png) no-repeat right top"});
	$("#small").css({display:"none"});
	$("#intoa").css({display:"none"});
	$("#max").css({display:"block"});
}

function max_a(){
	$("#qq").css({background:"url(img/QQ11.png) no-repeat center"});
	$("#max").css({display:"none"});
	$("#small").css({display:"block"});
	$("#intoa").css({display:"block"});
	
}

var width_a1;
			
autoWidth1();
window.onresize=autoWidth1;
function autoWidth1(){
	
	width_a1=$(window).eq(0).width();
	if(width_a1<1298){$("#qq").css({display:"none"});}
 	else if(scroll_to) {$("#qq").css({display:"block"});}/*判断位置*/
}
