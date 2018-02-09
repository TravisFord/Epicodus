function isPalindrome(phrase) {
	 var userInput = phrase.replace(/\W+/gi, '').toLowerCase();
	 
	if(userInput.split('').reverse().join('') === userInput) {
		return true;
	} else {
		return false;
	}
};



$(function(){
	$('form#palindromes').submit(function(event){
		event.preventDefault();
		var phrase = $('#input1').val();

		var result = isPalindrome(phrase);

		$('.input').text(phrase);

		if(!result) {
			$('.not').text('not');
		} else{
			$('.not').text('');

		}

		

		$('#result').show();

	});


});