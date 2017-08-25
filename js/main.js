$("#colMenuIcons").ready(function(){
	if($(window).width() <= 750){
		$("#colMenuIcons").removeClass("text-right");
		$("#colMenuIcons").addClass("text-center");
	}
	console.log($(document).width());

});
$(window).on("resize",function(){
	if($(window).width() <= 750){
		$("#colMenuIcons").removeClass("text-right");
		$("#colMenuIcons").addClass("text-center");
	}
	else {
		$("#colMenuIcons").removeClass("text-center");
		$("#colMenuIcons").addClass("text-right");
	}
});
$("#searchIcon").click(function(){
	$(".searchBox").toggle();
	$(".shape").toggle();
	$(".input").focus();
});
$(".input").on("blur",function(){
	$(".searchBox").hide();
	$(".shape").hide();
	
});
$("#list").click(function(){
		$(".sideMenu").toggle("slide",{direction:"left"},"5000");
});
$("#list2").click(function(){
		$(".sideMenu").hide("slide",{direction:"left"},"5000");
});
$(window).ready(function(){
	if($(this).width() <= 340){
			$("#button").removeClass("col-7");
			$("#button").addClass("col-12");
			$(".buttonWrapper").css({"margin-left":"13%"});
	}
});
$(window).ready(function(){
	$(".number2").animateNumber({"number":"18"});
});
$(window).ready(function(){
	$(".number1").animateNumber({"number":"99"});
});
$(window).ready(function(){
	$(".number3").animateNumber({"number":"206"});
});
$(window).ready(function(){
	$(".number4").animateNumber({"number":"73"});
});

$("#image1").mouseover(function(){
var x =$("#image1").position();
// var top = 
console.log(x);
var top = x.top+"px";
var left = x.left+"px";
$(".backgroundHover").animate({"opacity":"1"});
$(".backgroundHover").animate({"opacity":"1","top":x.top+"px","left":x.left+"px"},"fast");
$(".xx").animate({"opacity":"1","top":x.top+"px","left":x.left+"px"},"1000");

});


$("#image2").mouseover(function(){
	

var x =$("#image2").position();
$(".backgroundHover").animate({"opacity":"1","top":x.top+"px","left":x.left+"px"},"fast");
$(".xx").animate({"opacity":"1","top":x.top+"px","left":x.left+"px"},"1000");

});



$("#image3").hover(function(){
var x =$("#image3").position();
$(".backgroundHover").animate({"opacity":"1","top":x.top+"px","left":x.left+"px"},"fast");
$(".xx").animate({"opacity":"1","top":x.top+"px","left":x.left+"px"},"fast");

});

$("#image4").hover(function(){
var x =$("#image4").position();
$(".backgroundHover").animate({"opacity":"1","top":x.top+"px","left":x.left+"px"},"fast");
$(".xx").animate({"opacity":"1","top":x.top+"px","left":x.left+"px"},"fast");

});


$("#image5").hover(function(){
var x =$("#image5").position();
$(".backgroundHover").animate({"opacity":"1","top":x.top+"px","left":x.left+"px"},"fast");
$(".xx").animate({"opacity":"1","top":x.top+"px","left":x.left+"px"},"fast");

});

$("#image6").hover(function(){
var x =$("#image6").position();
$(".backgroundHover").animate({"opacity":"1","top":x.top+"px","left":x.left+"px"},"fast");
$(".xx").animate({"opacity":"1","top":x.top+"px","left":x.left+"px"},"fast");

});

$("#image7").hover(function(){
var x =$("#image7").position();
$(".backgroundHover").animate({"opacity":"1","top":x.top+"px","left":x.left+"px"},"fast");
$(".xx").animate({"opacity":"1","top":x.top+"px","left":x.left+"px"},"fast");

});

$("#image8").hover(function(){
var x =$("#image8").position();
$(".backgroundHover").animate({"opacity":"1","top":x.top+"px","left":x.left+"px"},"fast");
$(".xx").animate({"opacity":"1","top":x.top+"px","left":x.left+"px"},"fast");

});


$("#image9").hover(function(){
var x =$("#image9").position();
$(".backgroundHover").animate({"opacity":"1","top":x.top+"px","left":x.left+"px"},"fast");
$(".xx").animate({"opacity":"1","top":x.top+"px","left":x.left+"px"},"fast");

});
$("#mobile").click(function(){
	$(this).css("border"," 3px solid #00c2e5");
		$("#ILLUSTRATIONS").css("border","3px solid #e9e9e9");
$("#all").css("border","3px solid #e9e9e9");
	$("#image2").hide("scale",800);
	$("#image3").hide("scale",800);
	$("#image4").hide("scale",800);
	$("#image5").hide("scale",800);
	$("#image6").hide("scale",800);
	$("#image7").hide("scale",800);
	$("#image8").hide("scale",800);
	$("#image9").hide("scale",800);
	$(".backgroundHover").css({"opacity":"0"});
	$(".xx").css({"opacity":"0"});
	$("#pagination").css({"display":"none"});
	// $("#filterByAnimation").css({"height":"auto"});
});
$("#ILLUSTRATIONS").click(function(){
	$(this).css("border"," 3px solid #00c2e5");
	$("#mobile").css("border","3px solid #e9e9e9");
		$("#all").css("border","3px solid #e9e9e9");

	if($("#image2").css({"display":"inline-block"}) || $("#image3").css({"display":"inline-block"})
	|| $("#image4").css({"display":"inline-block"}) || $("#image5").css({"display":"inline-block"})){
		$("#image2").hide("scale",800);
		$("#image3").hide("scale",800);
		$("#image4").hide("scale",800);
		$("#image5").hide("scale",800);

	}
	if($("#image6").css({"display":"none"}) || $("#image7").css({"display":"none"})
		|| $("#image8").css({"display":"none"})){
	

		$("#image6").show("scale",1000,function(){
			// $(this).animate({"left":"449px","top":"0px"},"1000000");
		});
		$("#image7").show("scale",1000,function(){
			// $(this).animate({"left":"449px","top":"0px"},"1000000");
		});
		$("#image8").show("scale",1000,function(){
			// $(this).animate({"left":"449px","top":"0px"},"1000000");
		});
	}
	
	
	
	$(".backgroundHover").css({"opacity":"0"});
	$(".xx").css({"opacity":"0"});
	// $("#image2").fadeout();
});
$("#all").click(function(){

	$(this).css("border"," 3px solid #00c2e5");
		$("#mobile").css("border","3px solid #e9e9e9");
	$("#ILLUSTRATIONS").css("border","3px solid #e9e9e9");

	for(let x = 0; x < 10; x++){
		$("#image"+x).show("scale",1000);
		}

	$(".backgroundHover").css({"opacity":"0"});
	$(".xx").css({"opacity":"0"});
	});



		







	