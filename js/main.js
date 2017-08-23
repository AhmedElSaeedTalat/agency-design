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
