
var ch_a_color="#747474";
/*关于我们*/

var about_time=setInterval("about_s()",8000);
var j=0;
var aboutNum=0;
function about_s(){
$("#about_slide ul").animate({"left":j+"px"},1500)
j-=1160;

switch(aboutNum){
		case 0:$("#about_control_a a").eq(0).css({"background":"url(img/about_control_a1.jpg) no-repeat center"}).siblings("a").css({"background":"url(img/about_control_a2.jpg) no-repeat center"});break;
		case 1: $("#about_control_a a").eq(1).css({"background":"url(img/about_control_a1.jpg) no-repeat center"}).siblings("a").css({"background":"url(img/about_control_a2.jpg) no-repeat center"});break;
		case 2:	$("#about_control_a a").eq(2).css({"background":"url(img/about_control_a1.jpg) no-repeat center"}).siblings("a").css({"background":"url(img/about_control_a2.jpg) no-repeat center"});break;
	}
	
aboutNum++;
if(j<=-3480) {j=0;aboutNum=0;}

}

$("#about_slide").hover(function(){
	clearInterval(about_time);
	
	},function(){
		about_time=setInterval("about_s()",8000);
		});

var aboutIndex;
$("#about_control_a a").hover(function(){
	clearInterval(about_time);
	
	aboutIndex=$(this).index();
	switch(aboutIndex){
		case 0: j=0;$(this).css({"background":"url(img/about_control_a1.jpg) no-repeat center"});$(this).siblings("a").css({"background":"url(img/about_control_a2.jpg) no-repeat center"});aboutNum=0;break;
		case 1: j=-1160;$(this).css({"background":"url(img/about_control_a1.jpg) no-repeat center"});$(this).siblings("a").css({"background":"url(img/about_control_a2.jpg) no-repeat center"});aboutNum=1;break;
		case 2:	j=-2320;$(this).css({"background":"url(img/about_control_a1.jpg) no-repeat center"});$(this).siblings("a").css({"background":"url(img/about_control_a2.jpg) no-repeat center"});aboutNum=2;break;
	}
	about_s();
	},function(){
		$("#about_slide ul").stop(true,true);
		});
$("#about_control_a").hover(function(){
	clearInterval(about_time);
	
	},function(){
		about_time=setInterval("about_s()",8000);
		});


/*banner条*/
var ib=0;
var t_color;
var t_atime;
banner_01();
var banner_time_1=setInterval("banner_01()",7000);

function banner_01(){
	if(ib>3) ib=0;
	switch(ib){/*颜色变化*/
		case 0:{$(".bg_banner").css({background:"#12c49d"}).css({opacity:"0.5"}).animate({opacity:"1"},1000);break;}
		case 1:{$(".bg_banner").css({background:"#213238"}).css({opacity:"0.5"}).animate({opacity:"1"},1000);break;}
		case 2:{$(".bg_banner").css({background:"#eb4688"}).css({opacity:"0.5"}).animate({opacity:"1"},1000);break;}
		case 3:{$(".bg_banner").css({background:"#418bca"}).css({opacity:"0.5"}).animate({opacity:"1"},1000);break;}
		
	}
	
	$("#banner_control_a a").eq(ib).css({background:"url(img/banner_control_01.png) no-repeat center"}).siblings("a").css({background:"url(img/banner_control_02.png) no-repeat center"});/*控制点*/
	
	
	$("#banner img").css({left:"-1500px"});
	$("#banner").children("div:lt(4)").css({left:"-1000px",top:"142px"});

	$("#banner img").eq(ib).animate({left:"329px",top:"12px"},1000).delay(5000).animate({left:"2000px"},1000);
	$("#banner").children("div").eq(ib).animate({left:"0px"},1200).delay(4800).animate({left:"2000px"},1000);
	
	t_color=setTimeout(function(){$(".bg_banner").animate({opacity:"0.5"},1000)},6000);	
	ib++;
	if(ib>4) ib=0;
}

$("#banner_control_a a").click(
	function(){
		if(ib>3) ib=0;
		clearInterval(banner_time_1);
		clearTimeout(t_color);
		clearTimeout(t_atime);
		$("#banner img").stop().stop();
		$("#banner").children("div:lt(4)").stop().stop();
		
		$("#banner img").css({left:"-1500px"});
		$("#banner").children("div:lt(4)").css({left:"-1000px",top:"142px"});


		$(this).css({background:"url(img/banner_control_01.png) no-repeat center"}).siblings("a").css({background:"url(img/banner_control_02.png) no-repeat center"});/*控制点*/		
		ib=$(this).index();
		t_atime=setTimeout("banner_01()",400);
		
		banner_time_1=setInterval("banner_01()",7000);
	}

);


