

function countUpBy(countTo, multiple) {
	var results = [];
	
		
	 if(multiple > countTo) {
		alert("multiple is greater than the number you ae counting to. Please enter a smaller multiple");
	} else{
		for(var i = multiple; i <= countTo; i += multiple) {
		results.push(i);
		}
	}
	
	return results;
};





$(function() {
	
	$('form#Count').submit(function(event){
		var countTo = parseInt($('#input1').val());
		var multiple = parseInt($('#input2').val());

		event.preventDefault();
		var result = countUpBy(countTo, multiple);

		$('#output').append("<li>"+result+"</li>");

	});

		countTo.val("");
		multiple.val("");

});

