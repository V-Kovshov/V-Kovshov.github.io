$(function () {

	$('.menu-toggle').click(function(){
		$(this).toggleClass('active')
		$('.menu').slideToggle(400)
	})

});


// $('#show-more').click(function() {
//   $('#more').show();
//   $(this).hide();
// });