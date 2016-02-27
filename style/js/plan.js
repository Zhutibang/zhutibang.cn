
/*-----------------------界面设计-----------------------*/

/*圆圈变化*/

$(".play_ul li a").hover(function(){
	$(this).children("div").children("img").stop(true);
	$(this).children("div").children("img").animate({width:"0px",height:"0px"},500);
},function(){
	$(this).children("div").children("img").animate({width:"118px",height:"118px"},10);
})




/*二楼*/

/*二楼全局变量*/
var ii=0;
var jj=190;
var jj2=464;
var t1=500;
/*初始化二楼*/
jj1=206;			
ll=-500;
for(i=0;i<=$("#change_test li").length;i++){

	$("#change_test li").eq(i).css({top:jj1+"px",opacity:"0"});
	jj1+=86;
	$("#change_test li").eq(i).css({left:ll+"px",opacity:"0"});
	ll-=500
}
/*二楼函数*/
function fun_two_floor(){
	for(ii=0;ii<=$("#change_test li").length;ii++){
		jj+=64;
		
		switch(ii){
			case 0:{jj2=464;break;}	
			case 1:{jj2=582;break}
			case 2:{jj2=614;break;}
			case 3:{jj2=616;break;}
			case 4:{jj2=614;break;}
			case 5:{jj2=589;break;}
			case 6:{jj2=542;break;}
		}
		$("#change_test li").eq(ii).animate({left:jj2+"px",opacity:"1"},t1);
		t1+=400;
	}
}


/*三楼*/

/*三楼全局变量*/

/*三楼初始化*/
$("#three_right").css({left:"2000px"})
$("#text_three").css({left:"-1000px"});

/*三楼函数*/
function fun_three_floor(){
	$("#three_right").animate({left:"0px"},1000)
	$("#text_three").animate({left:"0px"},1000);
	}
	
	
/*四楼初始化*/
$("#four_left").css({left:"-2000px"})
$("#text_four").css({left:"2000px"});

/*四楼函数*/
function fun_four_floor(){
	$("#four_left").animate({left:"0px"},1000)
	$("#text_four").animate({left:"566px"},1000);
	}
	
	
	
	
/*四楼初始化*/
$("#four_left2").css({right:"-2000px"});

/*四楼函数*/
function fun_four_floor2(){
	$("#four_left2").animate({right:"0px"},1000)
;
	}
	



	
	

	

	

	
	
	

	

/*滚动事件*/
$(document).ready(function() {
    $(window).scroll(function(){
		
		var bot=4500;//二楼
		if((bot+$(window).scrollTop())>=($(document).height()-$(window).height())){
			fun_two_floor();
			}
			
			
		var bot3=3500;//三楼	
		if((bot3+$(window).scrollTop())>=($(document).height()-$(window).height())){
			fun_three_floor();
			}
			
		var bot4=2700;//四楼	
		if((bot4+$(window).scrollTop())>=($(document).height()-$(window).height())){
			fun_four_floor();
			}
			
				
		var bot5=2200;//四楼	
		if((bot5+$(window).scrollTop())>=($(document).height()-$(window).height())){
			fun_four_floor2();
			}

		
		
		})
});



/*-----------------------H5网站建设-----------------------*/



/*1楼*/

/*1楼全局变量*/

/*1楼初始化*/
$("#three_right_w1").css({left:"2000px"})
$("#text_three_w1").css({left:"-1000px"});

/*1楼函数*/
function fun_three_floor_w1(){
	$("#three_right_w1").animate({left:"0px"},1000)
	$("#text_three_w1").animate({left:"50px"},1000);
	}
/*2楼*/	
	
/*2楼初始化*/
$("#four_left_w2").css({left:"-2000px"})
$("#text_four_w2").css({left:"2000px"});

/*2楼函数*/
function fun_four_floor_w2(){
	$("#four_left_w2").animate({left:"0px"},1000)
	$("#text_four_w2").animate({left:"566px"},1000);
	}
/*3楼*/

/*3楼全局变量*/

