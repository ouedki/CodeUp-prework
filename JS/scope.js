"use strict";


(function() {
	var myNameIs = 'Yassine';

	function sayHello (name) {
		console.log("Hello from " + name);


	}
	sayHello(myNameIs);

	var random = Math.floor((Math.random()*100)+1);
	console.log('The random Number is: ' + random);


	function isOdd (number) {
	(number % 2 === 0) ? console.log(number + ' is even') : console.log(number + ' is odd');

	}
	isOdd(random);
})();