$("#control_left").click(
	function(){
			clearInterval(banner_time_1);
			clearTimeout(t_color);
			clearTimeout(t_atime);
			$("#banner img").stop().stop();
			$("#banner").children("div:lt(4)").stop().stop();
			
			$("#banner img").css({left:"-1500px"});
			$("#banner").children("div:lt(4)").css({left:"-1000px",top:"142px"});
	
			$("#banner_control_a a").css({background:"url(img/banner_control_01.png) no-repeat center"}).siblings("a").css({background:"url(img/banner_control_02.png) no-repeat center"});/*控制点*/	
			ib--;
			ib--;
			if(ib<0) ib=3;
			t_atime=setTimeout("banner_01()",400);
	
			banner_time_1=setInterval("banner_01()",7000);
	}
)

$("#control_right").click(
	function(){
			if(ib>3) ib=0;
		
			clearInterval(banner_time_1);
			clearTimeout(t_color);
			clearTimeout(t_atime);
			$("#banner img").stop().stop();
			$("#banner").children("div:lt(4)").stop().stop();
			
			$("#banner img").css({left:"-1500px"});
			$("#banner").children("div:lt(4)").css({left:"-1000px",top:"142px"});
	
			$("#banner_control_a a").css({background:"url(img/banner_control_01.png) no-repeat center"}).siblings("a").css({background:"url(img/banner_control_02.png) no-repeat center"});/*控制点*/	
			/*ib++;*/
			if(ib>3) ib=0;

			t_atime=setTimeout("banner_01()",400);
	
			banner_time_1=setInterval("banner_01()",7000);
	}
)



/*作品展示部分*/
var width_a;
autoWidth();
window.onresize=autoWidth;
function autoWidth(){
	change_no();
	
width_a=$("#display_box a").eq(0).width();

$("#display_box a").eq(4).css({top:width_a*3/4+"px"});
$("#display_box a").eq(5).css({top:width_a*3/4+"px"});
$("#display_box a").eq(6).css({top:width_a*3/4+"px"});
$("#display_box a").eq(7).css({top:width_a*3/4+"px"});

$("#display_box a").eq(7).css({width:width_a+"px",height:width_a*3/4+"px"});


$(".geli").css({width:width_a+"px",height:width_a*3/4+"px"});
$("#display_box a p").css({width:width_a+"px",height:(0.4*width_a*3/4)+"px"});
$("#display_box a p").css({paddingTop:0.6*width_a*3/4+"px"});
$("#display_box a p").css({fontSize:0.06*width_a*3/4+"px"});
$("#display_box a p").css({backgroundSize:0.1*width_a+"px"});
$("#display_box a p").css({backgroundPosition:"center "+0.28*width_a+"px"});

$(".second_floor").css({height:(952-2*(300-width_a*3/4))+"px"})
}


$("#display_box a").mouseenter(function(){
	$(this).children("div").css("display","block").css("opacity","0.8");
	
	$(this).children("p").css("display","block");
	
	$(this).children("p").stop(true,true).css("top","300px").animate({top:"0px"},1000);
	});
	
$("#display_box a").mouseleave(function(){
	$(this).children("div").css({display:"none"});
	$(this).children("p").css("top","300px");
	$(this).children("p").css("display","none");
})

/*还原函数*/

function change_no(){
	$("#display_box a").stop(true,true).stop(true,true);
	$("#display_box a").children("img").stop(true,true).stop(true,true);
		
	$("#display_box a").children("img").css({width:width_a+"px",height:width_a*3/4+"px",opacity:"1",marginTop:"0px"});

	$("#display_box a").eq(0).css({top:"0px",left:width_a*0+"px"});
	$("#display_box a").eq(1).css({top:"0px",left:width_a*1+"px"});
	$("#display_box a").eq(2).css({top:"0px",left:width_a*2+"px"});
	$("#display_box a").eq(3).css({top:"0px",left:width_a*3+"px"});
	
	$("#display_box a").eq(4).css({top:width_a*3/4+"px",left:width_a*0+"px"});
	$("#display_box a").eq(5).css({top:width_a*3/4+"px",left:width_a*1+"px"});
	$("#display_box a").eq(6).css({top:width_a*3/4+"px",left:width_a*2+"px"});
	$("#display_box a").eq(7).css({top:width_a*3/4+"px",left:width_a*3+"px"});
}

