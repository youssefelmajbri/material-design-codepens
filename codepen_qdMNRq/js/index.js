$(function(){
	$(".circleclose").click(function(){
    $(".circleclose").addClass("gobottom");
		$(".circle").toggleClass("expand");
	});
		$(".close").click(function(){
    $(".circleclose").removeClass("gobottom");
		$(".circle").removeClass("expand");
	});
});