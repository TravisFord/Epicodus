var vowels = ['a', 'e', 'i', 'o', 'u'];

function replaceSentence(sentence) {
	for(var i = 0; i< sentence.length; i++) {
		if(vowels.indexOf(sentence[i]) > -1) {
			sentence = sentence.replace(sentence[i], "-");
		}
	}
	 return sentence;
};

replaceSentence("I am a martial artist");




$(function(){
	$('form#puzzle').submit(function(event) {
		event.preventDefault();
		var sentence = $('#input1').val();
		var text = replaceSentence(sentence);
		$('#input1').hide();
		$('#output').text(text);
	});
});