/**/
var len_li=$("#display_box a").length;

/*fuwu*/
ch_fun1();
function ch_fun1(){
	change_no();
	
	/*换地址*/
	for(i_li=0;i_li<len_li;i_li++){
		$("#display_box a").eq(i_li).children("img").attr("src",$("#display_get_1 li").eq(i_li).attr("the_get"));
		$("#display_box a").eq(i_li).children("p").html($("#display_get_1 li a").eq(i_li).html());
		$("#display_box a").eq(i_li).attr("href",$("#display_get_1 li").eq(i_li).children("a").attr("href"));
		}

	$("#display_box a").eq(0).animate({top:"0px",left:width_a*2+"px"},500);
	$("#display_box a").eq(1).animate({top:"0px",left:width_a*3+"px"},500);
	$("#display_box a").eq(2).animate({top:width_a*3/4+"px",left:width_a*3+"px"},500);
	$("#display_box a").eq(3).animate({top:width_a*3/4+"px",left:width_a*2+"px"},500);
	$("#display_box a").eq(7).animate({top:width_a*3/4+"px",left:width_a*1+"px"},500);
	$("#display_box a").eq(6).animate({top:width_a*3/4+"px",left:width_a*0+"px"},500);
	$("#display_box a").eq(5).animate({top:"0px",left:width_a*0+"px"},500);
	$("#display_box a").eq(4).animate({top:"0px",left:width_a*1+"px"},500);	
	
	$("#change_display a").eq(0).css({color:"#0cb392"}).siblings("a").css({color:"#747474"});ch_a_color="#0cb392";
}

var click_time;
function ch_fun2(){
	change_no();
	
	/*换地址*/
	for(i_li=0;i_li<len_li;i_li++){
		$("#display_box a").eq(i_li).children("img").attr("src",$("#display_get_2 li").eq(i_li).attr("the_get"))
		$("#display_box a").eq(i_li).children("p").html($("#display_get_2 li a").eq(i_li).html())
		$("#display_box a").eq(i_li).attr("href",$("#display_get_2 li").eq(i_li).children("a").attr("href"));
		}

	$("#display_box a").eq(2).children("img").animate({width:"0px",height:"0px",opacity:"0.5",marginTop:"100px"},500).animate({width:width_a+"px",height:width_a*3/4+"px",opacity:"1",marginTop:"0px"},250);
	$("#display_box a").eq(3).children("img").animate({width:"0px",height:"0px",opacity:"0.5",marginTop:"100px"},500).animate({width:width_a+"px",height:width_a*3/4+"px",opacity:"1",marginTop:"0px"},250);
	
	clearTimeout(click_time);
	click_time=setTimeout(function(){$("#display_box a").eq(3).css({top:width_a*3/4+"px",left:width_a+"px"});$("#display_box a").eq(2).css({top:width_a*3/4+"px",left:"0px"});},500);
	
	
	$("#display_box a").eq(6).children("img").css({width:"0px",height:"0xp",opacity:"0.5",marginTop:"100px"}).animate({width:width_a+"px",height:width_a*3/4+"px",opacity:"1",marginTop:"0px"},250);
	$("#display_box a").eq(7).children("img").css({width:"0px",height:"0xp",opacity:"0.5",marginTop:"100px"}).animate({width:width_a+"px",height:width_a*3/4+"px",opacity:"1",marginTop:"0px"},250);
	
	
	$("#display_box a").eq(4).children("img").css({width:"0px",height:"0xp",opacity:"0.5",marginTop:"100px"}).animate({width:width_a+"px",height:width_a*3/4+"px",opacity:"1",marginTop:"0px"},250);
	$("#display_box a").eq(4).animate({top:"0px",left:width_a*2+"px"},500);
	
	$("#display_box a").eq(5).children("img").css({width:"0px",height:"0xp",opacity:"0.5",marginTop:"100px"}).animate({width:width_a+"px",height:width_a*3/4+"px",opacity:"1",marginTop:"0px"},250);	
	$("#display_box a").eq(5).animate({top:"0px",left:width_a*3+"px"},500);
	
	$("#change_display a").eq(1).css({color:"#0cb392"}).siblings("a").css({color:"#747474"});ch_a_color="#0cb392";

}
	
