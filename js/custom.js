$(document).ready(function() {

	// SCROLLED
	$(window).scroll(function() {
		$('.title-content').toggleClass('title-content-scrolled', $(this).scrollTop() > 0);
		$('.header').toggleClass('header-scrolled', $(this).scrollTop() > 0);
	});


	// RESPONSIVE MENU
	$('.responsive-burger-button').click(function() {
		$('#responsivemenu').addClass('responsivemenu-clicked');
	});
	$('#responsivemenubutton').click(function() {
		$('#responsivemenu').removeClass('responsivemenu-clicked');
	});


	// BACK TO TOP
	$('#totop').click(function() {
		$('html, body').animate({'scrollTop': '0px'}, 1000);
		return false;
	});


});