$(document).ready(function() {

	// SCROLLED (HEADER)
	$(window).scroll(function() {
		$('.header').toggleClass('header-scrolled-first', $(this).scrollTop() > 0 && $(this).scrollTop() <= 149);
		$('.header').toggleClass('header-scrolled-second', $(this).scrollTop() >= 150);
	});



	// RESPONSIVE MENU
	$('.responsive-burger-button').click(function() {
		$('#responsivemenu').addClass('responsivemenu-clicked');
	});
	$('#responsivemenubutton').click(function() {
		$('#responsivemenu').removeClass('responsivemenu-clicked');
	});





	// SCROLL TO HOME (TOP)
	$('#to-home, #to-home-header').click(function() {
		$('html, body').animate({'scrollTop': '0px'}, 1000);
		// change 'active' class
		return false;
	});
	// SCROLL TO ABOUT
	$("#to-about, #to-about-header, #to-about-arrow").click(function() {
		$('html, body').animate({ scrollTop: $("#destination-about").offset().top }, 1000);
		// change 'active' class
		$('#to-about').addClass('active');
		$('#to-about-header').addClass('active');
		return false;
	});
	// SCROLL TO PORTFOLIO
	$("#to-portfolio, #to-portfolio-header").click(function() {
		$('html, body').animate({
			scrollTop: $("#destination-portfolio").offset().top
		}, 1000);
		return false;
	});

});