function ch_fun3(){
	change_no();
	
	/*换地址*/
	for(i_li=0;i_li<len_li;i_li++){
		$("#display_box a").eq(i_li).children("img").attr("src",$("#display_get_3 li").eq(i_li).attr("the_get"));
		$("#display_box a").eq(i_li).children("p").html($("#display_get_3 li a").eq(i_li).html());
		$("#display_box a").eq(i_li).attr("href",$("#display_get_3 li").eq(i_li).children("a").attr("href"));
		}

	$("#display_box a").eq(3).animate({top:"0px",left:width_a*2+"px"},500);
	$("#display_box a").eq(6).animate({top:"0px",left:width_a*3+"px"},500);
	
	$("#display_box a").eq(2).children("img").css({width:"0px",opacity:"0.5",marginTop:"100px"}).animate({width:width_a+"px",height:width_a*3/4+"px",opacity:"1",marginTop:"0px"},250);
	
	$("#display_box a").eq(2).animate({top:width_a*3/4+"px",left:width_a*2+"px"},500);

	$("#display_box a").eq(0).animate({top:"0px",left:width_a*1+"px"},500);
	$("#display_box a").eq(5).animate({top:"0px",left:width_a*0+"px"},500);

	$("#display_box a").eq(1).animate({top:width_a*3/4+"px",left:width_a*1+"px"},250);
	
	$("#change_display a").eq(2).css({color:"#0cb392"}).siblings("a").css({color:"#747474"});ch_a_color="#0cb392";

}
	
function ch_fun4(){
	change_no();
	
	/*换地址*/
	for(i_li=0;i_li<len_li;i_li++){
		$("#display_box a").eq(i_li).children("img").attr("src",$("#display_get_4 li").eq(i_li).attr("the_get"));
		$("#display_box a").eq(i_li).children("p").html($("#display_get_4 li a").eq(i_li).html());
		$("#display_box a").eq(i_li).attr("href",$("#display_get_4 li").eq(i_li).children("a").attr("href"));
		}
	
	$("#display_box a").eq(3).animate({top:"0px",left:width_a*2+"px"},500);
	$("#display_box a").eq(6).animate({top:"0px",left:width_a*3+"px"},500);
	
	$("#display_box a").eq(2).children("img").css({width:"0px",height:"0xp",opacity:"0.5",marginTop:"100px"}).animate({width:width_a+"px",height:width_a*3/4+"px",opacity:"1",marginTop:"0px"},250);
	setTimeout(function(){$("#display_box a").eq(2).animate({top:width_a*3/4+"px",left:width_a*2+"px"},500)},500);
	
	$("#display_box a").eq(4).animate({top:"0px",left:width_a*0+"px"},500);
	$("#display_box a").eq(0).animate({top:width_a*3/4+"px",left:width_a*1+"px"},500);
	
	$("#display_box a").eq(5).children("img").css({width:"0px",height:"0xp",opacity:"0.5",marginTop:"100px"}).animate({width:width_a+"px",height:width_a*3/4+"px",opacity:"1",marginTop:"0px"},250);
	setTimeout(function(){$("#display_box a").eq(5).animate({top:width_a*3/4+"px",left:"0px"},500)},500);
	
	$("#change_display a").eq(3).css({color:"#0cb392"}).siblings("a").css({color:"#747474"});ch_a_color="#0cb392";
}

