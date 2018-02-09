$(function(){
	$('form#wordPlay').submit(function(event){
		event.preventDefault();

		var userInput = $('input#input1').val().split(' ');
		
		var userArray = [];

		 userInput.map(function(word){
			if(word.length >= 3){
				userArray.push(word);
			}
		});
		var userSentence = userArray.reverse().join(' ');
		alert(userSentence);
	});



	

});