$(function(){
	var count = 1;
	var things = [];
	
	for(i = 0; i < 6; i++) {
		 things.push('#input' + count);
		 count++;
	}

	

	
	$('form#favorite').submit(function(event){
		
		things.forEach(function(thing) {
		var list = $(thing).val();
		$('#output').append("<li>" + list +"</li>");

		});


		

			
		
		
		
		event.preventDefault();
	});

	
	
});