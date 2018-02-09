$(function() {
	$('#fields form').submit(function(event){

		var fields = ["name", "description", "date", "time"];

		fields.forEach(function(field){
			var userField = $('input#' + field).val();
			$('.'+ field +'1').text(userField);
		});
		

		$('#confirm').show();

		event.preventDefault();


	});

});