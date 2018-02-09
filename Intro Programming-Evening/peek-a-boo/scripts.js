$(function(){
	$('.clickable').click(function(){
		$('#showing').slideToggle();
		$('#hidden').slideToggle();
	});

});

$(function(){
	$('.showP1').click(function(){
		$('.hiddenP1').slideToggle();
	});

	$('.showP2').click(function(){
		$('.hiddenP2').slideToggle();
	});
});

$(function() {
	$('p').click(function(){
		
		$(this).toggleClass('highlight');
		
	});

	
});