function ch_fun5(){	
	change_no();
	
	/*换地址*/
	for(i_li=0;i_li<len_li;i_li++){
		$("#display_box a").eq(i_li).children("img").attr("src",$("#display_get_5 li").eq(i_li).attr("the_get"));
		$("#display_box a").eq(i_li).children("p").html($("#display_get_5 li a").eq(i_li).html());
		$("#display_box a").eq(i_li).attr("href",$("#display_get_5 li").eq(i_li).children("a").attr("href"));
		}
	
	$("#display_box a").eq(0).css({width:"0px",opacity:"0.5",marginTop:"100px"}).animate({width:width_a+"px",height:width_a*3/4+"px",opacity:"1",marginTop:"0px"},250);
	$("#display_box a").eq(0).animate({top:width_a*3/4+"px",left:width_a*0+"px"},500);
	
	
	$("#display_box a").eq(1).css({width:"0px",opacity:"0.5",marginTop:"100px"}).animate({width:width_a+"px",height:width_a*3/4+"px",opacity:"1",marginTop:"0px"},250);
	$("#display_box a").eq(1).animate({top:width_a*3/4+"px",left:width_a*1+"px"},500);
	
	$("#display_box a").eq(2).css({width:"0px",opacity:"0.5",marginTop:"100px"}).animate({width:width_a+"px",height:width_a*3/4+"px",opacity:"1",marginTop:"0px"},250);
	$("#display_box a").eq(2).animate({top:width_a*3/4+"px",left:width_a*2+"px"},500);
	
	$("#display_box a").eq(3).css({width:"0px",opacity:"0.5",marginTop:"100px"}).animate({width:width_a+"px",height:width_a*3/4+"px",opacity:"1",marginTop:"0px"},250);
	$("#display_box a").eq(3).animate({top:width_a*3/4+"px",left:width_a*3+"px"},500);
	
	$("#display_box a").eq(4).css({width:"0px",opacity:"0.5",marginTop:"100px"}).animate({width:width_a+"px",height:width_a*3/4+"px",opacity:"1",marginTop:"0px"},250);
	$("#display_box a").eq(4).animate({top:"0px",left:width_a*0+"px"},500);
	
	$("#display_box a").eq(5).css({width:"0px",opacity:"0.5",marginTop:"100px"}).animate({width:width_a+"px",height:width_a*3/4+"px",opacity:"1",marginTop:"0px"},250);
	$("#display_box a").eq(5).animate({top:"0px",left:width_a*1+"px"},500);
	
	$("#display_box a").eq(6).css({width:"0px",opacity:"0.5",marginTop:"100px"}).animate({width:width_a+"px",height:width_a*3/4+"px",opacity:"1",marginTop:"0px"},250);
	$("#display_box a").eq(6).animate({top:"0px",left:width_a*2+"px"},500);
	
	$("#display_box a").eq(7).css({width:"0px",opacity:"0.5",marginTop:"100px"}).animate({width:width_a+"px",height:width_a*3/4+"px",opacity:"1",marginTop:"0px"},250);
	$("#display_box a").eq(7).animate({top:"0px",left:width_a*3+"px"},500);
	
	$("#change_display a").eq(4).css({color:"#0cb392"}).siblings("a").css({color:"#747474"});ch_a_color="#0cb392";
}


$("#change_display a").hover(function(){
		ch_a_color=$(this).css("color");
		$(this).css({color:"#0cb392"});
	},function(){
		$(this).css({color:ch_a_color});
	});

/*圆圈变化*/

$(".play_ul li a").hover(function(){
	$(this).children("div").children("img").stop(true);
	$(this).children("div").children("img").animate({width:"0px",height:"0px"},500);
},function(){
	$(this).children("div").children("img").animate({width:"118px",height:"118px"},10);
})


/*最底圈圈*/
$(".serve_ul li a").hover(function(){
	$(this).children("div").children("img").stop(true);
	
	var t_num=$(this).parent("li").index();

	switch(t_num){
	case 0:$(".serve_ul li").eq(0).children("a").css({background:"url(img/serve_12.png) no-repeat center top"});break;
	case 1:$(".serve_ul li").eq(1).children("a").css({background:"url(img/serve_22.png) no-repeat center top"});break;
	case 2:$(".serve_ul li").eq(2).children("a").css({background:"url(img/serve_32.png) no-repeat center top"});break;
	case 3:$(".serve_ul li").eq(3).children("a").css({background:"url(img/serve_42.png) no-repeat center top"});break;
	}
	
	$(this).children("div").children("img").animate({width:"0px",height:"0px"},500);
},function(){
	$(this).children("div").children("img").animate({width:"130px",height:"130px"},10);
	$(this).css({background:"none"});
})

/*QQ滚动事件*/
var scroll_to;
$(document).ready(function() {
    $(window).scroll(function(){
		
		var bot=3129;//qq显示
		
		scroll_to=(bot+$(window).scrollTop())>=($(document).height()-$(window).height())
		if(scroll_to){
			if(width_a1>=1298)//判断宽度
			$("#qq").css({display:"block"});
			}
		})
});
$(document).ready(function() {
    $(window).scroll(function(){
		
		var bot=3129;//qq隐藏
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
