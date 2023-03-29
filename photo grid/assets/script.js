$(".title").animate({
	opacity: 1
},
	1000
);

$(".content").animate({
	opacity: 1
},
	1000
);

$(document).ready(function () {
	$(".menuopen, #menuopenicon").click(function () {
		$(".menu, #mask").fadeIn(500);
		$(".menuopen, #menuopenicon, .title, .content").fadeOut(500);
	});
	$("#mask, .menuclose, .menuclosebtn").click(function () {
		$(".menu, #mask").fadeOut(500);
		$(".menuopen, #menuopenicon, .title, .content").fadeIn(500);
	});
});