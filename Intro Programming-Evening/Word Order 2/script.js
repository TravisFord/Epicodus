var wordOrder = function(text) {
	var textSplit = text.toLowerCase().split(' ').sort();
	var word = [];
	var count = [];
	var prev;

	for(var i = 0; i < textSplit.length; i++) {
		if (textSplit[i] !== prev) {
			word.push(textSplit[i]);
			count.push(1);
		} else {
			count[count.length-1]++;
		}
		prev = textSplit[i];
	}

	var counted = [];
	count.forEach(function(count, i){
		counted.push([count, word[i]].join(' '));
	});
	return counted.sort().reverse();
};



$(function(){
	$('form#wordOrder').submit(function(event){
		event.preventDefault();
		var text = $('input#input1').val();
		var textArray = wordOrder(text);
		textArray.forEach(function(word){
			$('#output2').append("<li>" + word+ "</li>")
		});
		
	});

});