// 'use strict';
{
	x = 23; // Gives an error since 'x' is not declared
	var x;
	console.log(x);
	//
	//
	hoistedVariable = 3;
	console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized
	var hoistedVariable;
	//
	//
	hoistedFunction(); // Outputs " Hello world! " even when the function is declared after calling

	function hoistedFunction() {
		console.log(' Hello world! ');
	}
	//
	//
}

// Hoisting takes place in the local scope as well
function doSomething() {
	x = 33;
	console.log(x);
	var x;
}
doSomething();
//
//
//
{
	console.log('3. Difference between “ == “ and “ === “ operators.');
	var x = 2;
	var y = '2';
	console.log(x == y);
	// Returns true since the value of both x and y is the same

	console.log(x === y); // Returns false since the typeof x is "number" and typeof y is "string"
	//
	//
	//
}

{
	console.log('4. Explain Implicit Type Coercion in javascript.');
	var x = 3;
	var y = '3';
	console.log(x + y); // Returns "33"
	var x = 24;
	var y = 'Hello';
	console.log(x + y);

	var x = 3;
	var y = '3';
	console.log(x - y);

	console.log(
		'// The code inside this block will not run since the value of x is 0(Falsy)'
	);
	var x = 0;
	var y = 23;
	if (x) {
		console.log(x);
	} // The code inside this block will not run since the value of x is 0(Falsy)

	if (y) {
		console.log(y);
	} // The code inside this block will run since the value of y is 23 (Truthy)

	var x = 220;
	var y = 'Hello';
	var z = undefined;

	console.log(x || y); // Returns 220 since the first value is truthy
	console.log(x || z); // Returns 220 since the first value is truthy
	console.log(x && y); // Returns "Hello" since both the values are truthy
	console.log(y && z); // Returns undefined since the second value is falsy

	if (x && y) {
		console.log('Code runs'); // This block runs because x && y returns "Hello" (Truthy)
	}

	if (x || z) {
		console.log('Code runs'); // This block runs because x || y returns 220(Truthy)
	}
}


https://github.com/sudheerj/javascript-interview-questions#what-is-the-difference-between-call-apply-and-bind

// Call and apply are pretty interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for comma (separated list) and Apply is for Array.

// Whereas Bind creates a new function that will have this set to the first parameter passed to bind().
