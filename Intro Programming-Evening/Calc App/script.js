

// This is the business (or back-end) logic:
function add (number1, number2) {
	return number1 + number2;
}

function subtract (number1, number2) {
	return number1 - number2;
}

function multiply(number1, number2) {
	return number1 * number2;
}

function divide(number1, number2) {
	return number1 / number2;
}


// Everything below this line is the user interface (or front-end) logic: 
$(document).ready(function() {
	//Add
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result1 = add(number1, number2);
    $("#output1").text(result1);
  });

  	//Subtract
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtract(number1, number2);
    $("#output2").text(result);
  });


  	//Multiply
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result3 = multiply(number1, number2);
    $("#output3").text(result3);
  });


  	//Divide
  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result4 = divide(number1, number2);
    $("#output4").text(result4);
  });


$('#clear1').click(function(){
	$("#output1").text("");
	$("#output2").text("");
	$("#output3").text("");
	$("#output4").text("");

});


});
