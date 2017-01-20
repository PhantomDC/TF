$(document).ready(function(){

	$(".btn_burger").on("click",function(e){

		e.preventDefault();

		$(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active");

	});

});