/*3楼初始化*/
$("#three_right_w3").css({left:"2000px"})
$("#text_three_w3").css({left:"-1000px"});

/*3楼函数*/
function fun_three_floor_w3(){
	$("#three_right_w3").animate({left:"0px"},1000)
	$("#text_three_w3").animate({left:"50px"},1000);
	}
	
/*4楼*/	
	
/*4楼初始化*/
$("#four_left_w4").css({left:"-2000px"})
$("#text_four_w4").css({left:"2000px"});

/*4楼函数*/
function fun_four_floor_w4(){
	$("#four_left_w4").animate({left:"0px"},1000)
	$("#text_four_w4").animate({left:"566px"},1000);
	}
	
/*5楼*/

/*5楼全局变量*/

/*5楼初始化*/
$("#three_right_w5").css({left:"2000px"})
$("#text_three_w5").css({left:"-1000px"});

/*5楼函数*/
function fun_three_floor_w5(){
	$("#three_right_w5").animate({left:"0px"},1000)
	$("#text_three_w5").animate({left:"50px"},1000);
	}
	
/*6楼*/	
	
/*6楼初始化*/
$("#four_left_w6").css({left:"-2000px"})
$("#text_four_w6").css({left:"2000px"});

/*6楼函数*/
function fun_four_floor_w6(){
	$("#four_left_w6").animate({left:"0px"},1000)
	$("#text_four_w6").animate({left:"566px"},1000);
	}
	

/*7楼全局变量*/

/*7楼初始化*/
$("#three_right_w7").css({left:"2000px"})
$("#text_three_w7").css({left:"-1000px"});

/*7楼函数*/
function fun_three_floor_w7(){
	$("#three_right_w7").animate({left:"0px"},1000)
	$("#text_three_w7").animate({left:"50px"},1000);
	}
	
	
/*8楼*/	
	
/*8楼初始化*/
$("#four_left_w8").css({left:"-2000px"})
$("#text_four_w8").css({left:"2000px"});

/*8楼函数*/
function fun_four_floor_w8(){
	$("#four_left_w8").animate({left:"0px"},1000)
	$("#text_four_w8").animate({left:"566px"},1000);
	}
	
	
/*9楼全局变量*/

/*9楼初始化*/
$("#three_right_w9").css({left:"2000px"})
$("#text_three_w9").css({left:"-1000px"});

/*9楼函数*/
function fun_three_floor_w9(){
	$("#three_right_w9").animate({left:"0px"},1000)
	$("#text_three_w9").animate({left:"50px"},1000);
	}

	
	

	

	


	

	
	
	
	/*滚动事件*/
$(document).ready(function() {
    $(window).scroll(function(){
		

		
		var bot6=4900;//web1楼	
		if((bot6+$(window).scrollTop())>=($(document).height()-$(window).height())){
			fun_three_floor_w1();
			}		
		var bot7=4300;//web2楼	
		if((bot7+$(window).scrollTop())>=($(document).height()-$(window).height())){
			fun_four_floor_w2();
			}
		var bot8=3600;//web3楼	
		if((bot8+$(window).scrollTop())>=($(document).height()-$(window).height())){
			fun_three_floor_w3();
			}
		var bot9=3100;//web4楼	
		if((bot9+$(window).scrollTop())>=($(document).height()-$(window).height())){
			fun_four_floor_w4();
			}
		var bot10=2400;//web5楼	
		if((bot10+$(window).scrollTop())>=($(document).height()-$(window).height())){
			fun_three_floor_w5();
			}
			
		var bot11=2000;//web6楼	
		if((bot11+$(window).scrollTop())>=($(document).height()-$(window).height())){
			fun_four_floor_w6();
			}
			
		var bot12=2000;//web7楼	
		if((bot12+$(window).scrollTop())>=($(document).height()-$(window).height())){
			fun_three_floor_w7();
			}
			
		var bot13=1600;//web8楼	
		if((bot13+$(window).scrollTop())>=($(document).height()-$(window).height())){
			fun_four_floor_w8();
			}
			
		var bot14=800;//web9楼	
		if((bot14+$(window).scrollTop())>=($(document).height()-$(window).height())){
			fun_three_floor_w9();
			}
		


		

		
		})
});






