$(function () {
	var time,time2;
	var rand = parseInt(Math.random()*8+1);
	var liindex = 0;
	var liindex2 = 0;
	var count=0;	
	for (var i = 0; i < 10; i++) {
		if(i>0&&i<10){
			$("#downselect_adult>ul").append("<li>"+i+"</li>");
		}
		if(i<9){
			$("#downselect_child>ul").append("<li>"+i+"</li>");
		}
	}
	
	$("#right_top_lead_list li:first > a").mouseenter(
		function () {
			$(this).css("color","#00a3d2");
			// body...
		}).mouseleave(function () {
			$(this).css("color","#0084bb")
			
		});
	$("#right_top_lead_list li:eq(2)>a").mouseenter(function () {
		$(".order").show();
		$(this).css({"border-right":"none"})
		$("#right_top_lead_list li:eq(2)").css({"border-width":"1px","border-style":"solid","border-color":"#666","border-bottom":"none"});
	});
	$("#right_top_lead_list li:eq(2)").mouseleave(function () {
			$(".order").hide();
			$("#right_top_lead_list li:eq(2)>a").css({"border-right-width":"1px","border-right-style":"solid","border-right-color":"#666"})
		 $("#right_top_lead_list li:eq(2)").css({"border":"none"});
		});
	$(".order li").mouseenter(
		function () {
			$(this).css({"background-color":"#4b7bda"});
			$(this).find("a").css("color","#fff");
			// body...
		}).mouseleave(function () {
			$(this).css("background-color","#fff");
			$(this).find("a").css("color","#666");
			// body...
		});
    
	for(var i=0;i<15;i++){
		if(i==3||i==4||i==5||i==7||i==9||i==10||i==14){
        $("#index_leads>li:eq("+i+")>a").mouseenter(function () {
		    $(this).addClass("main_lead_a").siblings("div").show();
		    count=i;
		    //$(".main_lead_box").show();
	    });
	    $("#index_leads>li:eq("+i+")").mouseleave(function () {
		    $("#index_leads>li>a").removeClass("main_lead_a");
		    $(".main_lead_box").hide();
	    });
		}
	}
	
    $(".limg"+rand).show();
	
	$(".unclick_boxul_li").click(function () {
		$(this).addClass("click_boxul_li").siblings().removeClass("click_boxul_li");
		liindex=$(this).index();
		for (var i = 0; i < $(".unclick_boxul_li").length; i++) {
			$("#mune1_left_mune_div1_main_"+i).hide();
		}
		$("#mune1_left_mune_div1_main_"+liindex).show();
		// body...
	});

	$(".change").click(function () {
		var tex = $(".dep").val();
		$(".dep").val($(".des").val());
		$(".des").val(tex);
	});
	$("#adchiselect>div").on("click",function (e) {	
		//$(".downselect_div").hide();
		$(this).siblings().find(".downselect_div").hide();
		$(this).siblings().find("a").css("background-position","4px 5px");	
		if ($(this).find(".downselect_div").is(":hidden")) {
			$(this).find(".downselect>a").css("background-position","4px -20px");
			$(this).find(".downselect_div").show();
			$(".downselect_div_list>li").on("click", function(e){
				$(this).parents(".downselect_div").hide().siblings("input").val($(this).text());
		
    			e.stopPropagation();
			});
		}else {
			$(this).find(".downselect_div").hide();
			$(".downselect>a").css("background-position","4px 5px");
		}
		$(document).one("click",function () {
			$(this).find(".downselect_div").hide();
			$(".downselect>a").css("background-position","4px 5px");
		});
		e.stopPropagation();
	});
	$(".downselect_div").on("click", function(e){
		e.stopPropagation();
	});

	$(".menu2_top_list_ul>li").on("mouseenter",function () {
		liindex2 = $(this).index();
		$(this).addClass("menu2_top_list_ulhover").css("color","#fff").siblings().removeClass("menu2_top_list_ulhover").css("color","#3bb0d0");
		$("#menu2_top_main"+$(this).index()).show().siblings("div.menu2_top_main1").hide();
	});
	
	function roundpic(index1,index2) {	
		time =setInterval(function() {	
			changepic(index1,index2) ;
			
			index1++;
			index2++;
			if(index1>=6){
				index1=1;
			}
			if(index2>=6){
				index2=1;
			}
		}, 1000);

		window.onfocus=function(){
			time =setInterval(function() {	
				changepic(index1,index2) ;
				
				index1++;
				index2++;
				if(index1>=6){
					index1=1;
				}
				if(index2>=6){
					index2=1;
				}
			}, 1000);
		}

		window.onblur=function(){

  			clearInterval(time);    //清除定时器
		}



			
			
			// body...
		/*else{
			window.clearInterval(time);
		}*/
	}
	function changepic(i,n) {
		if (n<i) {
			for (var j = n; j < i; j++) {
				$("#img"+j).animate({left:'-=945px'},"slow");
				$("#img"+(j+1)).show().animate({left:'0px'},"slow");
				if(j==1){
					$("#img"+(j+4)).hide().css("left","945px");
				}else{
					$("#img"+(j-1)).hide().css("left","945px");
				}
			}

		}else if(i<n){
			for (var j = n; j < 5; j++) {
				
				if(j==1){
					$("#img"+(j+3)).hide().css("left","945px");
				}else{
					$("#img"+(j-1)).hide().css("left","945px");
				}

				console.log("i");
			}
			$("#img5").animate({left:'-=945px'},"slow");
			$("#img4").hide().css("left","945px");
			$("#img1").show().animate({left:'0px'},"slow");
			for (var j = 1; j < i; j++) {
				$("#img"+j).animate({left:'-=945px'},"slow");
				$("#img"+(j+1)).show().animate({left:'0px'},"slow");
				if(j==1){
					$("#img"+(j+4)).hide().css("left","945px");
				}else{
					$("#img"+(j-1)).hide().css("left","945px");
				}
			}
		}
		$("#menu2_roundpic>ul>li:eq("+(i-1)+")").css("background-color","#ff4500").addClass("li_onclik").siblings().css("background-color","#999").removeClass("li_onclik");
		/*if(i==1){
					$("#img5").animate({left:'-=945px'},"slow");
		}else{
					$("#img"+(i-1)).animate({left:'-=945px'},"slow");
				}
		if(i==1||i==2){
			$("#img"+(i+3)).hide().css("left","945px");
		}*/	
	}
	roundpic(2,1);
	//changepic(3,5);
	$("#menu2_roundpic>ul>li").on("click",function () {
			var i = $(".li_onclik").index();
			console.log(i);
			window.clearInterval(time);
			changepic(($(this).index())+1,(i+1));
			roundpic(($(this).index())+2,($(this).index())+1)
			// body...
	});
	$(".mune2_tour_maindiv_img1").on("mouseover",function () {
		$(this).find("div").stop().animate({bottom:'0px'},"300");
		// body...
	}).on("mouseout",function () {
		$(this).find("div").stop().animate({bottom:'-46px'},"300");
		// body...
	}).siblings("a").on("mouseover",function () {
		$(this).find("div").stop().animate({bottom:'0px'},"300");
		// body...
	}).on("mouseout",function () {
		$(this).find("div").stop().animate({bottom:'-47px'},"300");
		// body...
	});
	$("#mune2_tour_maindiv1>.mune2_tour_maindiv_img1").on("mouseover",function () {
		$(this).find("div").stop().animate({bottom:'0px'},"300");
		// body...
	}).on("mouseout",function () {
		$(this).find("div").stop().animate({bottom:'-23px'},"300");
		// body...
	});
	$("#mune2_tour_dir_ul>li").on("mouseover click",function () {
		var index = $(this).index();
		time2=window.setTimeout(function() {
			$("#mune2_tour_dir_ul>li:eq("+index+")").css({"background-color":"#3bb0d0","color":"#fff"}).siblings().css({"background-color":"#fff","color":"#3bb0d0"});
			$("#mune2_tour_maindiv"+(index+1)).show().siblings(".mune2_tour_maindiv1").hide();
		}, 300);	
	}).on("mouseout",function () {
		clearTimeout(time2);
		// body...
	});
	/*while(true){
		roundpic(2) ;
	}*/
    /*$("#mune1_left_mune_div2>ul>li").mouseenter(
		function () {
			$(this).css({"background-color":"#fff","color":"#00afc7"});
			// body...
		}).mouseleave(function () {
			$(this).css({"background-color":"#00afc7","color":"#fff"});
			// body...
		});*/
	let string1 = `wo shi ni da ye ${count}`;
	console.log(string1);
	// body...
});