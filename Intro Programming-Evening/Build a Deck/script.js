var suits = [" of hearts", " of spades", " of diamonds", " of clubs"];
var values = ["ace",2,3,4,5,6,7,8,9,10,"jack","queen","king"];
var cards = [];



$(function(){
	
	$('button').click(function(){

	
		suits.forEach(function(suit){
		
			values.forEach(function(value){
				 cards = value + suit;
				$('ul.deck').append('<li>' +cards+'</li>');
				
			});

		});
		
		
	});
	
});