/*-----------------------H5互动营销-----------------------*/



/*1楼*/

/*1楼全局变量*/

/*1楼初始化*/
$("#three_right_h1").css({left:"2000px"})
$("#text_three_h1").css({left:"-1000px"});

/*1楼函数*/
function fun_three_floor_h1(){
	$("#three_right_h1").animate({left:"100px"},1000)
	$("#text_three_h1").animate({left:"50px"},1000);
	}
/*2楼*/	
	
/*2楼初始化*/
$("#four_left_h2").css({left:"-2000px"})
$("#text_four_h2").css({left:"2000px"});

/*2楼函数*/
function fun_four_floor_h2(){
	$("#four_left_h2").animate({left:"0px"},1000)
	$("#text_four_h2").animate({left:"566px"},1000);
	}
/*3楼*/

/*3楼全局变量*/

/*3楼初始化*/
$("#three_right_h3").css({left:"2000px"})
$("#text_three_h3").css({left:"-1000px"});

/*3楼函数*/
function fun_three_floor_h3(){
	$("#three_right_h3").animate({left:"0px"},1000)
	$("#text_three_h3").animate({left:"50px"},1000);
	}
	
/*4楼*/	
	
/*4楼初始化*/
$("#four_left_h4").css({left:"-2000px"})
$("#text_four_h4").css({left:"2000px"});

/*4楼函数*/
function fun_four_floor_h4(){
	$("#four_left_h4").animate({left:"0px"},1000)
	$("#text_four_h4").animate({left:"566px"},1000);
	}
	
/*5楼*/

/*5楼全局变量*/

/*5楼初始化*/
$("#three_right_h5").css({left:"2000px"})
$("#text_three_h5").css({left:"-1000px"});

/*5楼函数*/
function fun_three_floor_h5(){
	$("#three_right_h5").animate({left:"0px"},1000)
	$("#text_three_h5").animate({left:"50px"},1000);
	}
	
/*6楼*/	
	
/*6楼初始化*/
$("#four_left_h6").css({left:"-2000px"})
$("#text_four_h6").css({left:"2000px"});

/*6楼函数*/
function fun_four_floor_h6(){
	$("#four_left_h6").animate({left:"0px"},1000)
	$("#text_four_h6").animate({left:"566px"},1000);
	}
	





	
	/*滚动事件*/
$(document).ready(function() {
    $(window).scroll(function(){
		

		
		var bot15=5000;//web1楼	
		if((bot15+$(window).scrollTop())>=($(document).height()-$(window).height())){
			fun_three_floor_h1();
			}		
		var bot16=4000;//web2楼	
		if((bot16+$(window).scrollTop())>=($(document).height()-$(window).height())){
			fun_four_floor_h2();
			}
		var bot17=3300;//web3楼	
		if((bot17+$(window).scrollTop())>=($(document).height()-$(window).height())){
			fun_three_floor_h3();
			}
		var bot18=2700;//web4楼	
		if((bot18+$(window).scrollTop())>=($(document).height()-$(window).height())){
			fun_four_floor_h4();
			}
		var bot19=2200;//web5楼	
		if((bot19+$(window).scrollTop())>=($(document).height()-$(window).height())){
			fun_three_floor_h5();
			}
			
		var bot20=1600;//web6楼	
		if((bot20+$(window).scrollTop())>=($(document).height()-$(window).height())){
			fun_four_floor_h6();
			}
			
		


		

		
		})
});



/*QQ滚动事件*/
var scroll_to;
$(document).ready(function() {
    $(window).scroll(function(){
		
		var bot=2397;//qq显示
		
		scroll_to=(bot+$(window).scrollTop())>=($(document).height()-$(window).height())
		if(scroll_to){
			if(width_a1>=1298)//判断宽度
			$("#qq").css({display:"block"});
			}
		})
});


$(document).ready(function() {
    $(window).scroll(function(){
		
		var bot=2397;//qq隐藏
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


