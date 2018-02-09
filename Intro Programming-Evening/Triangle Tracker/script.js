var triangle = function(a, b, c){
	var ab = a + b;
	var bc = b + c;
	var ca = c + a;

	if( ab <= c || bc <= a || ca <= b) {
		return "not a triangle";
	} else if(a === b && b === c && c === a) {
		return "equilateral";
	} else if(a !== b && b!== c && c!== a) {
		return "scalene";
	}else {
		return "isosceles";
	}
};





$(function(){
	$('form#triangle').submit(function(event){
		

		var a = parseInt($('#input1').val());
		var b = parseInt($('#input2').val());
		var c = parseInt($('#input3').val());

		var triangleType = triangle(a,b,c);

		var newTriangle = {
			sideA: a,
			sideB: b,
			sideC: c,
			triangleType: triangleType
		};

		if(newTriangle.triangleType === "equilateral") {
			$('ul#equilateral').append("<li>"
				+ newTriangle.sideA + ","
				+ newTriangle.sideB + ","
				+ newTriangle.sideC + "</li>");
		} else if(newTriangle.triangleType === "isosceles") {
			$('ul#isosceles').append("<li>"
				+ newTriangle.sideA + ","
				+ newTriangle.sideB + ","
				+ newTriangle.sideC + "</li>");
		} else if(newTriangle.triangleType === "scalene") {
			$('ul#scalene').append("<li>"
				+ newTriangle.sideA + ","
				+ newTriangle.sideB + ","
				+ newTriangle.sideC + "</li>");
		} else {
			alert("Sorry, this is not a triangle!");
		}
		

		$('input1').val("");
		$('input2').val("");
		$('input3').val("");

		event.preventDefault();
	});
});


