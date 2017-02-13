$(document).ready(function(){

	function isInteger(num) {
		return (num ^ 0) === num;
	}

	$(".btn_burger").on("click",function(e){

		e.preventDefault();
		$(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active");

	});

	$(".js-strafe-mnu").on("click",function(){
		var mnu = $(".mnu");
		$(this).hasClass("next") ? mnu.addClass("dragged") : mnu.removeClass("dragged");
	});

	$(".reviews .item").each(function(ind){

		var rating = $(".reviews .item:eq("+ind+") .stars").data("rating");
		var h = null;

		isInteger(rating) ? h = false : h = true;

		for(var i = 0; i < Math.floor(rating); i++){
			$(".reviews .item:eq("+ind+") .stars .star:eq("+i+")").addClass("f");
		}

		if(h){
			$(".reviews .item:eq("+ind+") .stars .star.f:last + span").addClass("h");
		}
	});

	$(".faq_content .faq_title").on("click",function(e){

		e.preventDefault();

		if($(this).hasClass("active")){
			$(this).next(".faq_ask").hide("fast");
			$(this).removeClass("active")
		}
		else{
			$(".faq_ask").hide(0);
			$(".faq_title").removeClass("active");
			
			$(this).next(".faq_ask").slideDown("fast");
			$(this).addClass("active");
		}
	});

	$(".slov_content .item").each(function(ind,it){

		var t = $(it).find(".let").text();
		$(".slov_letters .letter:contains('"+t+"')").addClass("have").attr({
			"data-index" : ind
		});

	});

	$(".slov_letters .letter.have").on("click",function(e){

		$(".slov_letters .letter.have").removeClass("active");
		$(this).addClass("active");
		var ind = $(this).data("index");
		var offset = 15;
		var top = $(".slov_content .item:eq("+ind+")").offset().top - offset - parseFloat($("header").css("paddingTop"));

		console.log();

		$("body,html").animate({
			"scrollTop" : top
		},500);

	});

});

var Popup = function(args){

	this.popup =  $(".popup_spec"),
	this.close = function(){
		this.popup.fadeOut("fast");
	}
	this.show = function(e){
		this.popup.fadeIn("fast");
		$(".btn_burger").removeClass("active");
		return false;

	}
}

var popup = new Popup();

