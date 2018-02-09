$(function(){
	$('form#groceries').submit(function(event){
		event.preventDefault();
		$('form#groceries').hide();

		
		var item1 = $('input#item1').val();
		var item2 = $('input#item2').val();
		var item3 = $('input#item3').val();
		var item4 = $('input#item4').val();
		var item5 = $('input#item5').val();


		var items = [ item1, item2, item3, item4, item5].sort();

		items.map(function(item){
			if(item !== ""){
				var userInput = item.toUpperCase();
				$('#output').append("<li>" + userInput + "</li>");
			}
			

		});
		
		



	});


	$('button#add').click(function(){
		$('form#groceries').prepend('<div class="form-group"><label for="item1">item:<input id="item1" class="form-control" type="text"></label></div>')
         
        
	});


});







