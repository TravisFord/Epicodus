$(function(){

	var counter = 1;
	

	$('button#add').click(function(){
		if(counter < 13) {
		var newItemDiv = $(document.createElement('div'))
	     .attr("class", 'col-xs-2');

		newItemDiv.after().html('<label>Item #'+ counter +':' + '<input type="text" name="textbox' + counter +
			'" id="item' + counter + '" class="form-control input" >'+'</label>' );

		newItemDiv.appendTo("form#groceries");
		counter++; 
        
		}
			
	});

				

		$('form#groceries').submit(function(event){
		
			event.preventDefault();
			$('form#groceries').hide();
			
		
			



		
			var groceryList = [];
			var items = ["item1","item2","item3","item4","item5",
			"item6","item7","item8","item9","item10","item11","item12"].sort();

			items.forEach(function(item){
				var userItem = $('input#' + item).val();
				
				groceryList.push(userItem);

			});
	 		
	 		
	 		groceryList.sort().map(function(item){
				if(item !== "") {
					var upperCase = item.toUpperCase();
					$('#output').append("<li>" + upperCase + "</li>");
				}

				
			});

			
			
        
		});






});