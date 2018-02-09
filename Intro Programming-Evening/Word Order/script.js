$(function(){
	var input = $('#input1').val();
	var inputArray = input.split(' ');

	var wordCount = inputArray.reduce(function(allWords, word){
		if(word in allWords) {
			allWords[word]++;
		} else {
			allWords[word] = 1;
		}
		return allWords;
	}, {});

	

	function osort(obj) {  // map the object to an array [key, obj[key]]
    	return Object.keys(obj).map(function(key) {
		 	return[key+ ":"+obj[key]];
    	});

	};

	var getOsort = osort(wordCount);


	$('#wordOrder').submit(function(event){
		event.preventDefault();
		
	
		getOsort.forEach(function(item){
			$('#output2').append("<li>" + item +"</li>");
		});
		
		
	});
});


