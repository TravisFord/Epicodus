function primeSifting(number){
	var numbers = [];
	var primes = [];

 
	for(var i = 2; i <= number; i++) { 
		numbers.push(i);  
	}

	var numbersCopy = numbers;

	for(var prime = 2; prime <= number; prime++) {

		for(index = 0 + prime - 2; index <= numbers.length; index++) {
			if(numbers[index + 1] % prime === 0) {
				numbersCopy.splice((index + 1), 1);
			}
		}
	}

	return numbersCopy;
};



$(function(){
	$('form#prime').submit(function(event){
		event.preventDefault();
		var userInput = $('#input1').val();
		var primes = primeSifting(userInput);

		primes.forEach(function(prime){
			$('#primes').append(prime + ', ');
		});

		$('#result').show();

	});



});