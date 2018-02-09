

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
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $('input:radio[name=operator]:checked').val();
    
    var result;
    if(operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if(operator === "divide") {
      result = divide(number1, number2);
    }


    $("#output").text(result);


    $('#clear1').click(function(){
      $("#output").text("");

    });
  });

});
