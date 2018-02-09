$(function() {
	$('button#hello').click(function(){
		$('ul#you').prepend("<li> Hello how are you? </li>");
		$('ul#page').prepend("<li> helllooo there!!! </li>");

		$('li').click(function(){
		$(this).toggleClass('background');
		$(this).remove();

		});
	});

	$('button#goodbye').click(function(){
		$('ul#you').prepend("<li> I guess it's goodbye </li>");
		$('ul#page').prepend("<li> you are the weakest link goodbye! </li>");

		$('li').click(function(){
		$(this).toggleClass('background');
		$(this).remove();
		});
	});

	$('button#stop').click(function(){
		$('ul#you').prepend("<li> stop copying me! </li>");
		$('ul#page').prepend("<li> stop touching me! </li>");

		$('li').click(function(){
		$(this).toggleClass('background');
		$(this).remove();
		});
	});



});