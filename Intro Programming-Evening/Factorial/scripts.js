
function factorialize (integer) {
	
	if(integer === 0 ) {
		return 1;
	} else if(integer.toString().indexOf('.') > -1) {
		return "Not a positive integer";
	} else if(integer < 0) {
		return "Please enter a positive integer";
	} else {
		return (integer * factorialize(integer -1));
	}
	

};

$(function(){
	$('form#factorial').submit(function(event){
		event.preventDefault();
		var userNumber = $('#input1').val();
		var result = factorialize(userNumber);

		$('#result').text(result);
		$('#result').show();
	});
});