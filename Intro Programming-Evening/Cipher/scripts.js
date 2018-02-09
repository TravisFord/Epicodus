
//buisness logic
var sentence = prompt("Please enter a sentence");
console.log(sentence);

function capitalize() {
	var first = sentence.charAt(0).toUpperCase();
	var last = sentence.charAt(sentence.length -1).toUpperCase();
	var newString = first + last;
	return newString;
}

function reverse() {
	var result = capitalize();
	return result.split("").reverse().join("");
}

function callBoth() {
	 capitalize();
	 reverse();
	return sentence + reverse();
}

function divideByTwo() {
	var sentenceDivide = Math.floor(sentence.length / 2);
	var output = sentence.charAt(sentenceDivide);
	 var bonus = output + callBoth();
	  var bonus2 = bonus.split("").reverse().join("");
	  return bonus2;
}


//user- interface logic

$(function () {
	$('#left').click(function (){
		document.getElementById('left').innerHTML = sentence;
	});

	$('#right').click(function (){
		document.getElementById('left').innerHTML = "";
		document.getElementById('right').innerHTML = divideByTwo();
	});

});